import React from "react";

const HeaderMiddle = () => {
  return (
    <div className="header-middle-bar bg-white">
      <div className="container py-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="md:w-full lg:w-[35%] flex md:flex-row items-center md:justify-between">
          <a href="" className="text-center">
            <img
              src="https://wphix.com/template/topico-prev/topico/assets/img/logo/logo-black.png"
              alt="tyro-mart-logo"
            />
          </a>

          <div className="hidden md:flex items-center gap-2">
            <i className="fa-solid fa-headset text-4xl text-gray-400"></i>
            <div className="flex flex-col leading-6 font-rubik text-gray-600">
              <span className="text-sm">Hotline Free:</span>
              <span className="font-semibold text-base">06-900-6789-00</span>
            </div>
          </div>
        </div>

        <div className="hidden w-full lg:w-4/5 md:flex md:flex-row items-center justify-between gap-6">
          <div className="search-bar font-rubik flex flex-row items-center gap-2 border border-primary rounded-full">
            <select className="px-4 py-4 border-0 text-gray-600 text-sm block  p-2.5 focus:outline-none">
              <option >All Categories</option>
              <option defaultValue="US">Computers</option>
            </select>

            <span className="h-6 w-px bg-slate-300 "></span>

            <input
              type="search"
              name="search"
              placeholder="Search For Products..."
              className="border-none outline-none px-2"
            />
            <a
              href=""
              className="no-underline text-gray-600 bg-primary py-4 px-10 font-semibold rounded-r-full"
            >
              Search
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href=""
              className="group text-center text-gray-600 transition relative"
            >
              <div className="text-2xl bg-primary group-hover:bg-primary w-12 h-12 rounded-full">
                <i className="fa-solid fa-bag-shopping absolute left-0 right-0 top-[10px] bottom-0 group-hover:text-gray-300"></i>
              </div>
              <span className="rounded-full w-5 h-5 absolute -right-1 -top-1 flex items-center justify-center text-white bg-primary font-rubik text-[12px] group-hover:bg-black">
                10
              </span>
            </a>

            <div className="flex flex-col leading-6 font-rubik text-gray-600">
              <span className="text-[14px]">My Cart:</span>
              <span className="text-[14px]">$ 255.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
