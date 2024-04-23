import React from "react";

import NavItem from "./nav-parts/NavItem";
import ItemContent from "./nav-parts/ItemContent";

const NavBar = () => {
  return (
    <div className="nav-bar bg-white shadow-sm md:block">
      <div className="container py-2.5">
        <div className="flex items-center justify-between font-rubik">
          <div className="flex items-center gap-6 lg:gap-12">
            <div className="button-icon text-gray-700 lg:hidden cursor-pointer">
              <i className="fa-solid fa-bars"></i>
            </div>

            <div className="hidden md:flex gap-6">
              <NavItem href="/home-one/">Home</NavItem>
              <NavItem href="#" NavItemContent={ItemContent}>
                Features
              </NavItem>
              <NavItem href="#" NavItemContent={ItemContent}>
                Blog
              </NavItem>
              <NavItem href="/products/">About Us</NavItem>
              <NavItem href="#">Contact</NavItem>
            </div>
          </div>

          <button
            type="button"
            className="cursor-pointer text-gray-600 font-semibold border-none bg-primary hover:text-white duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full text-sm px-6 py-2.5 text-center"
          >
            My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
