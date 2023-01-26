import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArticleCard, ImageCard } from "./Card";
import { CircleLoading } from "./Loading";

export const ArticleCarousel = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchArticle = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + "/article"
    );
    setArticle(data);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchArticle().then((data) => {
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex-nowrap">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl md:text-3xl xl:text-3xl font-regular tracking-tight mb-12">
              Article for you
            </h1>
          </div>
          <div className="mb-12 lg:mb-0 justify-self-end">
            <Link
              to="/article"
              className="inline-block px-7 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              See All
            </Link>
          </div>
        </div>
        {isLoading ? (
          <CircleLoading />
        ) : (
          <div className="grid lg:grid-cols-3 gap-12 flex items-center">
            {article.slice(0, 3).map((a) => (
              <ArticleCard article={a} key={a._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const ProductCarousel = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex-nowrap">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl md:text-3xl xl:text-3xl font-regular tracking-tight mb-12">
              Discover Our Collection
            </h1>
          </div>
          <div className="mb-12 lg:mb-0 justify-self-end">
            <Link
              to="/product"
              className="inline-block px-7 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              See All
            </Link>
          </div>
        </div>
        {isLoading ? (
          <CircleLoading />
        ) : (
          <div className="grid lg:grid-cols-3 gap-12 flex items-center">
            {product.slice(0, 3).map((p) => (
              <ImageCard product={p} key={p._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
