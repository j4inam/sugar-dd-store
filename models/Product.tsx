export interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  quantityUnit: QuantityUnit;
  description: string;
  imageURL: string;
  type: ProductType;
  color: string;
}

export type ProductType = "cake" | "pastry" | "cupcake";

export type QuantityUnit = "kg" | "lb";
