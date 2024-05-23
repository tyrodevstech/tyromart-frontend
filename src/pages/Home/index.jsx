import React from "react";
import RecommendedSection from "./RecommendedSection";
import NewArrival from "./NewArrival";
import ServiceArea from "./ServiceArea";

const Home = () => {
  return (
    <div className="">
      <ServiceArea />
      <NewArrival />
      {/* <RecommendedSection /> */}
    </div>
  );
};

export default Home;
