import NavbarAdmin from "./NavbarAdmin";
import Sidebar from "./Sidebar";
import ArticleContent from "./ArticleAdminContent"
import { Link } from "react-router-dom";

const Articles = () => {
    return (
        <>
            <NavbarAdmin />
            <Sidebar />
            <ArticleContent/>
        </>
    );
};

export default Articles;