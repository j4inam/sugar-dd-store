import ProductCarousel from "@/components/ProductCarousel";
import VerticalProductCarousel from "@/components/VerticalProductCarousel";
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

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center w-full md:hidden lg:mt-4">
        <VerticalProductCarousel productsList={productsList} />
      </section>
      <section className="hidden md:flex flex-col items-center lg:mt-4">
        <ProductCarousel productsList={productsList} />
      </section>
    </>
  );
};

export default Home;
