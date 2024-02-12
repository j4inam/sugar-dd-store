"use client";

import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { Product } from "@/models/Product";
import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const ProductCard = ({
  product,
  index,
  progress,
  range,
  targetScale,
}: {
  product: Product;
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const { title, description, price, imageURL, color } = product;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div
      className="h-screen flex items-center justify-center sticky top-0"
      ref={container}
    >
      <motion.div
        className="card lg:card-side bg-base-100 shadow-xl flex flex-col relative origin-top"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        <div className="card-body prose">
          <h1 className="mb-1">{title}</h1>
          <p className="my-1">{description}</p>
          <h1 className="mb-1">${price}</h1>
          <div className="card-actions">
            <button className="btn btn-outline">
              Order Now <ArrowLongRightIcon className="h-6 w-6" />{" "}
            </button>
          </div>
        </div>
        <div className="m-10 relative overflow-hidden w-96 h-96 rounded-xl">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <Image fill className="object-cover" src={imageURL} alt={title} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
