import { Product } from "@/models/Product";
import productListJson from "@/mocks/products-list.json";

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
  return <h1 className="prose">Product: {productDetails?.title}</h1>;
};

export default ProductDetails;
