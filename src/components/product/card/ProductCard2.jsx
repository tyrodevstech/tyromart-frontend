import React from "react";
import { Link } from "react-router-dom";
import { TbHeart, TbEye, TbShoppingBag, TbRefresh } from "react-icons/tb";

const ProductCard2 = ({ product }) => {
  return (
    <div className="product-item group">
      <div className="image-wrapper aspect-[4/5] relative transition flex items-center justify-center overflow-hidden border-slate-200">
        <img
          className="block w-full group-hover:scale-105 transition-all [transition-duration:400ms] h-full object-cover will-change-transform"
          src={product.main_image}
          alt=""
        />
        <div className="bg-red-500 px-3 font-medium py-0.5 absolute top-3 text-white text-sm right-3">
          -4%
        </div>

        <div className="action-buttons absolute top-4 left-4 z-20 flex flex-col gap-3 group-hover:gap-2 transition-all [transition-duration:400ms]">
          <button className="w-9 rounded-full bg-white hover:text-white transition-colors hover:bg-primary aspect-square flex items-center justify-center">
            <TbHeart />
          </button>
          <button className="w-9 rounded-full opacity-0 invisible transition-all [transition-duration:400ms] group-hover:visible group-hover:opacity-100 bg-white hover:text-white hover:bg-primary aspect-square flex items-center justify-center">
            <TbEye />
          </button>
        </div>

        <div className="add-bag absolute z-20 -bottom-3 invisible opacity-0 left-4 right-4 flex items-center justify-center group-hover:bottom-4 group-hover:visible group-hover:opacity-100 transition-all duration-300">
          <button className="bg-primary text-white px-6 py-3 flex gap-2 items-center justify-center hover:bg-background transition-all rounded-sm">
            <TbShoppingBag />
            <span className="text-sm font-medium">Add to Bag</span>
          </button>
        </div>
      </div>
      <div className="product-description bg-white text-center mt-5">
        {/* <div className="product-categories uppercase text-sm font-medium text-text mt-3">
          <a href="">{product.category.name}</a>
          {product.parent_sub_category?.name && ", "}
          <a href="">{product.parent_sub_category?.name}</a>
        </div> */}

        <div className="product-rating mt-1 flex items-center justify-center gap-1">
          <svg
            className="w-3.5 h-3.5 text-orange-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 text-orange-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 text-orange-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 text-orange-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <h5 className="product-title font-medium text-slate-800 line-clamp-1 capitalize mt-2">
          {product.name}
        </h5>
        <p className="product-price mt-1.5 text-slate-900">
          <span className="text-red-500 text-xl font-medium">
            ${product.price}
          </span>{" "}
          <del className="text-slate-500">$50</del>
        </p>
      </div>
    </div>
  );
};

export default ProductCard2;
