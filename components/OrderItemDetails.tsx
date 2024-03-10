import { OrdersSelect, TSOrderStatus } from "@/models/Order";

import Image from "next/image";
import { ORDER_STATUS_PARAMS_MAP } from "@/app/(store)/constants";
import OrderStatusTimeline from "./OrderStatusTimeline";
import dayjs from "dayjs";

export type OrderItemDetailsProps = {
  order: OrdersSelect;
};

const OrderItemDetails = ({ order }: OrderItemDetailsProps) => {
  return (
    <>
      <section className="flex w-full justify-center">
        <div className="relative h-[26rem] w-80 sm:h-full md:h-[26rem] md:w-64 lg:h-[28rem] lg:w-80 xl:h-[32rem]">
          <Image
            src={order.product?.imageURL || "https://placehold.co/600x400"}
            alt={order.product?.title || "Product Image"}
            fill
            className="rounded-box shadow-xl"
          />
        </div>
      </section>
      <section className="hidden md:flex items-center w-full mt-6">
        <OrderStatusTimeline status={order.status} />
      </section>
      <section className="flex flex-col md:flex-row justify-between w-full mt-6">
        <section>
          <h2 className="text-xl font-bold">Order Id</h2>
          <p className="text-neutral">{order.id}</p>
        </section>
        <section className="md:hidden">
          <h2 className="text-xl font-bold">Order Status</h2>
          <p className={ORDER_STATUS_PARAMS_MAP[order.status].textClass}>{order.status}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Order Id</h2>
          <p className="text-neutral">{order.id}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">
            {order.status === TSOrderStatus.SUBMITTED ||
            order.status === TSOrderStatus.CANCELLED
              ? "Requested Delivery Date"
              : "Delivery Date"}
          </h2>
          <p className="text-neutral">
            {order.status === TSOrderStatus.SUBMITTED ||
            order.status === TSOrderStatus.CANCELLED
              ? dayjs(order.expectedDeliveryDate).format("DD MMM YYYY")
              : dayjs(order.confirmedDeliveryDate).format("DD MMM YYYY")}
          </p>
        </section>
      </section>
      <div className="divider my-0"></div>
      <section className="flex flex-col md:flex-row justify-between w-full">
        <section>
          <h2 className="text-xl font-bold">Contact Name</h2>
          <p className="text-neutral">
            {order.firstName} {order.lastName}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Contact Mobile</h2>
          <p className="text-neutral">{order.mobile}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Contact Email</h2>
          <p className="text-neutral">{order.email}</p>
        </section>
      </section>
      <div className="divider my-0"></div>
      <section className="flex flex-col md:flex-row justify-between w-full">
        <section>
          <h2 className="text-xl font-bold">Item</h2>
          <p className="text-neutral">
            {order.product?.title} ({order.selectedVariant})
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Size / Weight</h2>
          <p className="text-neutral">
            {order.selectedSize} / {order.quantity} {order.unit}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Include Sparklers</h2>
          <p className="text-neutral">{order.includeSparkler ? "Yes" : "No"}</p>
        </section>
      </section>
      <div className="divider my-0"></div>
      <section className="flex flex-col md:flex-row justify-between w-full">
        <section>
          <h2 className="text-xl font-bold">Colors &amp; Themes</h2>
          <p className="text-neutral">{order.themeDescription || "-"}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Special Instructions</h2>
          <p className="text-neutral">{order.instructions || "-"}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Price</h2>
          <p className="text-neutral">${order.product?.price}</p>
        </section>
      </section>
      <div className="divider my-0"> </div>
      <section className="flex flex-col md:flex-row justify-between w-full">
        <section>
          <h2 className="text-xl font-bold">Add Ons</h2>
          <p className="text-neutral">-</p>
        </section>
      </section>
      <div className="divider my-0"></div>
      <section className="flex flex-col md:flex-row justify-end w-full">
        <section>
          <h2 className="text-xl font-bold">Order Total</h2>
          <h1 className="text-2xl font-bold text-neutral">
            ${order.orderAmount || order.product?.price}
          </h1>
        </section>
      </section>
      <div className="divider my-0"></div>
    </>
  );
};

export default OrderItemDetails;
