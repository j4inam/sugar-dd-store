import ProductCarousel from "@/components/ProductCarousel";
import VerticalProductCarousel from "@/components/VerticalProductCarousel";
import { Product } from "@/models/Product";
import { Suspense } from "react";
import Loading from "./loading";

const getProductsList = async () => {
  const BASE_URL = process.env.VERCEL_ENV
    ? process.env.VERCEL_URL
    : process.env.URL;
  const productsListRes = await fetch(`${BASE_URL}/api/products`);
  if (!productsListRes.ok) {
    throw new Error("Failed to fetch products list");
  }

  return productsListRes.json();
};

const Home = async () => {
  const productsList: Product[] = JSON.parse(await getProductsList());

  return (
    <Suspense fallback={<Loading />}>
      <section className="flex flex-col items-center w-full md:hidden lg:mt-4">
        <VerticalProductCarousel productsList={productsList} />
      </section>
      <section className="hidden md:flex flex-col items-center lg:mt-4">
        <ProductCarousel productsList={productsList} />
      </section>
    </Suspense>
  );
};

export default Home;
