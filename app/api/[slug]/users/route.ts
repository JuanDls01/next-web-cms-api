import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: `Users endpoint` });
}

interface CreateUserRequestBody {
  username: string;
  fullName: string;
  password: string;
  role?: "ADMIN";
}

export async function POST(request: Request) {
  const body: CreateUserRequestBody = await request.json();

  const userAlreadyExist = await prisma.user.findUnique({
    where: {
      username: body.username,
    },
  });

  if (userAlreadyExist)
    return new NextResponse(
      JSON.stringify({ success: false, message: "User already exist" }),
      { status: 400, headers: { "content-type": "application/json" } }
    );

  const user = await prisma.user.create({
    data: {
      fullName: body.fullName,
      username: body.username,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
