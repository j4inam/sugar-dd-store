import { Product } from "@/models/Product";
import ProductCard from "./ProductCard";

type VerticalProductCarouselProps = {
  productsList: Product[];
};

const VerticalProductCarousel = ({
  productsList,
}: VerticalProductCarouselProps) => {
  return (
    <section className="flex flex-col items-center w-full lg:mt-4">
      <div className="h-[36rem] carousel carousel carousel-vertical gap-4 p-4 rounded-box bg-primary shadow-xl">
        {productsList?.map((product, idx) => (
          <div className="carousel-item" id={`item${idx + 1}`} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalProductCarousel;
