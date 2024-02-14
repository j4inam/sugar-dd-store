"use client";

import ProductCard2 from "@/components/ProductCard2";
import { Product } from "@/models/Product";

const productsList: Product[] = [
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    price: 59.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/bundt-chocolate-cake-W1TOhhlbQpw",
    type: "cake",
    color: "#88a28d",
  },
  {
    id: "strawberry-cake",
    title: "Strawberry Cake",
    price: 49.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL:
      "https://source.unsplash.com/a-close-up-of-a-cake-on-a-table-with-flowers-SDa6YfGxkDI",
    type: "cake",
    color: "#e86d7b",
  },
  {
    id: "red-velvet-cake",
    title: "Red Velvet Cake",
    price: 89.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL:
      "https://source.unsplash.com/chocolate-cake-with-white-icing-on-brown-wooden-table-izAbXEaalVY",
    type: "cake",
    color: "#66b1b3",
  },
  {
    id: "chocolate-cake-2",
    title: "Chocolate Cake",
    price: 59.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL: "https://source.unsplash.com/bundt-chocolate-cake-W1TOhhlbQpw",
    type: "cake",
    color: "#88a28d",
  },
  {
    id: "strawberry-cake-2",
    title: "Strawberry Cake",
    price: 49.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL:
      "https://source.unsplash.com/a-close-up-of-a-cake-on-a-table-with-flowers-SDa6YfGxkDI",
    type: "cake",
    color: "#e86d7b",
  },
  {
    id: "red-velvet-cake-2",
    title: "Red Velvet Cake",
    price: 89.99,
    quantity: 1,
    quantityUnit: "lb",
    description:
      "Indulge in pure decadence with every slice of this rich and velvety chocolate cake – a heavenly delight for the senses.",
    imageURL:
      "https://source.unsplash.com/chocolate-cake-with-white-icing-on-brown-wooden-table-izAbXEaalVY",
    type: "cake",
    color: "#66b1b3",
  },
];

const Home2 = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="carousel carousel-center max-w-sm md:max-w-lg p-4 space-x-4 bg-primary rounded-box shadow-xl">
        {productsList.map((product, idx) => (
          <div className="carousel-item" id={`item${idx + 1}`} key={product.id}>
            <ProductCard2 product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-6">
        {productsList.map((_, idx) => (
          <a href={`#item${idx + 1}`} className="btn btn-sm">
            {idx + 1}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Home2;
