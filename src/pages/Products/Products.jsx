import React from "react";
import { useState } from "react";

import { Pagination } from "@nextui-org/react";

import ProductCard from "../../components/product/card/ProductCard";
import { fetchProducts } from "../../api/products/api";
import { useQuery } from "react-query";
import ProductsFilter from "@/components/product/list/ProductsFilter";
import { Spinner } from "@nextui-org/react";
import ProductCardSkeleton from "@/components/product/card/ProductCardSkeleton";

const Products = () => {
  const [page, setPage] = useState(0);

  const [value, setValue] = useState([1000, 9000]);
  const {
    isLoading,
    isError,
    error,
    data: productsData,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["products", { page: page }],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });
  const products = productsData?.products;
  console.log(isLoading, isFetching, isPreviousData);

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="products-listing container my-16">
      <div className="flex justify-center items-start gap-6">
        <ProductsFilter value={value} setValue={setValue} />
        <div className="products-cards w-full flex-1">
          <p className="text-base text-gray-600 mb-4">Showing all 8 results</p>
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {isFetching || isLoading
              ? [...Array(8)].map(() => {
                  return <ProductCardSkeleton />;
                })
              : products?.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
          </div>
          <div className="flex justify-center">
            <Pagination
              isCompact
              showControls
              total={13}
              boundaries={1}
              classNames={{
                wrapper: "gap-2 overflow-visible shadow-none bg-transparent",
                item: "text-small shadow-none rounded-none bg-transparent",
                cursor: "bg-black",
                prev: "bg-transparent shadow-none",
                next: "bg-transparent shadow-none",
              }}
              radius="none"
              initialPage={1}
              onChange={(page) => setPage((page - 1) * 8)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
