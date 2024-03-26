import OrdersCount from "@/components/admin/OrderStats";
import dayjs from "dayjs";

const AdminDash = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="divider mt-0"></div>
      <section>
        <OrdersCount startDate={dayjs().startOf("year")} endDate={dayjs()} />
      </section>
    </>
  );
};

export default AdminDash;
