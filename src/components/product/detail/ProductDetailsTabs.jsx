import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

const ProductDetailsTabs = ({ product }) => {
  return (
    <>
      {/* Tabs component for description and review */}
      <Tabs
        aria-label="Options"
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none",
          cursor: "w-full bg-red-500",
          tab: "px-0 h-12 max-w-fit",
          tabContent: "group-data-[selected=true]:text-red-500 uppercase",
        }}
      >
        <Tab key="description" title="Description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Tab>
        <Tab key="review" title="Review">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Tab>
      </Tabs>
    </>
  );
};

export default ProductDetailsTabs;
