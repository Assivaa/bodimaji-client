import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WishlistCard } from "../components/Card";
import Footer from "../components/Footer";
import { CircleLoading } from "../components/Loading";
import Navbar from "../components/Navbar";

export const Wishlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [wishlist, setWishlist] = useState([]);

  const getWishlist = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + `/wishlist/${currentUser.data._id}`
    );

    if (data) {
      setWishlist(data.products);
    }
  };

  const results = [];

  if (wishlist) {
    wishlist.forEach((w) => {
      results.push(
        <WishlistCard wishlistItem={w} key={w._id} getWishlist={getWishlist} />
      );
    });
  }

  useEffect(() => {
    setIsLoading(true);
    getWishlist().then((data) => {
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
                My Wishlist
                <br />
              </h1>
            </div>
          </div>
          {isLoading ? (
            <CircleLoading />
          ) : (
            <>{wishlist ? <>{results}</> : <> NO PRODUCT</>}</>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
