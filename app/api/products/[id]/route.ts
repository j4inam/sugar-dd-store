import { Product } from "@/models/Product";
import { promises as fs } from "fs";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const productId = params.id;

  if (!productId) {
    return new Response("Product Id is required", {
      status: 400,
    });
  }
  const fileData = await fs.readFile(
    process.cwd() + "/mocks/products-list.json",
    "utf8"
  );
  const productsList: Product[] = JSON.parse(fileData);
  const productDetails = productsList.find(
    (product) => product.id === productId
  );
  return Response.json(productDetails, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
