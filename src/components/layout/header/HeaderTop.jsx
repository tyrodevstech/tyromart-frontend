import React from "react";
import {
  TbBrandTwitter,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
} from "react-icons/tb";

const HeaderTop = () => {
  return (
    <div className="header-top-bar hidden md:block bg-white py-2">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center justify-center gap-4">
            <TbBrandTwitter strokeWidth={1} className="text-xl cursor-pointer hover:text-primary" />
            <TbBrandFacebook strokeWidth={1} className="text-xl cursor-pointer hover:text-primary" />
            <TbBrandInstagram strokeWidth={1} className="text-xl cursor-pointer hover:text-primary" />
            <TbBrandYoutube strokeWidth={1} className="text-xl cursor-pointer hover:text-primary" />
          </div>
          <p className="font-rubik text-sm font-medium">
            Welcome to <b>TyroMart</b> Ecommerce
          </p>
        </div>
        <div className="font-rubik flex items-center gap-4">
          <a
            href=""
            className="text-sm no-underline hover:text-primary duration-400"
          >
            Sign In
          </a>
          <span className="text-gray-300 w-[0.1px]">|</span>
          <a
            href=""
            className="text-sm no-underline hover:text-primary duration-400"
          >
            Sign Up
          </a>
          <span className="text-gray-300 w-[0.1px]">|</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
