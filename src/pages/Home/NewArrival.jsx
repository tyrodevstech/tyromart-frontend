import React from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../../services/products/api";
import DynamicTabSection from "../../components/DynamicTabSection/DynamicTabSection";

const bestSellersTabsData = [
  { key: "top_10", title: "Top 10" },
  { key: "women", title: "Women" },
];

const NewArrival = () => {
  const {
    isLoading,
    isError,
    error,
    data: bestSellersProductsData,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  // const products = productsData?.products;
  // console.log(isLoading, isFetching, isPreviousData,bestSellersProductsData);
  if (error) return "Error";
  return (
    <section className="py-28 bg-white">
      <DynamicTabSection
        sectionTitle="New Arrival"
        tabsData={bestSellersTabsData}
        productsData={bestSellersProductsData}
        isFetching={isFetching}
        isLoading={isLoading}
      />
    </section>
  );
};

export default NewArrival;
