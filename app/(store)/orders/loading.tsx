import ProductListItemSkeleton from "@/components/ProductListItemSkeleton";

export default function OrdersLoading() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-2">
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <div className="card bg-primary shadow-xl rounded-box w-full" key={idx}>
          <div className="card-body p-4">
            <ProductListItemSkeleton />
          </div>
        </div>
      ))}
    </section>
  );
}
