import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prismaClient from "@/models/db";

const getOrdersList = async (userId?: string) => {
  const orders = await prismaClient.orders.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  });

  return orders;
};

const Orders = async () => {
  const { getUser } = getKindeServerSession();
  let userData = await getUser();
  const productsList = await getOrdersList(userData?.id);
  return <>{JSON.stringify(productsList)}</>;
};

export default Orders;
