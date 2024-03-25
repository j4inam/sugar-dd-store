import { array, boolean, number, object, string } from "yup";

export interface AdminNewProductFormValues {
  title: string;
  description: string;
  price: number;
  productVariantInputValue?: string;
  productVariants: string[];
  imageURL: string;
  quantity: number;
  quantityUnit: string;
  quantityStepValue: number;
  sizeVariantInputValue?: string;
  sizeVariants: string[];
}

export const adminNewProductFormSchema = object({
  title: string().required("Product title is required."),
  description: string()
    .required("Product description is required.")
    .max(150, "Description must be 150 charracters or less."),
  imageURL: string().required("Product image URL is required."),
  price: number()
    .required("Product price is required.")
    .positive("Product price is invalid.")
    .min(0.5, "Product price is invalid."),
  quantity: number()
    .required("Product quantity is required.")
    .positive()
    .min(0.5, "Minimum quantity is 0.5"),
  quantityUnit: string().required("Quantity Unit is required."),
  quantityStepValue: number().required("Quantity step value is required"),
  productVariants: array().min(1, "Atleast 1 product variant is required."),
});
