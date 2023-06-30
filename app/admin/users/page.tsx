import prisma from "@/lib/prisma";
import Link from "next/link";
import Table from "../components/Table/Table";

const UsersPage = async () => {
  const users = await getUsers();
  const columns = [
    {
      Header: "Full Name",
      accesor: "fullName",
    },
    { Header: "Username", accesor: "username" },
    { Header: "Role", accesor: "role" },
  ];
  return (
    <div className="flex items-center flex-col space-y-5">
      <h1 className="text-4xl font-bold my-2">Users</h1>
      <button className="bg-indigo-400 rounded-full p-2">
        <Link href={"/admin/users/create"}>Create User</Link>
      </button>
      <Table widthTable={"500px"} rows={users} columns={columns} />
    </div>
  );
};

const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: { fullName: true, username: true, role: true },
    orderBy: { fullName: "desc" },
  });
  return users;
};

export default UsersPage;
