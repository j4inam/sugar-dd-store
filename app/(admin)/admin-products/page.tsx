import Link from "next/link";
import { Product } from "@/models/Product";
import prismaClient from "@/models/db";

const getProductsList = async () => {
  const products = await prismaClient.products.findMany();

  return products;
};

const AdminProducts = async () => {
  const productsList: Product[] = await getProductsList();

  return (
    <>
      <section className="flex justify-between">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <Link href={"/admin-products/new-product"} className="hidden md:block">
          <button className="btn btn-accent">
            Add Product
          </button>
        </Link>
        <Link href={"/admin-products/new-product"} className="btn-sm md:hidden">
          <button className="btn btn-accent btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </section>
      <div className="divider mt-0"></div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th className="hidden md:block">Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product, idx) => (
              <tr
                key={idx}
                className="lg:hover:bg-base-200 lg:hover:text-base-content cursor-pointer"
              >
                <th>{idx + 1}.</th>
                <td>
                  <Link href={`/admin-products/${product.id}`}>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm opacity-50">
                          ${product.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="hidden md:block">
                  <Link href={`/admin-products/${product.id}`}>
                    <div className="text-sm opacity-50">
                      {product.description}
                    </div>
                  </Link>
                </td>
                <td>
                  <Link href={`/admin-products/${product.id}`}>
                    <span className="badge badge-success badge-sm">Active</span>
                  </Link>
                </td>
                <th>
                  <Link href={`/admin-products/${product.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminProducts;
