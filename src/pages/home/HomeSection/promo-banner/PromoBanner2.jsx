import React from "react";

const Button = ({ text }) => {
  return (
    <a
      href="#"
      className="bg-white hover:bg-black hover:text-white text-black tracking-widest font-medium py-3 px-14 uppercase transition-all duration-300 hover:-translate-y-2"
    >
      {text}
    </a>
  );
};

const PromoBanner2 = () => {
  return (
    <section className="container my-20">
      <div className="flex flex-wrap justify-center">
        <div className="md:w-1/2 px-4 mb-8">
          <div className="relative h-full">
            <img
              src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/12/40-off.webp"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full flex flex-col">
              <div>
                <h2 className="text-4xl mt-[8%] ml-[6%] max-w-60">
                  Fashion never sleeps
                </h2>
              </div>
              <div className="flex justify-end flex-1">
                <p className="text-[8rem] font-medium font-oswald [writing-mode:vertical-rl] rotate-180 mb-[10%] text-white">
                  40% OFF
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 px-4 mb-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/12/big-fashion-shoes.webp"
                alt="Image 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-[15%] flex flex-col justify-center items-center">
                <Button text="Shoes" />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/12/big-fashion-bags.webp"
                alt="Image 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-[15%] flex flex-col justify-center items-center">
                <Button text="Bags" />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/12/big-fashion-shirt.webp"
                alt="Image 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-[15%] flex flex-col justify-center items-center">
                <Button text="Tops" />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/12/big-fashion-pants.webp"
                alt="Image 5"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-[15%] flex flex-col justify-center items-center">
                <Button text="Pants" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner2;
