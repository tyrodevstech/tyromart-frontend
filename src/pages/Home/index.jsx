import React from "react";
import Header from "../../components/layout/header";
import RecommendedSection from "./RecommendedSection";
import NewArrival from "./NewArrival";
import ServiceArea from "./ServiceArea";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <ServiceArea />
      <NewArrival />
      {/* <RecommendedSection /> */}
    </div>
  );
};

export default Home;
