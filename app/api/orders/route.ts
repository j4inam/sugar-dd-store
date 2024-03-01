import { Prisma } from "@prisma/client";
import { Resend } from "resend";
import prismaClient from "@/models/db";

export async function POST(request: Request, response: Response) {
  const order: Prisma.OrdersCreateInput = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  await prismaClient.orders.create({ data: order });

  const { data, error } = await resend.emails.send({
    from: "Acme <system@sugardd.co>",
    to: ["j4inam@gmail.com"],
    subject: "[Sugar DD] New Order Request!",
    text: `New Order Request Received from ${order.firstName} ${order.lastName} (${order.mobile})`,
  });

  if (error) {
    return new Response(error.message, {
      status: 400,
    });
  }

  return Response.json(data);
}
