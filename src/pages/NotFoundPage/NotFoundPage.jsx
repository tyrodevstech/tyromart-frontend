import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="mt-20 px-5 lg:px-20 container mx-auto">
      <div className="flex items-center justify-center text-center text-slate-400 py-10 h-96">
        <div>
          <h1 className="text-9xl font-bold">404</h1>
          <h2 className="text-3xl mt-6">PAGE NOT FOUND</h2>
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="bg-[#ff5258] text-white px-6 py-3 lg:font-medium text-small lg:text-sm  cursor-pointer"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
