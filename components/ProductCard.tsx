import Image from "next/image";
import Link from "next/link";
import { Product } from "@/models/Product";

export type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <section className="p-4 md:p-0 shadow-xl cursor-pointer rounded-box bg-primary my-2 md:my-0">
      <div className="card w-full md:w-80 bg-base-100 shadow-xl">
        <figure className="rounded-box">
          <div className="relative h-[32rem] w-96">
            <Image src={product.imageURL} alt={product.title} fill={true} />
          </div>
        </figure>
        <div className="p-6 absolute prose h-full">
          <div className="flex flex-col justify-between h-full">
            <section>
              <h2 className="mb-0 mt-0">{product.title}</h2>
              <h1>${product.price}</h1>
              <p>{product.description}</p>
            </section>
            <div className="flex justify-center">
              <Link href={`/products/${product.id}`}>
                <button className="btn btn-neutral md:btn-wide">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
