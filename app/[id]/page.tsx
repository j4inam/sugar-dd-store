import { Product } from "@/models/Product";
import productListJson from "@/mocks/products-list.json";
import Image from "next/image";
import OrderRequestForm from "@/components/OrderRequestForm";

type ProductDetailsProps = {
  params: {
    id: string;
  };
};

const getProductById = async (productId: string) => {
  const productsList: Product[] = productListJson as Product[];
  const productDetails = productsList.find(
    (product) => product.id === productId
  );

  return productDetails;
};
const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const productDetails: Product | undefined = await getProductById(params.id);

  return (
    <section className="flex justify-center my-6">
      <div className="card bg-primary shadow-xl rounded-box w-full md:w-11/12 xl:w-9/12 2xl:w-2/3 overflow-y-scroll h-[40rem] md:h-[54rem] scroller">
        <div className="card-body">
          <div className="flex flex-col md:flex-row md:gap-20">
            <section className="flex flex-col w-full items-center md:h-[26rem] lg:h-[28rem] xl:h-[32rem]">
              <div className="relative h-80 w-64 sm:h-full sm:w-80 xl:w-96">
                <Image
                  src={
                    productDetails?.imageURL || "https://placehold.co/600x400"
                  }
                  alt={productDetails?.title || "Product Image"}
                  fill
                  className="rounded-box shadow-xl"
                />
              </div>
            </section>
            <section className="flex gap-4 prose">
              <div>
                <h1 className="mt-8 mb-0">{productDetails?.title}</h1>
                <h1 className="mt-0">${productDetails?.price}</h1>
                <p>{productDetails?.description}</p>
              </div>
            </section>
          </div>
          <section className="flex flex-col justify-center items-center mt-6">
            <section className="prose">
              <h2>Create Order Request</h2>
            </section>
            <OrderRequestForm productId={params.id} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
