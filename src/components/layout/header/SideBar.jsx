import React,  { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { RiMenu2Fill } from "react-icons/ri";

import SubItems from './side-bar-parts/SubItems';

const SideBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const menuItems = [
        "Clothing",
        "Women",
        "Men",
        "Baby Girl",
        "Baby Boy",
        "Accessories",
        "Shoes",
        "Shirt",
        "T-Shirt",
        "Coat",
        "Jeans",
      ];

    const subMenuItems=[
        "Men Clothing",
        "Women Clothing",
        "Kids Clothing",
    ];

    return (
        <div className='relative'>
            <button type='button' className='flex items-center gap-4 w-full' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <LiaTimesSolid className='text-lg' /> : <RiMenu2Fill className='text-lg' />}
                <span className='text-sm uppercase font-rubik font-semibold'>All Departments</span>
                <IoIosArrowDown className='text-lg' />
            </button>


            <div
                className={`absolute left-0 w-full h-[30rem] rounded-sm bg-white shadow-sm divide-y ${isMenuOpen ? "top-[3.8rem] visible opacity-100": "top-16 invisible opacity-0"} duration-300`}>
                {menuItems?.map((item, index) => (
                    <div className='relative' key={`${item}-${index}`}>
                        {index > 3 ? <SubItems item={item} /> : <SubItems item={item} subMenuList={subMenuItems} />}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SideBar;