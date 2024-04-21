import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Footer from "../components/layout/footer";
import Header from "../components/layout/Header/Header";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductDetails from "../pages/ProductDetailsPage";
import Products from "../pages/Products/Products";


// Topico Links Elements
import HomeOne from "../pages/Home-1/Index";

const AppRoutes = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/products/" element={<Products />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Topic Designs Paths */}
        <Route path="/home-one/" element={<HomeOne />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default AppRoutes;
