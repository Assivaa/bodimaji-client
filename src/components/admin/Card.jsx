import { Link } from "react-router-dom";
import { AdminDashboardOrderListRow } from "./Row";
import { AdminDashboardOrderTable, AdminDashboardProductTable } from "./Table";

export const AdminOrderCard = () => {
  return "lol";
};

export const AdminDashboardUserCard = () => {
  return (
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
      <div class="bg-white p-5">
        <div class="sm:flex sm:items-start">
          <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
            <h3 class="text-sm leading-6 font-medium text-gray-400">
              Total Users
            </h3>
            <p class="text-3xl font-bold text-black">71,897</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboardOrderCard = () => {
  return (
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
      <div class="bg-white p-5">
        <div class="sm:flex sm:items-start">
          <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
            <h3 class="text-sm leading-6 font-medium text-gray-400">
              Orders this Month
            </h3>
            <p class="text-3xl font-bold text-black">58.16%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboardRevenueCard = () => {
  return (
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
      <div class="bg-white p-5">
        <div class="sm:flex sm:items-start">
          <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
            <h3 class="text-sm leading-6 font-medium text-gray-400">
              Gross Revenue
            </h3>
            <p class="text-3xl font-bold text-black">24.57%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboardOrderListCard = () => {
  return (
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:my-8">
      <div class="bg-white p-5">
        <div class="sm:flex sm:items-start">
          <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
            <h3 class="text-sm leading-6 font-medium text-gray-400">
              Pending Order (this month)
            </h3>
          </div>
        </div>
        <AdminDashboardOrderTable />
        <Link to="/dashboard/order">
          <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export const AdminDashboardProductListCard = ({ product }) => {
  return (
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:my-8">
      <div class="bg-white p-5">
        <div class="sm:flex sm:items-start">
          <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
            <h3 class="text-sm leading-6 font-medium text-gray-400">
              Product List
            </h3>
          </div>
        </div>
        <AdminDashboardProductTable product={product} />
        <Link to="/dashboard/product">
          <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};
