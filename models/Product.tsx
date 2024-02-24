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
  size?: Size
}

export type ProductType = "cake" | "pastry" | "cupcake";

export type QuantityUnit = "kg" | "lb";

export type Size = "6in" | "8in"