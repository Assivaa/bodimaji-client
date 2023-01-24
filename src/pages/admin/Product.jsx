import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminProductTable } from "../../components/admin/Table";
import { CircleLoading } from "../../components/Loading";
import Sidebar from "../../components/Sidebar";

export const AdminProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + "/product"
    );
    setProduct(data);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchProduct().then((data) => {
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <Sidebar />
      {isLoading ? (
        <>
          <div className="bg-white pl-80 p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 mt-10">
                Product List
                <br />
              </h1>
              <div className="flex items-center justify-between">
                <div className="lg:ml-40 ml-10 space-x-8">
                  <Link to="/dashboard/product/new">
                    <button className="bg-gray-600 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                      New Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <CircleLoading />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white pl-80 p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 mt-10">
                Product List
                <br />
              </h1>
              <div className="flex items-center justify-between">
                <div className="lg:ml-40 ml-10 space-x-8">
                  <Link to="/dashboard/product/new">
                    <button className="bg-gray-600 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                      New Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <AdminProductTable product={product} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const AdminProduct = () => {
  return (
    <>
      <Sidebar />
    </>
  );
};
