import AdminNewProductForm from "@/components/admin/AdminNewProductForm";

const AddNewProduct = () => {
  return (
    <section className="w-full">
      <div className="card shadow-xl rounded-box">
        <div className="card-body">
          <h1 className="text-xl font-bold">Add New Product</h1>
          <section className="w-full">
            <AdminNewProductForm />
          </section>
        </div>
      </div>
    </section>
  );
};

export default AddNewProduct;
