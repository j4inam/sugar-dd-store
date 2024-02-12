export interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  quantityUnit: string;
  description: string;
  imageURL: string;
  type: ProductType;
  color: string;
}

export type ProductType = "cake" | "pastry" | "cupcake";
