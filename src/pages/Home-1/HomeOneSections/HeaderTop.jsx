import React from "react";

const HeaderTop = () => {
  return (
    <div className="header-top-bar bg-white">
      <div className="hidden container md:flex justify-between items-center">
        <p className="font-rubik text-sm font-medium text-gray-600">
          Welcome to <b>TyroMart</b> Ecommerce
        </p>
        <div className="font-rubik flex items-center gap-4">
          <a
            href=""
            className="text-sm no-underline text-gray-600 hover:text-primary duration-400"
          >
            Wishlist
          </a>{" "}
          <span className="text-gray-300 w-[0.1px]">|</span>
          <a
            href=""
            className="text-sm no-underline text-gray-600 hover:text-primary duration-400"
          >
            Sign In
          </a>{" "}
          <span className="text-gray-300 w-[0.1px]">|</span>
          <a
            href=""
            className="text-sm no-underline text-gray-600 hover:text-primary duration-400"
          >
            Sign Up
          </a>{" "}
          <span className="text-gray-300 w-[0.1px]">|</span>
          <a
            href=""
            className="text-sm no-underline text-gray-600 hover:text-primary duration-400"
          >
            Compare
          </a>{" "}
          <span className="text-gray-300 w-[0.1px]">|</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
