"use client"

import ProductCard from "@/components/ProductCard";
import { Product } from "@/models/Product";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const productsList: Product[] = [
  {
    id: "chocolate-cake-1",
    title: "Chocolate Cake 1",
    price: 59.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/chocolate-cake-kPxsqUGneXQ",
    type: "cake",
    color: "#88a28d",
  },
  {
    id: "chocolate-cake-2",
    title: "Chocolate Cake 2",
    price: 49.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/chocolate-cake-kPxsqUGneXQ",
    type: "cake",
    color: "#e86d7b",
  },
  {
    id: "chocolate-cake-3",
    title: "Chocolate Cake 3",
    price: 89.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/chocolate-cake-kPxsqUGneXQ",
    type: "cake",
    color: "#66b1b3",
  },
  {
    id: "chocolate-cake-4",
    title: "Chocolate Cake 4",
    price: 59.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/chocolate-cake-kPxsqUGneXQ",
    type: "cake",
    color: "#ae4770",
  },
  {
    id: "chocolate-cake-5",
    title: "Chocolate Cake 5",
    price: 59.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/chocolate-cake-kPxsqUGneXQ",
    type: "cake",
    color: "#e86d7b",
  },
  {
    id: "chocolate-cake-6",
    title: "Chocolate Cake 6",
    price: 59.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/chocolate-cake-kPxsqUGneXQ",
    type: "cake",
    color: "#88a28d",
  },
  {
    id: "chocolate-cake-7",
    title: "Chocolate Cake 7",
    price: 59.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/chocolate-cake-kPxsqUGneXQ",
    type: "cake",
    color: "#ae4770",
  },
];

const Home = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container}>
      {productsList.map((product, index) => {
        const targetScale = 1 - (productsList.length - index) * 0.025;
        return (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            progress={scrollYProgress}
            range={[index * 0.125, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Home;
