import React from "react";
import ProductCard from "../../../../components/product/card/ProductCard";
import { fetchProducts } from "../../../../api/products/api";
import { useQuery } from "react-query";

const BestSelling = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", fetchProducts);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const limitedProducts = products.slice(0, 4);

  return (
    <section className="best-selling my-16 relative">
      <div className="overlay absolute inset-0 bg-no-repeat bg-[position:4%_2%] bg-[length:30%_Auto] bg-[url('https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2023/05/trending.webp')]"></div>
      <div className="section-infos text-center mb-10">
        <h2 className="section-title text-4xl font-normal text-neutral-800 mb-3">
          Best selling fashion items
        </h2>
        <p className="section-description max-w-xl mx-auto text-lg text-neutral-500">
          Base optimal relaxation unlock my. Asserts too invite web cause eow
          can breakout ocean create.
        </p>
      </div>
      <div className="grid grid-cols-4 container gap-4">
        {limitedProducts?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default BestSelling;
