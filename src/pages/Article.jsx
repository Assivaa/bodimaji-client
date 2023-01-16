import axios from "axios";
import {
  ArticleCard,
  ProductCard,
  SingleArticleCard,
  SingleProductCard,
} from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CircleLoading } from "../components/Loading";

export const ArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState([]);

  const fetchArticle = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_LOCAL_API_URL + "/article"
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
    <>
      <Navbar />
      <div className="px-6 py-20 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex-nowrap">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Article List
                <br />
              </h1>
            </div>
          </div>
          {isLoading ? (
            <CircleLoading />
          ) : (
            <div className="grid lg:grid-cols-4 gap-12 flex items-center">
              {article.map((a) => (
                <ArticleCard article={a} key={a._id} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const Article = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const path = useLocation().pathname.split("/")[2];
  const [article, setArticle] = useState({});

  const getArticle = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_LOCAL_API_URL + `/article/${path}`
    );
    setArticle(data);
  };

  useEffect(() => {
    setIsLoading(true);
    getArticle().then((data) => {
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
                Article
                <br />
              </h1>
            </div>
            {isLoading ? (
              <CircleLoading />
            ) : (
              <SingleArticleCard article={article} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
