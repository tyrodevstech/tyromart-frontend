import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NavItem = ({ children, href, NavItemContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = NavItemContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative font-rubik text-sm font-semibold no-underline uppercase">
        {children}
        {NavItemContent ? <i className="fa-solid fa-angle-down ml-2  text-base"></i> : ""}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
        />
      </Link>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute z-10 left-1/2 top-[3.2rem] bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <NavItemContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavItem;
