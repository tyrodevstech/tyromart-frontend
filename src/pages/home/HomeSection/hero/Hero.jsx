import React from "react";

const Hero = () => {
  return (
    <div className="relative isolate h-screen w-full">
      <img
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover"
        src="https://emart.wpthemedemos.com/women-fashion/wp-content/uploads/sites/5/2022/11/Womenn-fashion-banner-011.webp"
        alt="hero-image"
      />

      <div className="absolute inset-0 h-full w-full z-10">
        <div className="container w-full h-full grid grid-cols-2">
          <div className="message-area flex items-center">
            <div className="w-3/4">
              <h2 className="text-7xl">Choose your fashion</h2>
              <p className="mt-4 text-lg text-gray-500">
                Walk dive charts good items what’s anyway stakeholder it. Those
                that’s call important incentivize before.
              </p>
              <button className="mt-10 md:mb-6 lg:mt-10 border border-black px-10 py-3 text-center text-base font-medium uppercase tracking-wide hover:bg-black hover:text-white hover:-translate-y-2 transition-all duration-500">
                Shop Now
              </button>
            </div>
          </div>

          <div className="h-full relative flex gap-16">
            <div className="flex items-end">
              <img
                className="max-w-[28rem] hover:-translate-x-2 transition-all duration-300"
                src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/11/big-fashion-banner-main-img-01-712x1024.webp"
                alt="model-image-1"
              />
            </div>
            <div className="mt-24 flex items-start">
              <img
                className="max-w-[16rem] hover:-translate-y-2 transition-all duration-300"
                src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/11/big-fashion-banner-main-img-02.webp"
                alt="model-image-2"
              />
            </div>

            <div className="absolute w-full bottom-0 left-24 mb-24">
            <img
                className="hover:-translate-y-2 transition-all duration-300"
                src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/11/Banner.webp"
                alt="model-image-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
