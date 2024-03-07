export type AdminProductDetailsProps = {
  params: {
    id: string;
  };
};

const AdminProductDetails = ({params}: AdminProductDetailsProps) => {
    return <>{params.id}</>
};

export default AdminProductDetails;
