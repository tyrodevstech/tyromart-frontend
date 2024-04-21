import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, thumbnail, category, price, rating } = product;
  return (
    <Link to={`/product-details/${id}`}>
      <div className="product-item">
        <div className="image-wrapper aspect-[3/4] relative group transition duration-500 flex items-center justify-center bg-stone-50 overflow-hidden border-2 p-2">
          <img
            className="block w-full group-hover:scale-90 group-hover:opacity-90 transition duration-300 h-full object-cover"
            src={thumbnail}
            alt=""
          />
          <img
            className="w-full block h-full absolute z-10 inset-0 invisible opacity-0 group-hover:opacity-100 hover:scale-105  transition-all group-hover:visible duration-500 [transition:opacity_0.5s_ease,transform_1s_cubic-bezier(0,0,.44,1.18),visibility_0.5s]"
            src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/12/sneakers-hover02.webp"
            alt=""
          />

          <div className="action-buttons absolute invisible opacity-0 top-6 left-2 z-20 flex flex-col gap-2 group-hover:left-6 group-hover:visible group-hover:opacity-100 transition-all duration-300">
            <button className="w-10 rounded-full bg-white aspect-square flex items-center justify-center">
              <img
                src="https://emart.wpthemedemos.com/wp-content/themes/emart/assets/images/heart-woocommerce.svg"
                alt=""
                className="w-4 block"
              />
            </button>
            <button className="w-10 rounded-full bg-white aspect-square flex items-center justify-center">
              <img
                src="https://emart.wpthemedemos.com/wp-content/themes/emart/assets/images/eye-woocommerce1.svg"
                alt=""
                className="w-4 block"
              />
            </button>
          </div>

          <div className="add-bag absolute z-20 -bottom-4 invisible opacity-0 left-0 right-0 flex items-center justify-center group-hover:bottom-6 group-hover:visible group-hover:opacity-100 transition-all duration-500">
            <button className="bg-white px-7 py-3.5 flex gap-2 items-center justify-center">
              <img
                src="https://emart.wpthemedemos.com/wp-content/themes/emart/assets/images/shopping-bag-woocommerce01.svg"
                alt=""
                className="w-4"
              />
              <span className="text-sm font-medium">Add to Bag</span>
            </button>
          </div>
        </div>
        <div className="product-description text-center p-4">
          <h5 className="product-title font-semibold text-lg text-slate-800 line-clamp-1 capitalize text-re">
            {title}
          </h5>
          <p className="price text-base font-medium text-slate-500">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
