import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

const Sidebar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <div className="bg-gray-00">
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <img
                src="https://res.cloudinary.com/dcrd7eosb/image/upload/v1673322483/shop/bodimaji-logo_dobvun.png"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <Link to="/dashboard">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-600 text-white">
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Dashboard
              </span>
            </div>
          </Link>
          <Link to="/dashboard/order">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Order List
              </span>
            </div>
          </Link>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 text-white">
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Products
              </span>
            </div>
          </div>
          <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
            <Link to="/dashboard/product">
              <h1 className="cursor-pointer p-2 hover:bg-red-600 rounded-md mt-1">
                Products List
              </h1>
            </Link>
            <Link to="/dashboard/product/new">
              <h1 className="cursor-pointer p-2 hover:bg-red-600 rounded-md mt-1">
                New Product
              </h1>
            </Link>
          </div>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 text-white">
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Articles
              </span>
            </div>
          </div>
          <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
            <Link to="/dashboard/article">
              <h1 className="cursor-pointer p-2 hover:bg-red-600 rounded-md mt-1">
                Articles List
              </h1>
            </Link>
            <Link to="/dashboard/article/new">
              <h1 className="cursor-pointer p-2 hover:bg-red-600 rounded-md mt-1">
                New Article
              </h1>
            </Link>
          </div>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 text-white">
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Users
              </span>
            </div>
          </div>
          <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
            <Link to="/dashboard/user">
              <h1 className="cursor-pointer p-2 hover:bg-red-600 rounded-md mt-1">
                Users List
              </h1>
            </Link>
            <Link to="/dashboard/user/new">
              <h1 className="cursor-pointer p-2 hover:bg-red-600 rounded-md mt-1">
                New User
              </h1>
            </Link>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-600 text-white">
            <i className="bi bi-box-arrow-in-right"></i>
            <span
              className="text-[15px] ml-4 text-gray-200 font-bold"
              onClick={handleLogout}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
