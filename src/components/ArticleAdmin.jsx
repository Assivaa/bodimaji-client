import NavbarAdmin from "./NavbarAdmin";
import Sidebar from "./Sidebar";
import ArticleContent from "./ArticleAdminContent"

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