import { number, object, string } from "yup";

export interface OrderRequestFormValues {
  firstName: string;
  lastName?: string;
  email?: string;
  mobile: string;
  quantity: number;
  unit: string;
  instructions?: string;
  productId: string;
  selectedSize?: string;
  selectedVariant?: string;
  themeDescription?: string;
  expectedDeliveryDate?: string;
  includeSparkler?: boolean;
}

export const orderRequestFormSchema = object({
  firstName: string().required("First name is required."),
  email: string().required("Email is required.").email("Email is invalid."),
  mobile: string()
    .required("Mobile number is required.")
    .matches(
      /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Mobile number is invalid."
    ),
  quantity: number().required("Quantity is required.").positive().min(0.5, "Minimum order quantity is 0.5"),
  instructions: string().max(
    300,
    "Please limit instructions to 300 chars. or less."
  ),
  themeDescription: string().max(
    300,
    "Please limit instructions to 300 chars. or less."
  ),
  expectedDeliveryDate: string().required(
    "Expected delivery date is required."
  ),
});
