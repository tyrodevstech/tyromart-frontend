import React, { useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard1 from "../../components/product/card/ProductCard1";
import ProductCardSkeleton from "../product/card/ProductCardSkeleton";

const DynamicTabSection = ({
  sectionTitle,
  tabsData,
  productsData,
  isFetching,
  isLoading,
}) => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0].key);

  return (
    <div className="container flex flex-col justify-end">
      <div className="flex flex-col p-6">
        <div className="flex items-center justify-between w-full border-b">
          <h2 className="text-xl font-semibold">{sectionTitle}</h2>
          <Tabs
            onSelectionChange={(key) => setSelectedTab(key)}
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0",
              cursor: "w-full bg-slate-800",
              tab: "max-w-fit h-12",
              tabContent: "group-data-[selected=true]:text-slate-800",
            }}
          >
            {tabsData.map((tab) => (
              <Tab title={tab.title} key={tab.key} />
            ))}
          </Tabs>
        </div>
        <div className="mt-8 relative bg-white">
          <AnimatePresence>
            {tabsData.map(
              (tab) =>
                selectedTab === tab.key && (
                  <motion.div
                    className="absolute top-0 w-full"
                    key={tab.key}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={`grid grid-cols-5 gap-8`}>
                      {isFetching || isLoading
                        ? [...Array(5)].map(() => {
                            return <ProductCardSkeleton />;
                          })
                        : productsData.map((product) => (
                            <ProductCard1 key={product.id} product={product} />
                          ))}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DynamicTabSection;
