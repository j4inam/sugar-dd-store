import { TSOrderStatus } from "@/models/Order";
import orderBaking from "@/public/order-status/order-baking.svg";
import orderCancelled from "@/public/order-status/order-cancelled.svg";
import orderCompleted from "@/public/order-status/order-completed.svg";
import orderConfirmed from "@/public/order-status/order-confirmed.svg";
import orderReady from "@/public/order-status/order-ready.svg";
import orderSubmitted from "@/public/order-status/order-submitted.svg";

export const ORDER_STATUS_PARAMS_MAP = {
  SUBMITTED: {
    img: orderSubmitted,
    text: "We've received your order. We'll get in touch shortly.",
    bgClass: "bg-neutral",
    stepClass: "step-neutral",
    textClass: "text-neutral",
    index: Object.values(TSOrderStatus).indexOf(
      TSOrderStatus[TSOrderStatus.SUBMITTED]
    ),
  },
  CONFIRMED: {
    img: orderConfirmed,
    text: "Your order has been confirmed. We'll get baking shortly.",
    bgClass: "bg-success",
    stepClass: "step-success",
    textClass: "text-success",
    index: Object.values(TSOrderStatus).indexOf(
      TSOrderStatus[TSOrderStatus.CONFIRMED]
    ),
  },
  BAKING: {
    img: orderBaking,
    text: "Our bakers are working their magic. Hang on tight while we prepare your order.",
    bgClass: "bg-info",
    stepClass: "step-info",
    textClass: "text-info",
    index: Object.values(TSOrderStatus).indexOf(
      TSOrderStatus[TSOrderStatus.BAKING]
    ),
  },
  READY: {
    img: orderReady,
    text: "Your order is ready. Be prepared to let the sweetness hit your soul.",
    bgClass: "bg-success",
    stepClass: "step-success",
    textClass: "text-success",
    index: Object.values(TSOrderStatus).indexOf(
      TSOrderStatus[TSOrderStatus.READY]
    ),
  },
  COMPLETED: {
    img: orderCompleted,
    text: "Order Completed! Hope you enjoyed your treats as much as we enjoyed baking them.",
    bgClass: "bg-secondary",
    stepClass: "step-secondary",
    textClass: "text-secondary",
    index: Object.values(TSOrderStatus).indexOf(
      TSOrderStatus[TSOrderStatus.COMPLETED]
    ),
  },
  CANCELLED: {
    img: orderCancelled,
    text: "Order Cancelled!",
    bgClass: "bg-error",
    stepClass: "step-error",
    textClass: "text-error",
    index: Object.values(TSOrderStatus).indexOf(
      TSOrderStatus[TSOrderStatus.CANCELLED]
    ),
  },
};
