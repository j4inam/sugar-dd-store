import { Product } from "@/models/Product";
import { promises as fs } from "fs";

type ProductDetailsProps = {
  params: {
    id: string;
  };
};

const getProductById = async (productId: string) => {
  const fileData = await fs.readFile(
    process.cwd() + "/mocks/products-list.json",
    "utf8"
  );
  const productsList: Product[] = JSON.parse(fileData);
  const productDetails = productsList.find(
    (product) => product.id === productId
  );

  return productDetails;
};
const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const productDetails: Product | undefined = await getProductById(params.id);
  return <h1 className="prose">Product: {productDetails?.title}</h1>;
};

export default ProductDetails;
