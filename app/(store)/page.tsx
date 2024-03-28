import { Product } from "@/models/Product";
import ProductCarousel from "@/components/ProductCarousel";
import VerticalProductList from "@/components/VerticalProductList";
import prismaClient from "@/models/db";

const getProductsList = async () => {
  const products = await prismaClient.products.findMany();

  return products;
};

const Home = async () => {
  const productsList: Product[] = await getProductsList();

  return (
    <>
      <section className="flex flex-col items-center w-full md:hidden lg:mt-4">
        <VerticalProductList productsList={productsList} />
      </section>
      <section className="hidden md:flex flex-col items-center justify-center h-full">
        <ProductCarousel productsList={productsList} />
      </section>
    </>
  );
};

export default Home;
