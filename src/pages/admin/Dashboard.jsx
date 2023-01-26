import axios from "axios";
import { useEffect, useState } from "react";
import {
  AdminDashboardOrderCard,
  AdminDashboardOrderListCard,
  AdminDashboardProductListCard,
  AdminDashboardRevenueCard,
  AdminDashboardUserCard,
} from "../../components/admin/Card";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + "/product"
    );
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="bg-white pl-80 p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 mt-10">
            Dashboard
            <br />
          </h1>
        </div>
        <div className="max-w-full">
          <div className="sm:flex sm:space-x-4">
            <AdminDashboardUserCard />
            <AdminDashboardOrderCard />
            <AdminDashboardRevenueCard />
          </div>
        </div>
        <div className="max-w-full">
          <div className="sm:flex sm:space-x-4">
            <AdminDashboardOrderListCard />
            <AdminDashboardProductListCard product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
