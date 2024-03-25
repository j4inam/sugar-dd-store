import { Prisma } from "@prisma/client";
import prismaClient from "@/models/db";

export async function POST(request: Request, response: Response) {
  const product: Prisma.ProductsCreateInput = await request.json();

  await prismaClient.products.create({ data: product });

  return new Response();
}
