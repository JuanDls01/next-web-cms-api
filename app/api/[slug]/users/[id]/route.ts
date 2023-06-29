import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

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

  return new NextResponse(
    JSON.stringify({ success: false, message: "No user founded" }),
    { status: 400, headers: { "content-type": "application/json" } }
  );
}
