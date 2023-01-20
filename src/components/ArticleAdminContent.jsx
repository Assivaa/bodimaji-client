import { Link } from "react-router-dom";

const ArticlesContent = () => {
    return (
        <>
            <div className="-mt-96 ml-80 mr-80">
                <div className="h-screen overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 -mr-80 -ml-0">
                    <div className="sideright">
                        <div class="mt-20 ml-55 font-cinzel font-bold text-xl">Title</div>
                        <div className="flex flex-col gap-42 text-center">
                            <input
                                type="text"
                                placeholder="Title"
                                required
                            ></input>
                            <div class="-mt-35 -mb-40 -ml-720 font-cinzel font-bold text-xl">Description</div>
                            <input
                                type="text"
                                placeholder="Description"
                            ></input>
                            <div className="title-artcle3">Author</div>
                            <input
                                type="text"
                                placeholder="Author"
                            ></input>
                            <div className="title-artcle4">Upload Image</div>
                            <input
                                type="text"
                                placeholder="Upload Image"
                            ></input>
                        </div>

                        <div className="FormButton Submit">
                            <a className="Submitform">
                                <Link to="/dashboard" className="LinkNav">
                                    <button>
                                        <span>Submit</span>
                                    </button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlesContent;
