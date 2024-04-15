import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductById } from "../../api/products/api";
import ProductImageGallery from "../../components/product/detail/ProductImageGallery";
import ProductOverview from "../../components/product/detail/ProductOverview";
import ProductDetailsTabs from "../../components/product/detail/ProductDetailsTabs";

const ProductDetails = () => {
  let { productId } = useParams();
  // Local state for color and size
  const [colorValue, setColorValue] = useState("red");
  const [sizeValue, setSizeValue] = useState("s");

  // Fetch product details
  const {
    isLoading: productLoading,
    error: productError,
    data: product,
  } = useQuery([`productDetails`, productId], ({ queryKey }) =>
    fetchProductById(queryKey[1])
  );
  if (productLoading) return "Loading...";

  // Check for errors
  if (productError) {
    console.error("Product fetch error:", productError);
    return (
      <div>
        <p>An error occurred while fetching product details:</p>
        <p>Status: {productError.status}</p>
        <p>Message: {productError.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container my-24 py-10">
        <div className="grid gap-0 lg:gap-6 lg:grid-cols-5 grid-cols-1">
          <ProductImageGallery images={product?.images} />
          <ProductOverview
            product={product}
            images={product?.images}
            colorValue={colorValue}
            sizeValue={sizeValue}
            setColorValue={setColorValue}
            setSizeValue={setSizeValue}
          />
        </div>
        <div className="flex w-full flex-col mt-16">
          <ProductDetailsTabs product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
