import React from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../../services/products/api";
import DynamicTabSection from "../../components/DynamicTabSection/DynamicTabSection";

const bestSellersTabsData = [
  { key: "top_10", title: "Top 10" },
  { key: "women", title: "Women" },
];

const RecommendedSection = () => {
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
  // console.log(isLoading, isFetching, isPreviousData);
  if (error) return "Error";
  return (
    <DynamicTabSection
      sectionTitle="Best Sellers"
      tabsData={bestSellersTabsData}
      productsData={bestSellersProductsData}
      isFetching={isFetching}
      isLoading={isLoading}
    />
  );
};

export default RecommendedSection;
