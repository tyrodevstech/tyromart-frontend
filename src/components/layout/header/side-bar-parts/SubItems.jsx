import React, {useState} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence} from "framer-motion";

import ItemContents from "./ItemContents";

const SubItems = ({ item, subMenuList }) => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const showSubMenu = subMenuList && isSubMenuOpen;

  return (
    <div className="px-5 py-[0.7rem] "
        onMouseEnter={() => setSubMenuOpen(true)}
        onMouseLeave={() => setSubMenuOpen(false)}
    >
        <a
        className="w-full text-black text-sm font-semibold font-rubik flex items-center justify-between hover:text-primary duration-300"
        href="#"
        >
        {item}

        {subMenuList && <MdKeyboardArrowRight className="text-sm" />}
        </a>

            <div className={`w-[480px] h-[250px] z-10 absolute top-0 left-[100%] ml-1 bg-white shadow-sm rounded-sm px-6 py-6 ${showSubMenu ? "visible opacity-100": "top-16 invisible opacity-0"} duration-300 overflow-y-auto`}>
                <ItemContents subMenuList={subMenuList} />
            </div>
    </div>
  );
};

export default SubItems;
