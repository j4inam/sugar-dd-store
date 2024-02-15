import { Product } from "@/models/Product";
import ProductCard from "./ProductCard";

type ProductCarouselProps = {
  productsList: Product[];
};

const ProductCarousel = ({ productsList }: ProductCarouselProps) => {
  return (
    <>
      <div className="carousel carousel-center sm:w-4/5 xl:w-1/2 p-4 space-x-4 bg-primary rounded-box shadow-xl">
        {productsList.map((product, idx) => (
          <div className="carousel-item" id={`item${idx + 1}`} key={product.id}>
            <ProductCard product={product} doAnimate />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-6">
        {productsList.map((_, idx) => (
          <a href={`#item${idx + 1}`} className="btn btn-sm" key={idx}>
            {idx + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default ProductCarousel;
