import React from "react";

const PromoBanner1 = () => {
  return (
    <div className="bg-stone-200 py-4  my-20">
      <div className="container flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        <div className="aspect-square w-[60%] flex items-center justify-end">
          <img
            className="w-full max-w-xl"
            src="https://emart.wpthemedemos.com/fashion-store/wp-content/uploads/sites/6/2023/04/fashionstore-poli-img.webp"
            alt="promo-banner-img-1"
          />
        </div>

        <div className="w-full lg:w-[50%] text-center md:text-left mt-4 md:mt-0">
          <h1 className="font-poppins text-4xl font-semibold capitalize leading-normal">
            Exclusive summer collection for summer
          </h1>
          <p className="mt-4 tracking-normal text-base font-semibold text-gray-500">
            On other hand, we denounce with righteous indignation and dislike
            men who are so beguiled. We denounce with righteous indignation and
            dislike men who are so beguiled.
          </p>
          <button className="mt-10 md:mb-6 lg:mt-10 border border-gray-900 px-12 py-3 text-center text-lg font-medium uppercase tracking-wide hover:bg-gray-900 hover:text-white hover:-translate-y-2 transition-all duration-500">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner1;
