import { Product } from "@/models/Product";

type ProductDetailsProps = {
  params: {
    id: string;
  };
};

const getProductById = async (id: string) => {
  const BASE_URL = process.env.VERCEL_ENV
    ? process.env.VERCEL_URL
    : process.env.URL;
  const productRes = await fetch(`${BASE_URL}/api/products/${id}`);
  if (!productRes.ok) {
    throw new Error("Failed to fetch product details");
  }

  return productRes.json();
};
const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const productDetails: Product = await getProductById(params.id);
  return <h1 className="prose">Product: {productDetails.title}</h1>;
};

export default ProductDetails;
