import React from "react";

const CustomerFocused = () => {
  return (
    <div className="customer-focued-wrapper my-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-center md:content-around  gap-12">
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 items-center my-4 lg:my-0">
          <img className="hover:translate-x-2 transition-all duration-300"
            src="https://emart.wpthemedemos.com/fashion-store/wp-content/uploads/sites/6/2022/12/Free-shipping.svg"
            alt="focued-img-1"
          />
          <div className="text-wrapper text-center md:text-start">
            <h4 className="text-xl font-semibold text-gray-800">
              Free Shipping
            </h4>
            <p className="text-base text-gray-700 tracking-wide">
              On order over $1499
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 items-center my-4 lg:my-0">
          <img className="hover:translate-x-2 transition-all duration-300"
            src="https://emart.wpthemedemos.com/fashion-store/wp-content/uploads/sites/6/2022/12/Quick-payment.svg"
            alt="focued-img-1"
          />
          <div className="text-wrapper text-center md:text-start">
            <h4 className="text-xl font-semibold text-gray-800">
              Quick payment
            </h4>
            <p className="text-base text-gray-700 tracking-wide">
              Online Quick Payment
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 items-center my-4 lg:my-0">
          <img className="hover:translate-x-2 transition-all duration-300"
            src="https://emart.wpthemedemos.com/fashion-store/wp-content/uploads/sites/6/2022/12/Easy-return.svg"
            alt="focued-img-1"
          />
          <div className="text-wrapper text-center md:text-start">
            <h4 className="text-xl font-semibold text-gray-800">Easy return</h4>
            <p className="text-base text-gray-700 tracking-wide">
              Return within 24 hours
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 items-center my-4 lg:my-0">
          <img className="hover:translate-x-2 transition-all duration-300"
            src="https://emart.wpthemedemos.com/fashion-store/wp-content/uploads/sites/6/2022/12/Support.svg"
            alt="focued-img-1"
          />
          <div className="text-wrapper text-center md:text-start">
            <h4 className="text-xl font-semibold text-gray-800">
              24/7 Support
            </h4>
            <p className="text-base text-gray-700 tracking-wide">
              Customer Online Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFocused;
