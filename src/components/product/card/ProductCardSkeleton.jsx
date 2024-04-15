import React from "react";
import { Skeleton } from "@nextui-org/react";

const ProductCardSkeleton = () => {
  return (
    <div className="product-item-skeleton">
      <Skeleton className="image-wrapper aspect-[3/4] relative bg-stone-50 overflow-hidden border-2 p-2 before:![animation-duration:1500ms]"></Skeleton>
      <div className="product-description text-center pt-4 pb-2">
        <Skeleton className="product-title font-semibold text-lg before:![animation-duration:1500ms]">
          Title
        </Skeleton>
        <Skeleton className="price text-base font-medium w-max px-6 mx-auto before:![animation-duration:1500ms] mt-2">
          Price
        </Skeleton>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
