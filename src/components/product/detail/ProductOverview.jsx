import React, { useState } from "react";
import ProductOptions from "./ProductOptions";
import { ShoppingCartIcon, PlusIcon, MinusIcon, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductOverview = ({
  product,
  colorValue,
  sizeValue,
  setSizeValue,
  setColorValue,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 100));
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 1;
    setQuantity(Math.min(Math.max(newQuantity, 1), 100));
  };

  return (
    <div className="mt-3 lg:mt-0 flex flex-col items-start justify-start col-span-2">
      <h1 className="text-4xl font-medium mb-3 capitalize">{product?.title}</h1>
      {/* Price and Discount */}
      <div className="price flex items-center text-gray-900 gap-3 my-3">
        <span className="text-lg text-gray-700 font-medium">
          <del>$130.00</del>
        </span>
        <span className="text-2xl font-bold">${product?.price}</span>
        <span className="w-px block h-6 bg-gray-400"></span>
        <span className="text-lg font-semibold text-emerald-600">-40%</span>
      </div>
      {/* Product Description */}
      <div className="description my-3">{product?.description}</div>
      {/* Color and Size Options */}
      <ProductOptions
        product={product}
        colorValue={colorValue}
        sizeValue={sizeValue}
        setColorValue={setColorValue}
        setSizeValue={setSizeValue}
      />
      {/* Stock */}
      <p className="stock in-stock font-medium text-lg my-3">
        Hurry up!! only <span className="text-emerald-600">11</span> items left
      </p>
      <div className="flex gap-3 my-3 w-full">
        <div className="quantity flex items-center justify-center bg-stone-100">
          <Button
            variant="transparent"
            size="sm"
            className="minus"
            onClick={handleDecrease}
          >
            <MinusIcon className="text-gray-500 w-4" />
          </Button>
          <input
            type="text"
            inputMode="numeric"
            step="1"
            min="1"
            max="100"
            name="quantity"
            value={quantity}
            title="Qty"
            className="w-10 select-none outline-none text-center bg-transparent font-medium text-gray-700"
            onChange={handleInputChange}
          ></input>
          <Button
            variant="transparent"
            size="sm"
            className="plus"
            onClick={handleIncrease}
          >
            <PlusIcon className="text-gray-500 w-4" />
          </Button>
        </div>
        <Button variant="outline" size="xl" className="flex-1 uppercase">
          Add to Cart
        </Button>
      </div>
      {/* Additional Buttons */}
      <Button variant="default" size="xl" className="my-3 w-full uppercase">
        Buy now
      </Button>
      {/* Estimated Delivery and Free Shipping */}
      <div className="efdetails my-3">
        <div className="flex gap-2 items-center mb-2">
          <TruckIcon className="mr-1" />
          <span className="edelivery font-bold">Estimated Delivery: </span>
          Within 5-7 days
        </div>
        <div className="flex gap-2 items-center">
          <ShoppingCartIcon className="mr-1" />
          <span className="fshipping font-bold">Free shipping: </span>On orders
          over $1499 and above
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="h-px w-full bg-gray-200 my-3"></div>
      {/* Product Meta */}
      <div className="product_meta flex justify-between items-center w-full mt-3">
        {/* SKU and Categories */}
        <span className="sku_wrapper">
          <span className="font-bold mr-2">SKU:</span>
          <span className="sku font-medium text-gray-600">SHO52974</span>
        </span>
        <span className="posted_in">
          <span className="font-bold mr-2"> Categories:</span>
          <a
            href="https://emart.wpthemedemos.com/big-fashion/product-category/bestselling/"
            rel="tag"
            className="capitalize font-medium text-gray-600 hover:text-gray-800 transition-all"
          >
            bestselling
          </a>
          ,{" "}
          <a
            href="https://emart.wpthemedemos.com/big-fashion/product-category/big-fashion/"
            rel="tag"
            className="capitalize font-medium text-gray-600 hover:text-gray-800 transition-all"
          >
            Big Fashion
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProductOverview;
