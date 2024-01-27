import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Footer from "../components/layout/footer";
import Header from "../components/layout/Header/Header";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductDetails from "@/pages/ProductDetailsPage";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
