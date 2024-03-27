import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import OrderItemDetails from "@/components/OrderItemDetails";
import { OrdersSelect } from "@/models/Order";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prismaClient from "@/models/db";
import { redirect } from "next/navigation";

type OrderDetailsProps = {
  params: {
    id: string;
  };
};

const getUserOrderById = async ({
  orderId,
  userId,
}: {
  orderId: string;
  userId: string;
}) => {
  if (!userId || !orderId) {
    return null;
  }

  try {
    const orderDetails = await prismaClient.orders.findUnique({
      where: {
        id: orderId,
        userId,
      },
      include: {
        product: true,
      },
    });

    return orderDetails;
  } catch (e) {
    return null;
  }
};

const OrderDetails = async ({ params }: OrderDetailsProps) => {
  const { getUser } = getKindeServerSession();
  let userData: KindeUser | null = await getUser();
  const orderDetails: OrdersSelect | null = await getUserOrderById({
    userId: userData?.id || "",
    orderId: params.id,
  });

  if (!orderDetails) {
    redirect(`/orders`);
  }

  return (
    <section>
      <div className="card bg-primary shadow-xl my-2">
        <div className="card-body py-4">
          <h1 className="text-2xl font-bold">Order Details</h1>
          <p className="text-primary-content font-bold">Order ID: {orderDetails.id.slice(-6)}</p>
        </div>
      </div>
      <div className="card bg-primary shadow-xl rounded-box w-full my-2">
        <div className="card-body">
          <OrderItemDetails order={orderDetails} />
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
