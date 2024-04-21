import React from "react";

import HeaderTop from "./HomeOneSections/HeaderTop";
import HeaderMiddle from "./HomeOneSections/HeaderMiddle";
import NavBar from "./HomeOneSections/NavBar";

const HomeOne = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <HeaderTop />
      <hr className="h-px bg-gray-200 border-0 m-0 p-0"></hr>
      <HeaderMiddle/>
      <hr className="h-px bg-gray-200 border-0 m-0 p-0"></hr>
      <NavBar/>
    </div>
  );
};

export default HomeOne;
