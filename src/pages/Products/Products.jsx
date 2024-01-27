import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Checkbox } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { Plus } from "lucide-react";

import ProductCard from "../../components/product/card/ProductCard";
import { fetchProducts } from "../../api/products/api";
import { useQuery } from "react-query";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", fetchProducts);

  const [value, setValue] = useState([1000, 9000]);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const limitedProducts = products.slice(0, 8);

  return (
    <section className="products-listing container my-16">
      <div className="flex justify-center items-start gap-6">
        <div className="filter-sections hidden lg:block w-1/4">
          <div className="flex justify-start items-center gap-2">
            <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
              Home
            </Link>{" "}
            &#x2F;{" "}
            <p className="text-sm text-gray-900 font-semibold">Products</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl text-gray-900 font-medium">Categories</h3>
            <ul className="mt-2 text-gray-800">
              <li className="my-3">
                <a href="">Deal (8)</a>
              </li>
              <li className="my-3">
                <a href="">Decoration (1)</a>
              </li>
              <li className="my-3">
                <a href="">Furniture (2)</a>
              </li>
              <li className="my-3">
                <a href="">Lamp (9)</a>
              </li>
              <li className="my-3">
                <a href="">Vase (3)</a>
              </li>
            </ul>
          </div>

          <hr className="w-[80%] my-6" />

          <div>
            <h3 className="text-xl text-gray-900 font-medium">Price</h3>
            <div className="mt-4 flex flex-col gap-2 w-[80%] h-full max-w-md items-start justify-center">
              <Slider
                size="sm"
                formatOptions={{ style: "currency", currency: "USD" }}
                step={10}
                maxValue={10000}
                minValue={0}
                value={value}
                onChange={setValue}
                className="max-w-md"
              />
              <p className="text-default-500 font-medium text-small">
                Selected budget:{" "}
                {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
              </p>
            </div>
          </div>

          <hr className="w-[80%] my-6" />

          <div className="mt-4">
            <h3 className="text-xl text-gray-900 font-medium">Colors</h3>
            <ul className="mt-2 text-gray-800">
              <li className="my-3">
                <Checkbox
                  defaultSelected
                  size="md"
                  radius="none"
                  // icon={<Plus />}
                >
                  Copper Red (1)
                </Checkbox>
              </li>
              <li className="my-3">
                <Checkbox
                  size="md"
                  radius="none"
                   // icon={<Plus />}
                >
                  Dark Green (10)
                </Checkbox>
              </li>
              <li className="my-3">
                <Checkbox
                  size="md"
                  radius="none"
                   // icon={<Plus />}
                >
                  Copper Blue (2)
                </Checkbox>
              </li>
              <li className="my-3">
                <Checkbox
                  size="md"
                  radius="none"
                   // icon={<Plus />}
                >
                  Dark Yellow (9)
                </Checkbox>
              </li>
              <li className="my-3">
                <Checkbox
                  size="md"
                  radius="none"
                   // icon={<Plus />}
                >
                  Dark Purple (6)
                </Checkbox>
              </li>
            </ul>
          </div>

          <hr className="w-[80%] my-6" />

          <div className="mt-4">
            <h3 className="text-xl text-gray-900 font-medium">Stock Status</h3>
            <ul className="mt-2 text-gray-800">
              <li className="my-3">
                <Checkbox
                  size="md"
                  radius="none"
                   // icon={<Plus />}
                >
                  In stock (8)
                </Checkbox>
              </li>
            </ul>
          </div>

          <hr className="w-[80%] my-6" />
        </div>
        <div className="products-cards w-full md:w-3/4">
          <p className="text-base text-gray-600 mb-4">Showing all 8 results</p>
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {limitedProducts?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>

          <div className="flex justify-center">
            <Pagination
              isCompact
              showControls
              total={100}
              boundaries={1}
              classNames={{
                wrapper:
                  "gap-2 overflow-visible shadow-none bg-transparent",
                item: "text-small shadow-none rounded-none bg-transparent",
                cursor:"bg-black",
                prev:"bg-transparent shadow-none",
                next:"bg-transparent shadow-none"
              }}
              radius="none"
              initialPage={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
