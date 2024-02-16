import ProductListItemSkeleton from "@/components/ProductListItemSkeleton";

export default function Loading() {
  return (
    <section className="w-screen flex justify-center">
      <ProductListItemSkeleton />
    </section>
  );
}
