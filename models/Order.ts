import { OrderStatus } from "@prisma/client";
import { Product } from "./Product";

export enum TSOrderStatus {
  CANCELLED = "CANCELLED",
  SUBMITTED = "SUBMITTED",
  CONFIRMED = "CONFIRMED",
  BAKING = "BAKING",
  READY = "READY",
  COMPLETED = "COMPLETED",
}

export type OrdersSelect = {
  id: string;
  email: string | null;
  expectedDeliveryDate: Date;
  firstName: string;
  lastName: string | null;
  includeSparkler: boolean;
  instructions: string | null;
  mobile: string;
  productId: string;
  product: Product | null;
  quantity: number;
  selectedSize: string;
  selectedVariant: string;
  themeDescription: string | null;
  unit: string;
  userId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  orderAmount: number | null;
  status: TSOrderStatus | OrderStatus;
};
