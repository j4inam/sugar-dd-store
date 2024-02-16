import ProductCarousel from "@/components/ProductCarousel";
import VerticalProductCarousel from "@/components/VerticalProductCarousel";
import { Product } from "@/models/Product";
import { Suspense } from "react";
import Loading from "./loading";
import { promises as fs } from "fs";

const getProductsList = async () => {
  const fileData = await fs.readFile(
    process.cwd() + "/mocks/products-list.json",
    "utf8"
  );
  return JSON.parse(fileData);
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
