import prisma from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany({
    select: {  name: true,
      description: true,
      category: true,
      prize: true,
      isActive: true,
      count: true, },
    orderBy: { name: "desc" },
  });
  return NextResponse.json(products);
}

interface CreateProductRequestBody {
  name: string;
  description: string;
  category: number;
  prize: number;
  isActive: boolean;
  count: number;
}

export async function POST(request: Request) {
  const body: CreateProductRequestBody = await request.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      category: Number(body.category),
      prize: Number(body.prize),
      isActive: Boolean(body.isActive),
      count:Number(body.count)
    },
  });

  return new Response(JSON.stringify(product));
}