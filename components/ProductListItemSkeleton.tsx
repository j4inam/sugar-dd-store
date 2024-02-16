const ProductListItemSkeleton = () => {
  return (
    <section className="card w-80 bg-base-100 p-4 shadow-xl">
      <div className="flex flex-col gap-4">
        <div className="skeleton h-96 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </section>
  );
};

export default ProductListItemSkeleton;
