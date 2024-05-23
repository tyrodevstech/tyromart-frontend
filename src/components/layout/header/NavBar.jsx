import React from "react";
import {TbHeadset} from "react-icons/tb";

import NavItem from "./nav-parts/NavItem";
import ItemContent from "./nav-parts/ItemContent";

import SideBar from "./SideBar";

const NavBar = () => {
  return (
    <div className="nav-bar hidden bg-white shadow-sm lg:block">
      <div className="container py-6">
        <div className="flex items-center justify-between gap-12 font-rubik">
          <div className="w-3/12">
            <SideBar/>
          </div>

          <div className="w-7/12 flex items-center gap-8">
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

          <div className="w-2/12 flex items-center justify-end gap-1">
            <TbHeadset strokeWidth={2} className="text-xl text-gray-700"/>
            <p className="font-rubik text-sm text-gray-700"> Hotline <b>(364) 106 7572</b></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
