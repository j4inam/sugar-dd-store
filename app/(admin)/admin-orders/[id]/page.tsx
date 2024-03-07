export type AdminOrderDetailsProps = {
    params: {
      id: string;
    };
  };
  
  const AdminOrderDetails = ({params}: AdminOrderDetailsProps) => {
      return <>{params.id}</>
  };
  
  export default AdminOrderDetails;
  