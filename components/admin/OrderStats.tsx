import { Dayjs } from "dayjs";
import { Prisma } from "@prisma/client";
import prismaClient from "@/models/db";

type OrderStatsProps = {
  startDate: Dayjs;
  endDate: Dayjs;
};

type OrderGroupByProductIdAndCount =
  | (Prisma.PickEnumerable<Prisma.OrdersGroupByOutputType, "productId"[]> & {
      _count: number;
    })
  | null;

const getOrdersCount = async ({
  startDate,
  endDate,
}: {
  startDate: Dayjs;
  endDate: Dayjs;
}) => {
  try {
    const orderCounts = await prismaClient.orders.groupBy({
      by: ["status"],
      _count: true,
      where: {
        createdAt: {
          gte: startDate.toISOString(), // Greater than or equal to startDate
          lt: endDate.toISOString(), // Less than endDate
        },
      },
    });

    const orderCountsByStatus: { [key: string]: number } = {};
    orderCounts.forEach((group) => {
      orderCountsByStatus[group.status] = group._count; // Access status and count
    });

    const totalOrderCount = orderCounts.reduce(
      (sum, order) => sum + order._count,
      0
    );

    orderCountsByStatus["TOTAL"] = totalOrderCount;
    return orderCountsByStatus;
  } catch (error) {
    console.error("Error fetching order counts by status:", error);
  }
};

const getMostOrderedProduct = async ({
  startDate,
  endDate,
}: {
  startDate: Dayjs;
  endDate: Dayjs;
}) => {
  const orderCountsByProduct = await prismaClient.orders.groupBy({
    by: ["productId"],
    _count: true,
    where: {
      createdAt: {
        gte: startDate.toISOString(), // Greater than or equal to startDate
        lt: endDate.toISOString(), // Less than endDate
      },
    },
  });

  const maxCountProduct = orderCountsByProduct.reduce(
    (
      maxObject: OrderGroupByProductIdAndCount,
      currentObject: OrderGroupByProductIdAndCount
    ) => {
      if (
        currentObject &&
        currentObject._count > (maxObject ? maxObject._count : -Infinity)
      ) {
        return currentObject;
      }
      return maxObject;
    },
    null
  );

  const maxOrderedProductDetails = await prismaClient.products.findUnique({
    where: {
      id: maxCountProduct?.productId,
    },
  });

  return {
    productTitle: maxOrderedProductDetails?.title,
    orderCount: maxCountProduct?._count,
  };
};

const getTotalRevenue = async ({
  startDate,
  endDate,
}: {
  startDate: Dayjs;
  endDate: Dayjs;
}) => {
  try {
    const totalOrderAmount = await prismaClient.orders.aggregate({
      _sum: { orderAmount: true },
      where: {
        status: "COMPLETED",
        createdAt: {
          gte: startDate.toISOString(), // Greater than or equal to startDate
          lt: endDate.toISOString(), // Less than endDate
        },
      },
    });

    const sum = totalOrderAmount._sum.orderAmount || 0; // Extract the sum (or 0 if none)

    return sum;
  } catch (error) {
    console.error("Error fetching total order amount:", error);
  }
};

const OrderStats = async ({ startDate, endDate }: OrderStatsProps) => {
  const ordersCount = await getOrdersCount({ startDate, endDate });
  const totalOrderRevenue = await getTotalRevenue({ startDate, endDate });
  const mostOrderedProduct = await getMostOrderedProduct({
    startDate,
    endDate,
  });
  return (
    <section className="flex justify-center">
      <div className="stats stats-vertical md:stats-horizontal shadow w-full lg:w-3/4">
        <div className="stat place-items-center text-secondary">
          <div className="stat-title">Orders Received</div>
          <div className="stat-value">{ordersCount?.TOTAL}</div>
          <div className="stat-desc">Since {startDate.format("MMMM YYYY")}</div>
        </div>
        <div className="stat place-items-center text-primary">
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value">${totalOrderRevenue}</div>
          <div className="stat-desc">
            {ordersCount?.COMPLETED}{" "}
            {ordersCount?.COMPLETED && ordersCount?.COMPLETED > 1
              ? "orders"
              : "order"}{" "}
            completed since {startDate.format("MMM YYYY")}
          </div>
        </div>
        <div className="stat place-items-center text-accent">
          <div className="stat-title">Most Ordered Product</div>
          <div className="stat-value">{mostOrderedProduct.productTitle}</div>
          <div className="stat-desc">
            Ordered {mostOrderedProduct.orderCount} times since
            {startDate.format("MMM YYYY")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderStats;
