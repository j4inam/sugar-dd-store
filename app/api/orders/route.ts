import { Prisma } from "@prisma/client";
import prismaClient from "@/models/db";

export async function POST(request: Request) {
  const order: Prisma.OrdersCreateInput = await request.json();
  await prismaClient.orders.create({ data: order });

  return Response.json({});
}
