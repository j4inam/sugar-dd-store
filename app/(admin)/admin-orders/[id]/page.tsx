import OrderItemDetails from "@/components/OrderItemDetails";
import { OrdersSelect } from "@/models/Order";
import prismaClient from "@/models/db";
import { redirect } from "next/navigation";

export type AdminOrderDetailsProps = {
  params: {
    id: string;
  };
};

const getOrderById = async ({ orderId }: { orderId: string }) => {
  if (!orderId) {
    return null;
  }

  try {
    const orderDetails = await prismaClient.orders.findUnique({
      where: {
        id: orderId,
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

const AdminOrderDetails = async ({ params }: AdminOrderDetailsProps) => {
  const orderDetails: OrdersSelect | null = await getOrderById({
    orderId: params.id,
  });

  if (!orderDetails) {
    redirect(`/admin-orders`);
  }

  return (
    <section>
      <div className="card bg-light shadow-lg my-2">
        <div className="card-body py-4">
          <h1 className="text-2xl font-bold">Order Details</h1>
          <p className="text-light-content font-bold">
            Order ID: {orderDetails?.id.slice(-6)}
          </p>
        </div>
      </div>
      <div className="card bg-light shadow-lg rounded-box w-full my-2">
        <div className="card-body">
          <OrderItemDetails order={orderDetails} />
        </div>
      </div>
    </section>
  );
};

export default AdminOrderDetails;
