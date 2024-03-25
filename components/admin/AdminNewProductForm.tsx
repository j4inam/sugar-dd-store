"use client";

import {
  AdminNewProductFormValues,
  adminNewProductFormSchema,
} from "@/models/AdminNewProductFormValues";

import { ADMIN_ADD_NEW_PRODUCT_DIALOG_ID } from "@/constants";
import Dialog from "../Dialog";
import Image from "next/image";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import { showDialog } from "@/helpers/utils";
import { useFormik } from "formik";

type AdminNewProductFormProps = {
  adminId: string;
  adminName: string;
};

const AdminNewProductForm = ({
  adminId,
  adminName,
}: AdminNewProductFormProps) => {
  const addProductConfirmationDialogActions = (
    <Link href={{ pathname: "/admin-products", query: { r: 1 } }}>
      <button className="btn btn-accent">View All Products</button>
    </Link>
  );

  const addProductVariant = () => {
    if (!formik.values.productVariantInputValue?.trim()) {
      return;
    }

    const variantSet: Set<string> = new Set<string>(
      formik.values.productVariants
    );
    variantSet.add(formik.values.productVariantInputValue?.trim());
    formik.setFieldValue("productVariants", Array.from(variantSet));
    formik.setFieldValue("productVariantInputValue", "");
  };

  const removeProductVariant = (variant: string) => {
    const updatedVariants = formik.values.productVariants.filter(
      (v) => v !== variant
    );
    formik.setFieldValue("productVariants", updatedVariants);
  };

  const addSizeVariant = () => {
    if (!formik.values.sizeVariantInputValue?.trim()) {
      return;
    }

    const variantSet: Set<string> = new Set<string>(formik.values.sizeVariants);
    variantSet.add(formik.values.sizeVariantInputValue?.trim());
    formik.setFieldValue("sizeVariants", Array.from(variantSet));
    formik.setFieldValue("sizeVariantInputValue", "");
  };

  const removeSizeVariant = (variant: string) => {
    const updatedVariants = formik.values.sizeVariants.filter(
      (v) => v !== variant
    );
    formik.setFieldValue("sizeVariants", updatedVariants);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: 49.99,
      productVariantInputValue: "",
      productVariants: ["Regular"],
      imageURL: "",
      quantity: 0.5,
      quantityUnit: "lb",
      quantityStepValue: 1,
      sizeVariantInputValue: "",
      sizeVariants: [],
    } as AdminNewProductFormValues,
    onSubmit: async (values: AdminNewProductFormValues) => {
      let formValues: AdminNewProductFormValues = { ...values };

      delete formValues.productVariantInputValue;
      delete formValues.sizeVariantInputValue;

      const product: Prisma.ProductsCreateInput = {
        ...formValues,
        addedById: adminId,
        addedByName: adminName,
      };

      console.log("product", product);

      await fetch("/api/admin-products", {
        method: "POST",
        body: JSON.stringify(product),
      });
      showDialog(ADMIN_ADD_NEW_PRODUCT_DIALOG_ID);
    },
    validationSchema: adminNewProductFormSchema,
  });

  return (
    <>
      <section className="w-full">
        <form onSubmit={formik.handleSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Product Title</span>
            </div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Chocolate Cake"
              className={`input input-bordered grow ${
                formik.errors.title ? "input-error" : "input-primary"
              }`}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.title}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Product Description</span>
            </div>
            <textarea
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="textarea textarea-primary grow"
              placeholder="Describe your product in 150 characters or less"
              maxLength={150}
            ></textarea>
            <div className="label">
              <span className="label-text-alt text-error">
                {formik.errors.description}
              </span>
              <span className="label-text-alt">
                {formik.values.description?.length}/150
              </span>
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price (in USD)</span>
            </div>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="49.99"
              className={`input input-bordered grow ${
                formik.errors.price ? "input-error" : "input-primary"
              }`}
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            {formik.errors.price && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.price}
                </span>
              </div>
            )}
          </label>
          <section className="flex gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Weight / Quantity</span>
              </div>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="1"
                className={`input input-bordered w-full ${
                  formik.errors.quantity ? "input-error" : "input-primary"
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
                <span className="label-text">Quantity Unit</span>
              </div>
              <input
                type="text"
                id="quantityUnit"
                name="quantityUnit"
                placeholder="lb"
                className={`input input-bordered w-full ${
                  formik.errors.quantityUnit ? "input-error" : "input-primary"
                }`}
                value={formik.values.quantityUnit}
                onChange={formik.handleChange}
              />
              {formik.errors.quantityUnit && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {formik.errors.quantityUnit}
                  </span>
                </div>
              )}
            </label>
          </section>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Min. Quantity Multiple</span>
            </div>
            <input
              type="number"
              id="quantityStepValue"
              name="quantityStepValue"
              placeholder="1"
              className={`input input-bordered w-full ${
                formik.errors.quantityStepValue
                  ? "input-error"
                  : "input-primary"
              }`}
              value={formik.values.quantityStepValue}
              onChange={formik.handleChange}
            />
            {formik.errors.quantityStepValue && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.quantityStepValue}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Product Variants</span>
            </div>
            <input
              type="text"
              id="productVariantInputValue"
              name="productVariantInputValue"
              placeholder="Enter a variant and hit enter"
              className={`input input-bordered grow ${
                formik.errors.productVariants ? "input-error" : "input-primary"
              }`}
              value={formik.values.productVariantInputValue}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  addProductVariant();
                }
              }}
            />
            <div className="label">
              {formik.errors.productVariants && (
                <span className="label-text-alt text-error">
                  {formik.errors.productVariants}
                </span>
              )}
              <span className="label-text-alt">
                {formik.values.productVariants.map((variant, idx) => (
                  <div
                    key={idx}
                    className="badge badge-accent m-1 hover:shadow-xl pointer-cursor"
                    onClick={() => removeProductVariant(variant)}
                  >
                    {variant}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-4 h-4 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                ))}
              </span>
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Size Variants</span>
            </div>
            <input
              type="text"
              id="sizeVariantInputValue"
              name="sizeVariantInputValue"
              placeholder="Enter a variant and hit enter"
              className={`input input-bordered grow ${
                formik.errors.sizeVariants ? "input-error" : "input-primary"
              }`}
              value={formik.values.sizeVariantInputValue}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  addSizeVariant();
                }
              }}
            />
            <div className="label">
              <span className="label-text-alt">
                {formik.values.sizeVariants.map((variant, idx) => (
                  <div
                    key={idx}
                    className="badge badge-accent m-1 hover:shadow-xl pointer-cursor"
                    onClick={() => removeSizeVariant(variant)}
                  >
                    {variant}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-4 h-4 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                ))}
              </span>
            </div>
          </label>
          <section>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                type="text"
                id="imageURL"
                name="imageURL"
                placeholder="eg.: https://source.unsplash.com/image-id"
                className={`input input-bordered grow ${
                  formik.errors.imageURL ? "input-error" : "input-primary"
                }`}
                value={formik.values.imageURL}
                onChange={formik.handleChange}
              />
              <div className="label">
                {formik.errors.imageURL && (
                  <span className="label-text-alt text-error">
                    {formik.errors.imageURL}
                  </span>
                )}
                <span className="label-text-alt">
                  Please use images with portrait orientation.
                </span>
              </div>
            </label>
          </section>
          <section className="flex justify-center mt-4">
            <button className="btn btn-accent btn-wide" type="submit">
              Add Product
            </button>
          </section>
        </form>
      </section>
      <Dialog
        id={ADMIN_ADD_NEW_PRODUCT_DIALOG_ID}
        title="New Product Added"
        message="New product has been added successfully!"
        dialogActions={addProductConfirmationDialogActions}
      />
    </>
  );
};

export default AdminNewProductForm;

// https://source.unsplash.com/selective-focus-photography-of-thee-purple-ice-pops-near-pine-cones-MXovqM130UI
