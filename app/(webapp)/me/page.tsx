"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const getMyProfile = async (userId: number) => {
  const res = await fetch(`/users/${userId}`);
  // The return value is *not* serialized

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const MyProfile = async () => {
  const { data: session } = useSession();
  if (!session?.user) {
    redirect("/");
  }
  const data = await getMyProfile(+session?.user.id);
  if (!data) {
    redirect("/");
  }
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {data}
      </p>
    </div>
  );
};

export default MyProfile;
