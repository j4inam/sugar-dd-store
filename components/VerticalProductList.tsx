import { Product } from "@/models/Product";
import ProductCard from "./ProductCard";

type VerticalProductListProps = {
  productsList: Product[];
};

const VerticalProductList = ({ productsList }: VerticalProductListProps) => {
  return (
    <section className="flex flex-col items-center w-full">
      {productsList?.map((product) => (
        <div className="carousel-item" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </section>
  );
};

export default VerticalProductList;
