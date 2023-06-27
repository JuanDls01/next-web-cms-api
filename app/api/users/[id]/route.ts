import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const user = await prisma.user.findUnique({
    where: { id: +params.id },
    include: {
      cargos: true,
    },
  });

  if (user) {
    const { password, role, ...safeUserInfo } = user;
    return new Response(JSON.stringify(safeUserInfo));
  }

  return new Response(JSON.stringify({ message: "No user founded" }));
}
