import ProductListItemSkeleton from "@/components/ProductListItemSkeleton";

export default function ProductsLoading() {
  return (
    <>
      <section className="flex flex-col items-center w-full md:hidden lg:mt-4">
        {[0, 1, 2].map((idx) => (
          <ProductListItemSkeleton key={idx} />
        ))}
      </section>
      <section className="hidden md:flex flex-col items-center justify-center h-full">
        <div className="carousel carousel-center sm:w-4/5 xl:w-1/2 p-4 space-x-4 bg-primary rounded-box shadow-xl">
          {[0, 1, 2, 3].map((idx) => (
            <div className="carousel-item" key={idx}>
              <ProductListItemSkeleton />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
