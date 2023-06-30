import prisma from "@/lib/prisma";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <h1>Users</h1>
      {users?.map((user) => {
        return (
          <div key={user.fullName}>
            <h3>{user.username}</h3>
            <p>{user.fullName}</p>
          </div>
        );
      })}
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
