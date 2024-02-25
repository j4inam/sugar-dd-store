import ProductCarousel from "@/components/ProductCarousel";
import VerticalProductCarousel from "@/components/VerticalProductCarousel";
import { Product } from "@/models/Product";
import { Suspense } from "react";
import Loading from "./loading";
import prismaClient from "@/models/db";

const getProductsList = async () => {
  const products = await prismaClient.product.findMany();

  return products;
};

const Home = async () => {
  const productsList: Product[] = await getProductsList();

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
