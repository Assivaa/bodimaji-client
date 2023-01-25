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
      </div>
    </div>
  );
};

export const AdminDashboardProductListCard = () => {
  return (
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:my-8">
      <div class="bg-white p-5">
        <div class="sm:flex sm:items-start">
          <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
            <h3 class="text-sm leading-6 font-medium text-gray-400">
              Low Stock Product
            </h3>
          </div>
        </div>
        <AdminDashboardProductTable />
      </div>
    </div>
  );
};
