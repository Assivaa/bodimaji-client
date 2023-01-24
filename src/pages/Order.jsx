import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { OrderCard, SingleOrderCard } from "../components/Card";
import Footer from "../components/Footer";
import { CircleLoading } from "../components/Loading";
import Navbar from "../components/Navbar";

export const OrderList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [orderList, setOrderList] = useState([]);

  const getOrderList = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + `/order/${currentUser.data._id}`
    );

    if (data) {
      setOrderList(data);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getOrderList().then((data) => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-6 py-20 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex-nowrap">
            <div className="mt-12 lg:mt-0">
              <h1 className="mt-10 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                My Order
                <br />
              </h1>
            </div>
          </div>
          {isLoading ? (
            <CircleLoading />
          ) : (
            <>
              {orderList ? (
                <>
                  {orderList.map((o) => (
                    <OrderCard orderItem={o} key={o._id} />
                  ))}
                </>
              ) : (
                <> NO PRODUCT</>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const Order = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrderDetail] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  const [products, setProducts] = useState([]);
  const path = useLocation().pathname.split("/")[2];

  const getOrderDetail = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + `/order/detail/${path}`
    );

    if (data) {
      setOrderDetail(data);
      setUserDetail(data.credentials[0]);
      setProducts(data.products);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getOrderDetail().then((data) => {
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="px-6 py-20 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="flex-nowrap">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Order Detail
                <br />
              </h1>
            </div>
            {isLoading ? (
              <CircleLoading />
            ) : (
              <SingleOrderCard
                order={order}
                userDetail={userDetail}
                products={products}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Order;
