"use client";

import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import {
  OrderRequestFormValues,
  orderRequestFormSchema,
} from "@/models/OrderRequestFormValues";

import Dialog from "./Dialog";
import Link from "next/link";
import { ORDER_CONFIRMATION_DIALOG_ID } from "@/constants";
import { Prisma } from "@prisma/client";
import { Product } from "@/models/Product";
import dayjs from "dayjs";
import { showDialog } from "@/helpers/utils";
import { useFormik } from "formik";
import { useState } from "react";

type OrderRequestFormProps = {
  product: Product | null;
  firstNameInitValue?: string;
  lastNameInitValue?: string;
  emailInitValue?: string;
  userId: string;
};

const OrderRequestForm = ({
  product,
  firstNameInitValue,
  lastNameInitValue,
  emailInitValue,
  userId,
}: OrderRequestFormProps) => {
  const [expectedDeliveryDate, setExpectedDeliveryDate] =
    useState<DateValueType>({
      startDate: null,
      endDate: null,
    });

  const orderConfirmationDialogActions = (
    <Link href={{ pathname: "/orders", query: { r: 1 } }}>
      <button className="btn btn-accent">View Orders</button>
    </Link>
  );

  const handleExpectedDeliveryDateChange = (newDate: DateValueType) => {
    setExpectedDeliveryDate(newDate);
    formik.setFieldValue(
      "expectedDeliveryDate",
      dayjs(newDate?.startDate, "YYYY-MM-DD").format()
    );
  };

  const formik = useFormik({
    initialValues: {
      firstName: firstNameInitValue,
      lastName: lastNameInitValue,
      email: emailInitValue,
      mobile: "",
      quantity: product?.quantity,
      unit: product?.quantityUnit,
      instructions: "",
      productId: product?.id,
      selectedSize: product?.sizeVariants[0],
      selectedVariant: product?.productVariants[0],
      themeDescription: "",
      expectedDeliveryDate: "",
      includeSparkler: true,
    } as OrderRequestFormValues,
    onSubmit: async (values: OrderRequestFormValues) => {
      const order: Prisma.OrdersCreateInput = {
        ...values,
        userId,
        mobile: values.mobile.toString(),
        expectedDeliveryDate: dayjs(
          values.expectedDeliveryDate,
          "YYYY-MM-DD"
        ).toISOString(),
      };
      await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(order),
      });
      showDialog(ORDER_CONFIRMATION_DIALOG_ID);
    },
    validationSchema: orderRequestFormSchema,
  });

  return (
    <>
      <div className="prose w-full md:w-3/4 lg:w-1/2">
        <form onSubmit={formik.handleSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select Type</span>
            </div>
            <select
              id="selectedVariant"
              name="selectedVariant"
              value={formik.values.selectedVariant}
              onChange={formik.handleChange}
              className="select bg-primary select-secondary w-full"
            >
              {product?.productVariants.map((productVariant) => (
                <option key={productVariant} value={productVariant}>
                  {productVariant}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              className={`input input-bordered bg-primary w-full ${
                formik.errors.firstName ? "input-error" : "input-secondary"
              }`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.firstName}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="input input-bordered input-secondary bg-primary w-full"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
              className={`input input-bordered bg-primary w-full ${
                formik.errors.email ? "input-error" : "input-secondary"
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <div className="label">
              <span className="label-text-alt text-error">
                {formik.errors.email}
              </span>
              <span className="label-text-alt">
                We won&apos;t spam your inbox. Promise!
              </span>
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Mobile</span>
            </div>
            <input
              type="number"
              id="mobile"
              name="mobile"
              placeholder="876123450"
              className={`input input-bordered bg-primary w-full ${
                formik.errors.mobile ? "input-error" : "input-secondary"
              }`}
              value={formik.values.mobile}
              onChange={formik.handleChange}
            />
            {formik.errors.mobile && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.mobile}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder={product?.quantityStepValue.toString()}
              step={product?.quantityStepValue}
              className={`input input-bordered bg-primary w-full ${
                formik.errors.quantity ? "input-error" : "input-secondary"
              }`}
              value={formik.values.quantity}
              onChange={formik.handleChange}
            />
            {formik.errors.quantity && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.quantity}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select a Size</span>
            </div>
            <select
              id="selectedSize"
              name="selectedSize"
              value={formik.values.selectedSize}
              onChange={formik.handleChange}
              className="select bg-primary select-secondary w-full"
            >
              {product?.sizeVariants.map((sizeVariant) => (
                <option key={sizeVariant} value={sizeVariant}>
                  {sizeVariant}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Color Vibes and Themes</span>
            </div>
            <textarea
              id="themeDescription"
              name="themeDescription"
              value={formik.values.themeDescription}
              onChange={formik.handleChange}
              className="textarea bg-primary textarea-secondary"
              placeholder="Describe your dream cake colors and any fun themes you have in mind!"
              maxLength={300}
            ></textarea>
            <div className="label">
              <span className="label-text-alt text-error"></span>
              <span className="label-text-alt">
                {formik.values.themeDescription?.length}/300
              </span>
            </div>
          </label>
          <div className="form-control w-full">
            <label className="cursor-pointer label">
              <span className="label-text">Include celebration sparkler</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                id="includeSparkler"
                name="includeSparkler"
                checked={formik.values.includeSparkler}
                onChange={formik.handleChange}
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Expected Delivery Date</span>
            </div>
            <Datepicker
              asSingle={true}
              value={expectedDeliveryDate}
              onChange={handleExpectedDeliveryDateChange}
              displayFormat={"MM/DD/YYYY"}
              minDate={dayjs().add(2, "d").toDate()}
              primaryColor={"amber"}
              inputClassName="input input-bordered input-secondary bg-primary w-full"
            />
            <div className="label">
              <span className="label-text-alt text-error">
                {formik.errors.expectedDeliveryDate}
              </span>
              <span className="label-text-alt">
                Allow atleast 48hrs for a response.
              </span>
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Special Instructions</span>
            </div>
            <textarea
              id="instructions"
              name="instructions"
              value={formik.values.instructions}
              onChange={formik.handleChange}
              className="textarea bg-primary textarea-secondary"
              placeholder="How would you like us to bake it ?"
              maxLength={300}
            ></textarea>
            <div className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt">
                {formik.values.instructions?.length}/300
              </span>
            </div>
          </label>
          <section className="flex justify-center">
            <button className="btn btn-wide" type="submit">
              Submit Request
            </button>
          </section>
        </form>
      </div>
      <Dialog
        id={ORDER_CONFIRMATION_DIALOG_ID}
        title="Order Submitted"
        message="Your order has been submitted successfully. We'll get in touch soon!"
        dialogActions={orderConfirmationDialogActions}
      />
    </>
  );
};

export default OrderRequestForm;
