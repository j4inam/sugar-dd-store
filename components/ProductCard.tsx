"use client";

import { Variants, motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/models/Product";

export type ProductCardProps = {
  product: Product;
  doAnimate?: boolean;
};

const textMotion: Variants = {
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

const imageMotion: Variants = {
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

const ProductCard = ({ product, doAnimate }: ProductCardProps) => {
  return (
    <motion.div
      className="card w-80 bg-base-100 shadow-xl cursor-pointer"
      initial="rest"
      whileHover="hover"
      whileTap="hover"
    >
      <figure className="rounded-box">
        <motion.div
          className="relative h-[32rem] w-96"
          variants={doAnimate ? imageMotion : undefined}
        >
          <Image src={product.imageURL} alt={product.title} fill={true} />
        </motion.div>
      </figure>
      <div className="p-6 absolute prose h-full">
        <div className="flex flex-col justify-between h-full">
          <section>
            <h2 className="mb-0 mt-0">{product.title}</h2>
            <h1>${product.price}</h1>
            <motion.p variants={doAnimate ? textMotion : undefined}>
              {product.description}
            </motion.p>
          </section>
          <motion.div
            className="flex justify-center"
            variants={doAnimate ? textMotion : undefined}
          >
            <Link href={`/${product.id}`}>
              <button className="btn btn-neutral md:btn-wide">Order Now</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
