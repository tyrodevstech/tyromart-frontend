import React from "react";

import BestSelling from "./HomeSection/best-selling/BestSelling";
import Hero from "./HomeSection/hero/Hero";
import CustomerFocused from "./HomeSection/customer-focused/CustomerFocused";
import PromoBanner1 from "./HomeSection/promo-banner/PromoBanner1";
import PromoBanner2 from "./HomeSection/promo-banner/PromoBanner2";

const Home = () => {
  return (
    <div>
      <Hero />
      <CustomerFocused />
      <BestSelling />
      <PromoBanner1 />
      <PromoBanner2 />
    </div>
  );
};

export default Home;
