import { number, object, string } from "yup";
import { QuantityUnit } from "./Product";

export interface OrderRequestFormValues {
  firstName: string;
  lastName?: string;
  email?: string;
  mobile: string;
  quantity: number;
  unit: QuantityUnit;
  instructions?: string;
}

export const orderRequestFormSchema = object({
  firstName: string().required({
    message: "First name is required.",
  }),
  email: string().email(),
  mobile: string()
    .required({
      message: "Mobile number is required.",
    })
    .matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {
      excludeEmptyString: true,
      message: "Mobile number appears to be invalid.",
    }),
  quantity: number()
    .required({
      message: "Quantity is required",
    })
    .positive()
    .min(0.5),
});
