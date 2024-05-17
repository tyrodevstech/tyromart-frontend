import React from "react";
import { Link } from "react-router-dom";

const ItemContent = () => {
  return (
    <div className="bg-white w-[12.5rem] p-4 shadow-sm flex flex-col items-start">
      <Link
        to="#"
        className="p-2 font-rubik text-gray-700 text-sm font-semibold no-underline uppercase"
      >
        Product Types
      </Link>

      <Link
        to="#"
        className="p-2 font-rubik text-gray-700 text-sm font-semibold no-underline uppercase"
      >
        Product Details
        <i className="fa-solid fa-angle-right ml-2"></i>
      </Link>

      <Link
        to="#"
        className="p-2 font-rubik text-gray-700 text-sm font-semibold no-underline uppercase"
      >
        Blog Deatils
      </Link>
    </div>
  );
};

export default ItemContent;
