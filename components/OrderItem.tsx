import Image from "next/image";
import Link from "next/link";
import OrderStatusBadge from "./OrderStatusBadge";
import { OrdersSelect } from "@/models/Order";
import dayjs from "dayjs";

export type OrderItemsProps = {
  order: OrdersSelect;
};

const OrderItem = ({ order }: OrderItemsProps) => {
  return (
    <div className="card xl:card-side bg-base-100 shadow-xl">
      <figure className="relative h-96 xl:w-48">
        <Image src={order.product?.imageURL || ""} alt="Movie" fill={true} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{order.product?.title}</h2>
        <OrderStatusBadge status={order.status} />
        <p>Order Date: {dayjs(order.createdAt).format("DD MMM 'YY")}</p>
        <p>Order Amount: ${order.orderAmount || order.product?.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/orders/${order.id}`}>
            <button className="btn btn-primary btn-outline">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
