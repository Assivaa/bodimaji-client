import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "../../firebaseConfig";

export const AdminProductForm = () => {
  const { currentUser } = useSelector((state) => state.user);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const stockRef = useRef(null);
  const descRef = useRef(null);
  const [image, setImage] = useState("");

  let navigate = useNavigate();

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(
      storage,
      `bodimaji/${image.name}` + new Date().getTime()
    );
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progressPercentage);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            const registeredBy = currentUser.data._id;
            const name = nameRef.current.value;
            const price = priceRef.current.value;
            const countInStock = stockRef.current.value;
            const description = descRef.current.value;
            const img = downloadURL;
            const details = {
              registeredBy,
              name,
              price,
              countInStock,
              description,
              img,
            };
            axios
              .post(process.env.REACT_APP_API_URL + `/product`, details)
              .then((response) => {
                console.log("Response", response.data);
                alert("Product added");
                navigate("/dashboard/product");
              })
              .catch((error) => {
                alert("Error", error.response.message);
              });
          })
          .catch((err) => {
            console.log("Error", err);
          });
      }
    );
  };

  return (
    <div className="bg-white pl-80 p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 mt-10">
          New Product
          <br />
        </h1>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        ref={nameRef}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Price
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                          Rp
                        </span>
                        <input
                          type="number"
                          ref={priceRef}
                          className="rounded-none rounded-r-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Stock
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                          Qty
                        </span>
                        <input
                          type="number"
                          ref={stockRef}
                          className="rounded-none rounded-r-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        type="text"
                        ref={descRef}
                        placeholder="Description"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm"
                      />
                    </div>
                    <div className="col-span-3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Upload file
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-block px-7 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminProductFormEdit = ({ product, getProduct }) => {
  const { currentUser } = useSelector((state) => state.user);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const stockRef = useRef(null);
  const descRef = useRef(null);
  const [image, setImage] = useState("");

  let navigate = useNavigate();

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(
      storage,
      `bodimaji/${image.name}` + new Date().getTime()
    );
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progressPercentage);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            const registeredBy = currentUser.data._id;
            const name = nameRef.current.value;
            const price = priceRef.current.value;
            const countInStock = stockRef.current.value;
            const description = descRef.current.value;
            const img = downloadURL;
            const details = {
              registeredBy,
              name,
              price,
              countInStock,
              description,
              img,
            };
            axios
              .put(process.env.REACT_APP_API_URL + `/product`, details)
              .then((response) => {
                console.log("Response", response.data);
                alert("Product updated");
                getProduct();
              })
              .catch((error) => {
                alert("Error", error.response.message);
              });
          })
          .catch((err) => {
            console.log("Error", err);
          });
      }
    );
  };

  return (
    <div className="bg-white pl-80 p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 mt-10">
          Product Detail
          <br />
        </h1>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        ref={nameRef}
                        defaultValue={product.name}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Price
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                          Rp
                        </span>
                        <input
                          type="number"
                          ref={priceRef}
                          defaultValue={product.price}
                          className="rounded-none rounded-r-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Stock
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                          Qty
                        </span>
                        <input
                          type="number"
                          ref={stockRef}
                          defaultValue={product.countInStock}
                          className="rounded-none rounded-r-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        type="text"
                        ref={descRef}
                        defaultValue={product.description}
                        placeholder="Description"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm"
                      />
                    </div>
                    <div className="col-span-3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Upload file
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-block px-7 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Save
                  </button>
                  <Link to="/dashboard/product">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 mr-2 bg-red-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
