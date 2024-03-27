import ProductListItemSkeleton from "@/components/ProductListItemSkeleton";

export default function Loading() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <ProductListItemSkeleton />
    </section>
  );
}
