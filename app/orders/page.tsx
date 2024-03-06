import EmptyList from "@/components/EmptyList";
import Link from "next/link";
import OrderItem from "@/components/OrderItem";
import { OrdersSelect } from "@/models/Order";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prismaClient from "@/models/db";

const getOrdersList = async (userId?: string) => {
  const orders: OrdersSelect[] = await prismaClient.orders.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return orders;
};

const Orders = async () => {
  const { getUser } = getKindeServerSession();
  let userData = await getUser();
  const ordersList: OrdersSelect[] = await getOrdersList(userData?.id);

  const emptyCartActions = (
    <Link href={"/"}>
      <button className="btn">Browse our cakes!</button>
    </Link>
  );

  return (
    <section className="flex justify-center my-6">
      <div className="card bg-primary shadow-xl rounded-box w-full overflow-y-scroll h-[56rem] scroller">
        <div className="card-body">
          <h1 className="text-2xl">Your Orders</h1>
          {ordersList.length === 0 && (
            <section>
              {
                <EmptyList
                  text={
                    "Your dessert paradise awaits! Fill your hearts with the sweetness of our fresh-baked, handmade cakes and treats."
                  }
                  emptyListActions={emptyCartActions}
                />
              }
            </section>
          )}
          {ordersList.length !== 0 && (
            <section className="grid grid-cols-1 lg: md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {ordersList.map((order: OrdersSelect) => (
                <OrderItem order={order} key={order.id} />
              ))}
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Orders;
