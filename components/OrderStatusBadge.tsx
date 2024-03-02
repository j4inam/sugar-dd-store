import { OrderStatus } from "@prisma/client";
import { TSOrderStatus } from "@/models/Order";

type OrderStatusBadgeProps = {
  status: TSOrderStatus | OrderStatus;
};

const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  return (
    <>
      {status === TSOrderStatus.CANCELLED && (
        <div className="badge badge-error">{status}</div>
      )}

      {status === TSOrderStatus.SUBMITTED && (
        <div className="badge badge-primary">{status}</div>
      )}

      {status === TSOrderStatus.CONFIRMED && (
        <div className="badge badge-success">{status}</div>
      )}

      {status === TSOrderStatus.BAKING && (
        <div className="badge badge-info">{status}</div>
      )}

      {status === TSOrderStatus.READY && (
        <div className="badge badge-success">{status}</div>
      )}

      {status === TSOrderStatus.COMPLETED && (
        <div className="badge badge-secondary">{status}</div>
      )}
    </>
  );
};

export default OrderStatusBadge;
