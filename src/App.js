import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import { ProductList, Product } from "./pages/Product";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/admin/Dashboard";
import Success from "./pages/Success";
import Order, { OrderList } from "./pages/Order";
import { Login, Profile, Register } from "./pages/Auth";
import { Article, ArticleList } from "./pages/Article";
import About from "./pages/About";
import { Wishlist } from "./pages/Wishlist";
import {
  AdminProduct,
  AdminProductList,
  AdminProductNew,
} from "./pages/admin/Product";
import {
  AdminArticle,
  AdminArticleList,
  AdminArticleNew,
} from "./pages/admin/Article";
import { AdminUser, AdminUserList } from "./pages/admin/User";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="article">
              <Route path="" element={<ArticleList />} />
              <Route path=":id" element={<Article />} />
            </Route>
            <Route path="product">
              <Route path="" element={<ProductList />} />
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="checkout" element={<Checkout />} />
            <Route path="success" element={<Success />} />
            <Route path="order">
              <Route path="" element={<OrderList />} />
              <Route path=":id" element={<Order />} />
            </Route>
          </Route>
          <Route path="/dashboard">
            <Route index element={<Dashboard />} />
            <Route path="product">
              <Route path="" element={<AdminProductList />} />
              <Route path=":id" element={<AdminProduct />} />
              <Route path="new" element={<AdminProductNew />} />
            </Route>
            <Route path="article">
              <Route path="" element={<AdminArticleList />} />
              <Route path=":id" element={<AdminArticle />} />
              <Route path="new" element={<AdminArticleNew />} />
            </Route>
            <Route path="user">
              <Route path="" element={<AdminUserList />} />
              <Route path=":id" element={<AdminUser />} />
            </Route>
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
