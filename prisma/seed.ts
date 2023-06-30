import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const adminUser = await prisma.user.upsert({
    where: { username: "adminuser" },
    update: {},
    create: {
      fullName: "Admin User",
      username: "adminuser",
      password: await bcrypt.hash(`${process.env.ADMIN_USER_PASS}`, 10),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
