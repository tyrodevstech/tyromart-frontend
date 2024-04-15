import React from "react";
import { Link } from "react-router-dom";

import { Checkbox } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { Plus } from "lucide-react";

const ProductsFilter = ({ value, setValue }) => {
  return (
    <div className="filter-sections hidden lg:block w-1/5">
      <div className="flex justify-start items-center gap-2">
        <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
          Home
        </Link>{" "}
        &#x2F; <p className="text-sm text-gray-900 font-semibold">Products</p>
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

      <hr className="w-full my-6" />

      <div>
        <h3 className="text-xl text-gray-900 font-medium">Price</h3>
        <div className="mt-4 flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
          <Slider
            size="sm"
            formatOptions={{ style: "currency", currency: "USD" }}
            step={10}
            maxValue={10000}
            minValue={0}
            value={value}
            onChange={setValue}
            className="max-w-md"
            aria-label="currency slider"
          />
          <p className="text-default-500 font-medium text-small">
            Selected budget:{" "}
            {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
          </p>
        </div>
      </div>

      <hr className="w-full my-6" />

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

      <hr className="w-full my-6" />

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

      <hr className="w-full my-6" />
    </div>
  );
};

export default ProductsFilter;
