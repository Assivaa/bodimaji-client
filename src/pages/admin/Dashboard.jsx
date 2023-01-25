import {
  AdminDashboardOrderCard,
  AdminDashboardOrderListCard,
  AdminDashboardProductListCard,
  AdminDashboardRevenueCard,
  AdminDashboardUserCard,
} from "../../components/admin/Card";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
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
        <div class="max-w-full">
          <div class="sm:flex sm:space-x-4">
            <AdminDashboardUserCard />
            <AdminDashboardOrderCard />
            <AdminDashboardRevenueCard />
          </div>
        </div>
        <div class="max-w-full">
          <div class="sm:flex sm:space-x-4">
            <AdminDashboardOrderListCard />
            <AdminDashboardProductListCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
