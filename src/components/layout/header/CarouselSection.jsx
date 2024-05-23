import React from "react";
import BannerCarousel from "./carousel-parts/BannerCarousel";


const OPTIONS = {}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const CarouselSection = () => {
  return (
    <div className="container lg:py-4 flex items-center justify-between">
      <div className="w-[18%] hidden lg:block"></div>
      <div className="w-full lg:w-[76%]">
        <BannerCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default CarouselSection;
