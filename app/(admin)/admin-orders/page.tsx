import Link from "next/link";
import OrderStatusBadge from "@/components/OrderStatusBadge";
import { OrdersSelect } from "@/models/Order";
import dayjs from "dayjs";
import prismaClient from "@/models/db";

const getOrdersList = async (userId?: string) => {
  const orders: OrdersSelect[] = await prismaClient.orders.findMany({
    include: {
      product: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return orders;
};

const AdminOrders = async () => {
  const ordersList: OrdersSelect[] = await getOrdersList();
  return (
    <>
      <h1 className="text-2xl font-bold">Manage Orders</h1>
      <div className="divider mt-0"></div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Created At</th>
              <th>Contact</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map((order, idx) => (
              <tr
                key={idx}
                className="lg:hover:bg-base-200 lg:hover:text-base-content cursor-pointer"
              >
                <th>{idx + 1}.</th>
                <td>
                  <Link href={`/admin-orders/${order.id}`}>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">
                          {order.product?.title} ({order.selectedVariant})
                        </div>
                        <div className="text-sm opacity-50">
                          {order.selectedSize} / {order.quantity} {order.unit}
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <Link href={`/admin-orders/${order.id}`}>
                    <div>{dayjs(order.createdAt).format("DD MMM 'YY")}</div>
                  </Link>
                </td>
                <td>
                  <div className="font-bold">
                    {order.firstName} {order.lastName}
                  </div>
                  <div className="text-sm opacity-50">
                    {order.mobile} {order.email && `/ ${order.email}`}
                  </div>
                </td>
                <td>
                  <Link href={`/admin-products/${order.id}`}>
                    <OrderStatusBadge status={order.status} />
                  </Link>
                </td>
                <th>
                  <Link href={`/admin-products/${order.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AdminOrders;
