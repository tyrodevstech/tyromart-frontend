import React from "react";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import NavBar from "./NavBar";
import CarouselSection from "./CarouselSection";

const Header = () => {
  return (
    <div className="header-main">
      <HeaderTop />
      <hr className="hidden md:block h-px bg-gray-200 border-0 m-0 p-0"></hr>
      <HeaderMiddle />
      <hr className="h-px bg-gray-200 border-0 m-0 p-0"></hr>
      <NavBar />
      <CarouselSection />
    </div>
  );
};

export default Header;
