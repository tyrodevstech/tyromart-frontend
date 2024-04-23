import React from "react";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="container py-4 my-2">
      <HeaderTop />
      <hr className="h-px bg-gray-200 border-0 m-0 p-0"></hr>
      <HeaderMiddle />
      <hr className="h-px bg-gray-200 border-0 m-0 p-0"></hr>
      <NavBar />{" "}
    </div>
  );
};

export default Header;
