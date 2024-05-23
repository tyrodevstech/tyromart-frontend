import React, { useState } from "react";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";

import ProductCard1 from "../../components/product/card/ProductCard1";
import ProductCardSkeleton from "../product/card/ProductCardSkeleton";

const DynamicTabSection = ({
  sectionTitle,
  tabsData,
  productsData,
  isFetching,
  isLoading,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container flex flex-col justify-end">
      <div className="flex flex-col">
        <div className="flex w-full justify-center pt-24 px-4">
          <div className="w-full">
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <div className="flex justify-between items-center border-b mb-6">
                <h2 className="text-xl font-semibold leading-none">
                  {sectionTitle}
                </h2>
                <TabList className="flex gap-4">
                  {tabsData.map((tab) => (
                    <Tab
                      key={tab.key}
                      className="font-medium p-1 pb-3 transition-all text-text/50 border-b border-b-transparent data-[selected]:text-text data-[selected]:border-b-text data-[hover]:text-text/70 focus:outline-0 data-[focus]:outline-1 data-[focus]:outline-text"
                    >
                      {tab.title}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels className="mt-3">
                {tabsData.map((tab, index) => (
                  <TabPanel key={tab.key}>
                    <Transition
                      appear
                      show={selectedIndex == index}
                      enter="transition-opacity duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className={`grid grid-cols-5 gap-8`}>
                        {isFetching || isLoading
                          ? [...Array(5)].map((item, index) => {
                              return (
                                <ProductCardSkeleton
                                  key={`${index}-${tab.key}`}
                                />
                              );
                            })
                          : productsData.map((product) => (
                              <ProductCard1
                                key={product.id}
                                product={product}
                              />
                            ))}
                      </div>
                    </Transition>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTabSection;
