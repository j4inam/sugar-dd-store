import { Product } from "@/models/Product";
import Image from "next/image";
import OrderRequestForm from "@/components/OrderRequestForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import prismaClient from "@/models/db";

type ProductDetailsProps = {
  params: {
    id: string;
  };
};

const getProductById = async (productId: string) => {
  const productDetails = await prismaClient.product.findUnique({
    where: {
      id: productId,
    },
  });
  return productDetails;
};
const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const productDetails: Product | null = await getProductById(params.id);
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserLoggedIn = await isAuthenticated();
  let userData;
  if (isUserLoggedIn) {
    userData = await getUser();
  }

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
            {!isUserLoggedIn && (
              <div
                className="hero h-80"
                style={{
                  backgroundImage:
                    "url(https://source.unsplash.com/round-cake-on-brown-wooden-cake-stand-enVg_Vtsw1c)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-base-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Get Yours Now</h1>
                    <p className="mb-5">
                      Let&apos;s bake you some sweetness. Please click &quot;Get
                      Started&quot; below to login and submit your order.
                    </p>
                    <LoginLink postLoginRedirectURL={`/${params.id}`}>
                      <button className="btn btn-primary">Get Started</button>
                    </LoginLink>
                  </div>
                </div>
              </div>
            )}
            {isUserLoggedIn && (
              <>
                <section className="prose">
                  <h2>Create Order Request</h2>
                </section>
                <OrderRequestForm
                  product={productDetails}
                  firstNameInitValue={userData?.given_name || ""}
                  lastNameInitValue={userData?.family_name || ""}
                  emailInitValue={userData?.email || ""}
                />
              </>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
