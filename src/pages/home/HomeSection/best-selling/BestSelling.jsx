import React from "react";
import ProductCard from "../../../../components/product/card/ProductCard";
import { fetchProducts } from "../../../../api/products/api";
import { useQuery } from "react-query";

const BestSelling = () => {
  const {
    isLoading,
    error,
    data: productsData,
  } = useQuery("products", fetchProducts);
  const products = productsData?.products;
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="best-selling my-16 relative">
      <div className="section-infos text-center mb-10 group">
        <div className="overlay absolute inset-0 -z-10 bg-no-repeat bg-[position:4%_-6%] bg-[length:32%_Auto] bg-[url('https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2023/05/trending.webp')] group-hover:bg-[length:31%_Auto] origin-bottom-left duration-500"></div>
        <h2 className="section-title text-4xl font-normal text-neutral-800 mb-3">
          Best selling fashion items
        </h2>
        <p className="section-description max-w-xl mx-auto text-lg text-neutral-500">
          Base optimal relaxation unlock my. Asserts too invite web cause eow
          can breakout ocean create.
        </p>
      </div>
      <div className="grid grid-cols-4 container gap-4">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default BestSelling;
