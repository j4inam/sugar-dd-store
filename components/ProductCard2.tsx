import { Product } from "@/models/Product";
import { motion } from "framer-motion";

export type ProductCard2Props = {
  product: Product;
};

const textMotion = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const imageMotion = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 1,
    },
  },
};

const ProductCard2 = ({ product }: ProductCard2Props) => {

  return (
    <motion.div
      className="card w-64 md:w-96 bg-base-100 shadow-xl cursor-pointer"
      initial="rest"
      whileHover="hover"
      whileTap="hover"
    >
      <figure>
        <motion.img
          src={product.imageURL}
          alt={product.title}
          variants={imageMotion}
          className="rounded-box"
        />
      </figure>
      <div className="p-6 absolute prose h-full">
        <div className="flex flex-col justify-between h-full">
          <section>
            <h2 className="mb-0">{product.title}</h2>
            <h1>${product.price}</h1>
            <motion.p className="opacity-0" variants={textMotion}>
              {product.description}
            </motion.p>
          </section>
          <motion.div className="flex justify-center" variants={textMotion}>
            <button className="btn btn-neutral md:btn-wide">Buy Now</button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard2;
