export default function OrderDetailsLoading() {
  return (
    <section>
      <div className="card bg-primary shadow-xl my-2">
        <div className="card-body py-4">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div className="card bg-primary shadow-xl rounded-box w-full my-2">
        <div className="card-body">
          <section className="flex justify-center">
            <div className="skeleton h-96 w-80"></div>
          </section>
          <section className="flex flex-col gap-4 mt-20">
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
          </section>
        </div>
      </div>
    </section>
  );
}
