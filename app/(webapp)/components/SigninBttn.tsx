"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SigninBttn = () => {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <Link href="/me">
          <p className="text-sky-600">{`${session.user.fullName}`}</p>
        </Link>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninBttn;
