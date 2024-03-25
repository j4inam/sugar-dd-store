export type Product = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  quantityUnit: string;
  quantityStepValue: number;
  imageURL: string;
  description: string | null;
  productVariants: string[];
  sizeVariants: string[];
  createdAt: Date;
  updatedAt: Date;
};
