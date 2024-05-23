import React from "react";

const ItemContents = ({subMenuList}) => {
  return (
    <div className="flex flex-wrap items-start gap-20">

      <div className="text-sm font-rubik">
        <h3 className="uppercase font-semibold mb-2">Men Clothing</h3>
        <ul>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Cutton T-Shirt</a>
          </li>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Cutton T-Shirt</a>
          </li>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Cutton T-Shirt</a>
          </li>
        </ul>
      </div>
      
      <div className="text-sm font-rubik">
        <h3 className="uppercase font-semibold mb-2">women Clothing</h3>
        <ul>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Cutton Shari</a>
          </li>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Cutton Dresses</a>
          </li>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Wastern Cloths</a>
          </li>
        </ul>
      </div>

      <div className="text-sm font-rubik">
        <h3 className="uppercase font-semibold mb-2">kids Clothing</h3>
        <ul>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Cutton Shari</a>
          </li>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Cutton Dresses</a>
          </li>
          <li className="mb-1 hover:text-primary duration-200">
            <a href="">Wastern Cloths</a>
          </li>
        </ul>
      </div>

      <div className="sub-menu-banner-img">
        <img
          src="https://htmldemo.net/norda/norda/assets/images/menu/menu-categori-1.png"
          className="w-44 h-28"
          alt="model-img"
        />
      </div>
    </div>
  );
};

export default ItemContents;
