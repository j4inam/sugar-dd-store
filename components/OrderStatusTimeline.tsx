import { ORDER_STATUS_PARAMS_MAP } from "@/app/(store)/constants";
import { OrderStatus } from "@prisma/client";
import { TSOrderStatus } from "@/models/Order";

export type OrderStatusTimelineProps = {
  status: TSOrderStatus | OrderStatus;
};

const OrderStatusTimeline = ({ status }: OrderStatusTimelineProps) => {
  const orderStatusIndex = Object.values(TSOrderStatus).indexOf(
    TSOrderStatus[status]
  );
  const stepClass = ORDER_STATUS_PARAMS_MAP[status].stepClass;

  return (
    <ul className="steps w-full">
      <li
        className={`step ${
          orderStatusIndex >=
            ORDER_STATUS_PARAMS_MAP[TSOrderStatus.SUBMITTED].index && stepClass
        }`}
        data-content={`${
          orderStatusIndex >=
          ORDER_STATUS_PARAMS_MAP[TSOrderStatus.SUBMITTED].index
            ? "✓"
            : ORDER_STATUS_PARAMS_MAP[TSOrderStatus.SUBMITTED].index
        }`}
      >
        Submitted
      </li>
      <li
        className={`step ${
          orderStatusIndex >=
            ORDER_STATUS_PARAMS_MAP[TSOrderStatus.CONFIRMED].index && stepClass
        }`}
        data-content={`${
          orderStatusIndex >=
          ORDER_STATUS_PARAMS_MAP[TSOrderStatus.CONFIRMED].index
            ? "✓"
            : ORDER_STATUS_PARAMS_MAP[TSOrderStatus.CONFIRMED].index
        }`}
      >
        Confirmed
      </li>
      <li
        className={`step ${
          orderStatusIndex >=
            ORDER_STATUS_PARAMS_MAP[TSOrderStatus.BAKING].index && stepClass
        }`}
        data-content={`${
          orderStatusIndex >=
          ORDER_STATUS_PARAMS_MAP[TSOrderStatus.BAKING].index
            ? "✓"
            : ORDER_STATUS_PARAMS_MAP[TSOrderStatus.BAKING].index
        }`}
      >
        Baking
      </li>
      <li
        className={`step ${
          orderStatusIndex >=
            ORDER_STATUS_PARAMS_MAP[TSOrderStatus.READY].index && stepClass
        }`}
        data-content={`${
          orderStatusIndex >= ORDER_STATUS_PARAMS_MAP[TSOrderStatus.READY].index
            ? "✓"
            : ORDER_STATUS_PARAMS_MAP[TSOrderStatus.READY].index
        }`}
      >
        Ready
      </li>
      <li
        className={`step ${
          orderStatusIndex >=
            ORDER_STATUS_PARAMS_MAP[TSOrderStatus.COMPLETED].index && stepClass
        }`}
        data-content={`${
          orderStatusIndex >=
          ORDER_STATUS_PARAMS_MAP[TSOrderStatus.COMPLETED].index
            ? "✓"
            : ORDER_STATUS_PARAMS_MAP[TSOrderStatus.COMPLETED].index
        }`}
      >
        Completed
      </li>
    </ul>
  );
};

export default OrderStatusTimeline;
