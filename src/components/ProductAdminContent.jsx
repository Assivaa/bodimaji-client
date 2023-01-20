import { Link } from "react-router-dom";

const ProductContent = () => {
    return (
        <>
            <div className="-mt-96 ml-80 mr-80">
                <div className="h-screen overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 -mr-80 -ml-0">
                    <div className="sideright">
                        <div className="title-product">Owner</div>
                        <div className="formproduct-input">
                            <input
                                type="text"
                                placeholder="Owner"
                                required
                            ></input>
                            <div className="title-product2">Product Name</div>
                            <input
                                type="text"
                                placeholder="Product Name"
                            ></input>
                            <div className="title-product3">Description</div>
                            <input
                                type="text"
                                placeholder="Product Description"
                            ></input>
                            <div className="title-product4">Price</div>
                            <input
                                type="text"
                                placeholder="Product Price in Rp"
                            ></input>
                            <div className="title-product5">Upload Image</div>
                            <input
                                type="text"
                                placeholder="Upload Image URL"
                            ></input>
                        </div>
                        <br />
                        <div className="FormButton Submit">
                            <div className="Submitform">
                                <Link to="/dashboard" className="LinkNav">
                                    <button>
                                        <span>Submit</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductContent;
