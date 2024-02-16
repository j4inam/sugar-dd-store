"use client";

import {
  OrderRequestFormValues,
  orderRequestFormSchema,
} from "@/models/OrderRequestFormValues";
import { useFormik } from "formik";

const OrderRequestForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      quantity: 1,
      unit: "lb",
      instructions: "",
    } as OrderRequestFormValues,
    onSubmit: (values: OrderRequestFormValues) => {
      console.log(values);
    },
    validationSchema: orderRequestFormSchema,
  });

  return (
    <div className="prose w-full md:w-3/4 lg:w-1/2">
      <form onSubmit={formik.handleSubmit}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">First Name</span>
          </div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            className="input input-bordered input-secondary bg-primary w-full"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
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
            className="input input-bordered input-secondary bg-primary w-full"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="label">
            <span className="label-text-alt">{formik.errors.email}</span>
            <span className="label-text-alt">
              We won't spam your inbox. Promise!
            </span>
          </div>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Mobile</span>
          </div>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="(123)-456-7890"
            className="input input-bordered input-secondary bg-primary w-full"
            value={formik.values.mobile}
            onChange={formik.handleChange}
          />
        </label>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="1"
              className="input input-bordered input-secondary bg-primary w-full"
              value={formik.values.quantity}
              onChange={formik.handleChange}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <select
              id="unit"
              name="unit"
              value={formik.values.unit}
              onChange={formik.handleChange}
              className="select bg-primary select-secondary w-full max-w-xs"
            >
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
          </label>
        </div>
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
  );
};

export default OrderRequestForm;
