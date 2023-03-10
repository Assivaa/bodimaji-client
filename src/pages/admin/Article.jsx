import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AdminArticleForm,
  AdminArticleFormEdit,
} from "../../components/admin/Form";
import { AdminArticleTable } from "../../components/admin/Table";
import { CircleLoading } from "../../components/Loading";
import Sidebar from "../../components/Sidebar";

export const AdminArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState([]);

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
    <>
      <Sidebar />
      {isLoading ? (
        <>
          <div className="bg-white pl-80 p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 mt-10">
                Article List
                <br />
              </h1>
              <div className="flex items-center justify-between">
                <div className="lg:ml-40 ml-10 space-x-8">
                  <Link to="/dashboard/article/new">
                    <button className="bg-gray-600 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                      New Article
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
                Article List
                <br />
              </h1>
              <div className="flex items-center justify-between">
                <div className="lg:ml-40 ml-10 space-x-8">
                  <Link to="/dashboard/article/new">
                    <button className="bg-gray-600 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                      New Article
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <AdminArticleTable
                article={article}
                fetchArticle={fetchArticle}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const AdminArticle = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState([]);
  const path = useLocation().pathname.split("/")[3];

  const getArticle = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + `/article/${path}`
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
      <Sidebar />
      <AdminArticleFormEdit
        article={article}
        getArticle={getArticle}
        path={path}
      />
    </>
  );
};

export const AdminArticleNew = () => {
  return (
    <>
      <Sidebar />
      <AdminArticleForm />
    </>
  );
};
