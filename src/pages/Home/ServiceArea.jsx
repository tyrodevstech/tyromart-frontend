import React from "react";
// import { FcClock } from "@react-icons/all-files/fc/FcClock";
// import { FcInTransit } from "@react-icons/all-files/fc/FcInTransit";
// import { FcHeadset } from "@react-icons/all-files/fc/FcHeadset";
import {
  TbRosetteDiscountCheck,
  TbTruckDelivery,
  TbHeadset,
  TbReload,
} from "react-icons/tb";

const Service = ({ icon, title, description }) => {
  return (
    <div className="service flex gap-2">
      <div className="service__icon text-3xl">{icon}</div>
      <div className="service__content">
        <h3 className="font-medium">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const ServiceArea = () => {
  return (
    <div className="service-area">
      <div className="container flex justify-between gap-4">
        <Service
          icon={<TbReload strokeWidth={1.5} className="text-primary" />}
          title="Easy Returns"
          description="Hassle-free return policy"
        />
        <Service
          icon={
            <TbRosetteDiscountCheck
              strokeWidth={1.5}
              className="text-primary"
            />
          }
          title="Guaranteed Products"
          description="100% Satisfaction Guarantee"
        />
        <Service
          icon={<TbHeadset strokeWidth={1.5} className="text-primary" />}
          title="Customer Support"
          description="24/7 Live Chat Support"
        />
        <Service
          icon={<TbTruckDelivery strokeWidth={1.5} className="text-primary" />}
          title="Fast Delivery"
          description="Get your order quickly"
        />
      </div>
    </div>
  );
};

export default ServiceArea;
