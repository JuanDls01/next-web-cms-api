import prisma from "@/lib/prisma";
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
    <div>
      <h1>Users</h1>
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
