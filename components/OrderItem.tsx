import { OrdersSelect, TSOrderStatus } from "@/models/Order";

import Image from "next/image";
import OrderStatusBadge from "./OrderStatusBadge";
import dayjs from "dayjs";

export type OrderItemsProps = {
  order: OrdersSelect;
};

const OrderItem = ({ order }: OrderItemsProps) => {
  return (
    <div className="card xl:card-side bg-base-100 shadow-xl">
      <figure className="relative h-80 md:h-96 xl:w-48">
        <Image src={order.product?.imageURL || ""} alt="Movie" fill={true} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{order.product?.title}</h2>
        <OrderStatusBadge status={order.status} />
        <p className="my-2">
          Order Date: {dayjs(order.createdAt).format("MM-DD-YYYY")}
        </p>
        {Object.keys(TSOrderStatus).indexOf(order.status) >=
          Object.keys(TSOrderStatus).indexOf(TSOrderStatus.CONFIRMED) && (
          <p>Amount: ${order.orderAmount}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-outline">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
