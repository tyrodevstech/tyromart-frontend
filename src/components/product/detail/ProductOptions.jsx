import React, { useState } from "react";
import { ToggleGroup, ToggleItem } from "../../shared/ui/ToggleGroup";
import { Check } from "lucide-react";

const ProductOptions = ({
  colorValue,
  setColorValue,
  sizeValue,
  setSizeValue,
}) => {
  const colors = ["red", "Green", "Blue", "Yellow"];

  const handleColorChange = (newItem) => {
    setColorValue(newItem);
    console.log(`Selected Item: ${newItem}`);
    // Handle item change logic
  };
  const handleSizeChange = (newItem) => {
    setSizeValue(newItem);
    console.log(`Selected Item: ${newItem}`);
    // Handle item change logic
  };
  return (
    <>
      {/* Color options */}
      <div className="colors my-3">
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-bold">Color</span>:
          <span className="ml-1 capitalize">{colorValue}</span>
        </p>
        {/* ToggleGroup for color options */}
        <ToggleGroup onItemChange={handleColorChange} defaultSelected="blue">
          <ToggleItem
            value="red"
            className="w-10 h-10 bg-red-500 data-[state=on]:bg-red-700 hover:bg-red-600 rounded-full"
          >
            {colorValue === "red" ? <Check className="text-white w-6" /> : ""}
          </ToggleItem>
          <ToggleItem
            value="blue"
            className="w-10 h-10 bg-blue-500 data-[state=on]:bg-blue-700 rounded-full"
          >
            {colorValue === "blue" ? <Check className="text-white w-6" /> : ""}
          </ToggleItem>
          <ToggleItem
            value="green"
            className="w-10 h-10 bg-green-500 data-[state=on]:bg-green-700 rounded-full"
          >
            {colorValue === "green" ? <Check className="text-white w-6" /> : ""}
          </ToggleItem>
        </ToggleGroup>
      </div>

      {/* Size options */}
      <div className="sizes my-3">
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-bold">Size</span>:
          <span className="ml-1 capitalize">{sizeValue}</span>
        </p>
        {/* ToggleGroup for size options */}
        <ToggleGroup
          onItemChange={handleSizeChange}
          defaultSelected="m"
          size="lg"
          variant="outline"
        >
          <ToggleItem value="s">S</ToggleItem>
          <ToggleItem value="m">M</ToggleItem>
          <ToggleItem value="l">L</ToggleItem>
        </ToggleGroup>
      </div>
    </>
  );
};

export default ProductOptions;
