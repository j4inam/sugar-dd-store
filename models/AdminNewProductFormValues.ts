import { array, boolean, number, object, string } from "yup";

export interface AdminNewProductFormValues {
  title: string;
  description: string;
  price: number;
  productVariants: string[];
  imageURL: string;
  quantity: number;
  quantityUnit: string;
  isQuantityEditable: boolean;
  quantityUnitVariants?: string[];
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
  isQuantityEditable: boolean().required(
    "Quantity editable toggle is required."
  ),
  productVariants: array().min(1).required("Atleast 1 variant is required."),
  sizeVariants: array().min(1).required("Atleast 1 size option is required."),
});
