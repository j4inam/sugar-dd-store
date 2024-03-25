import AdminNewProductForm from "@/components/admin/AdminNewProductForm";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const AddNewProduct = async () => {
  const { getUser } = getKindeServerSession();
  let userData: KindeUser | null = await getUser();

  return (
    <section className="w-full md:w-1/2 xl:w-1/3 mx-auto">
      <div className="card shadow-xl rounded-box">
        <div className="card-body">
          <h1 className="text-xl font-bold">Add New Product</h1>
          <section className="w-full">
            <AdminNewProductForm
              adminId={userData?.id || ""}
              adminName={`${userData?.given_name} ${userData?.family_name}`}
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default AddNewProduct;
