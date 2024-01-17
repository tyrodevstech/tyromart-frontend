import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import userContext from "../../../ContextProvider/UserContext";
import { fetchProductDetails } from "../../../fetchers/products";
import CollectionImg1 from "../../../Images/Collection/cloth/2.jpg";
import CollectionImg2 from "../../../Images/Collection/cloth/3.jpg";
import CollectionImg3 from "../../../Images/Collection/cloth/4.jpg";
import CollectionImg4 from "../../../Images/Collection/cloth/5.jpg";
import CollectionImg5 from "../../../Images/Collection/cloth/6.jpg";
import CollectionImg6 from "../../../Images/Collection/cloth/7.jpg";
import modalImg from "../../../Images/Collection/sizeCart.jpg";
const ProductDetails = () => {
  const { darkMode } = useContext(userContext);
  const [productDescription, setProductDescription] = useState("description");
  let { productId } = useParams();
  const { isLoading, error, data } = useQuery(
    [`productDetails`, productId],
    ({ queryKey }) => fetchProductDetails(queryKey[1])
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(productId);
  return (
    <div className="container mx-auto px-5 lg:px-20 mt-24 py-10">
      <div className="grid gap-0 lg:gap-6 lg:grid-cols-2 grid-cols-1">
        <div>
          <img src={data?.image} alt="" />
          <div className="mt-2 flex items-center">
            <img className="w-20 border-2 mr-1" src={CollectionImg1} alt="" />
            <img className="w-20 border-2 mr-1" src={CollectionImg2} alt="" />
            <img className="w-20 border-2 mr-1" src={CollectionImg3} alt="" />
            <img className="w-20 border-2 mr-1" src={CollectionImg4} alt="" />
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <h1 className="text-2xl font-medium">{data?.title}</h1>
          <h4 className="mt-2">
            <del>$174 </del>{" "}
            <span className="text-[#ff4c3b] ml-2">40% Off</span>
          </h4>
          <h3 className="text-3xl">${data?.price}</h3>
          <div className="mt-4">
            <span className="color-choice-btn-dashboard bg-[#fff]"></span>
            <span className="color-choice-btn-dashboard bg-[#000]"></span>
          </div>
          <div className="divider"></div>
          <div className="grid gap-0 grid-cols-2">
            <div>
              <h4 className="font-medium">Select Size</h4>
              <button className="rounded-full border w-8 h-8 mr-2 mt-5">
                l
              </button>
              <button className="rounded-full border w-8 h-8 mt-5">m</button>
            </div>
            <div>
              {" "}
              <label
                htmlFor="my-modal-3"
                className="font-medium cursor-pointer"
              >
                Size Chart
              </label>
              {/* START MODAL */}
              <input
                type="checkbox"
                id="my-modal-3"
                className="modal-toggle text-black"
              />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-black hover:bg-transparent"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Sheer Straight Kurta</h3>
                  <div className="divider"></div>
                  <img src={modalImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h6 className="text-[#ff4c3b] font-medium">InStock</h6>
            <h5 className="font-medium">Quantity</h5>
            <div className="mt-4">
              <button
                className={`btn bg-transparent rounded-none border-r-0 ${
                  darkMode ? "text-white border-white" : "text-black"
                }   hover:text-white translate-y-[-2px]`}
              >
                <i className="fa-solid fa-angle-left "></i>
              </button>
              <input
                type="number"
                className="input input-bordered rounded-none w-24 border-black text-black"
              />

              <button
                className={`btn bg-transparent rounded-none border-l-0 ${
                  darkMode ? "text-white border-white" : "text-black"
                } hover:text-white translate-y-[-2px]`}
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
            <div>
              {" "}
              <button
                htmlFor="product-add-modal"
                className="bg-[#ff5258] text-white px-6 py-3 lg:font-medium text-small lg:text-sm mt-5 cursor-pointer mr-5"
              >
                ADD TO CART
              </button>
              <button
                htmlFor="product-add-modal"
                className="bg-[#ff5258] text-white px-6 py-3 lg:font-medium text-small lg:text-sm mt-5 cursor-pointer mr-5"
              >
                BUY NOW
              </button>
            </div>
            <h4 className="font-medium mt-3">Product Details</h4>
            <p>{data?.description}</p>
            <div className="divider"></div>
            <h4 className="font-medium">Share It</h4>
            <ul className="flex items-center pt-1">
              <li>
                <a href="" className="hover:text-[#ff4c3b] duration-200">
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>
              </li>
              <li className="ml-3">
                <a href="" className="hover:text-[#ff4c3b] duration-200 mr-3 ">
                  <i className="fa-brands fa-google-plus-g text-lg"></i>
                </a>
              </li>
              <li className="ml-3">
                <a href="" className="hover:text-[#ff4c3b] duration-200 mr-3 ">
                  <i className="fa-brands fa-twitter text-lg"></i>
                </a>
              </li>
              <li className="ml-3">
                <a href="" className="hover:text-[#ff4c3b] duration-200 mr-3 ">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>
              </li>
              <li className="ml-3">
                <a href="" className="hover:text-[#ff4c3b] duration-200 mr-3 ">
                  <i className="fa-solid fa-rss text-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={(e) => setProductDescription("description")}
          className={`text-lg border-b-2  px-4 py-3 ${
            productDescription === "description"
              ? "text-[#ff4c3b] border-[#ff4c3b]"
              : "border-[#ddd]"
          }`}
        >
          DESCRIPTION
        </button>
        <button
          onClick={(e) => setProductDescription("details")}
          className={`text-lg border-b-2  px-4 py-3 ${
            productDescription === "details"
              ? "text-[#ff4c3b] border-[#ff4c3b]"
              : "border-[#ddd]"
          }`}
        >
          DETAILS
        </button>
        <button
          onClick={(e) => setProductDescription("video")}
          className={`text-lg border-b-2  px-4 py-3 ${
            productDescription === "video"
              ? "text-[#ff4c3b] border-[#ff4c3b]"
              : "border-[#ddd]"
          }`}
        >
          VIDEO
        </button>
        <button
          onClick={(e) => setProductDescription("review")}
          className={`text-lg border-b-2 px-4 py-3 ${
            productDescription === "review"
              ? "text-[#ff4c3b] border-[#ff4c3b]"
              : "border-[#ddd]"
          }`}
        >
          WRITE REVIEW
        </button>
        <div className="mt-4 lg:ml-4">
          {productDescription === "description" && (
            <p
              className={` ${
                darkMode ? "text-white" : "text-slate-500"
              } leading-7 `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          )}
          {productDescription === "details" && (
            <p
              className={`${
                darkMode ? " text-white" : "text-slate-500"
              } leading-7`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          )}

          {productDescription === "video" && (
            <p
              className={`${
                darkMode ? " text-white" : "text-slate-500"
              } leading-7`}
            >
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          )}
          {productDescription === "review" && (
            <p
              className={`${
                darkMode ? " text-white" : "text-slate-500"
              } leading-7`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          )}
        </div>
        <div className="mt-8">
          <h1 className="font-bold text-2xl">RELATED PRODUCTS</h1>
          <div className="divider"></div>
          <div className="grid gap-6 lg:grid-cols-6 grid-cols-2">
            <div
              className={`group w-full ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <figure className=" relative">
                <img src={CollectionImg1} alt="cloth" />
                <div className="absolute top-0 left-0 w-full h-0  bg-blue-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className=" ">
                    <img
                      className="relative"
                      src={CollectionImg2}
                      alt="cloth"
                    />

                    <div className="absolute right-4 bottom-4 overlay-img-icon">
                      <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-heart"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </a>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="text-left px-4 py-3">
                <div className="retting-icon">
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star un-retting"></i>
                </div>
                <p>fitted dress</p>
                <p>
                  <b>$184.00</b>
                  <small>
                    <del>$184.00</del>
                  </small>
                </p>
                <div className="mt-2">
                  <span className="color-choice-btn bg-red-800"></span>
                  <span className="color-choice-btn bg-green-800"></span>
                  <span className="color-choice-btn bg-white"></span>
                </div>
              </div>
            </div>
            <div
              className={`group w-full ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <figure className=" relative">
                <img src={CollectionImg3} alt="cloth" />
                <div className="absolute top-0 left-0 w-full h-0  bg-blue-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className=" ">
                    <img
                      className="relative"
                      src={CollectionImg4}
                      alt="cloth"
                    />

                    <div className="absolute right-4 bottom-4 overlay-img-icon">
                      <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-heart"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </a>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="text-left px-4 py-3">
                <div className="retting-icon">
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star un-retting"></i>
                </div>
                <p>fitted dress</p>
                <p>
                  <b>$184.00</b>
                  <small>
                    <del>$184.00</del>
                  </small>
                </p>
                <div className="mt-2">
                  <span className="color-choice-btn bg-red-800"></span>
                  <span className="color-choice-btn bg-green-800"></span>
                  <span className="color-choice-btn bg-white"></span>
                </div>
              </div>
            </div>
            <div
              className={`group w-full ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <figure className=" relative">
                <img src={CollectionImg5} alt="cloth" />
                <div className="absolute top-0 left-0 w-full h-0  bg-blue-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className=" ">
                    <img
                      className="relative"
                      src={CollectionImg6}
                      alt="cloth"
                    />

                    <div className="absolute right-4 bottom-4 overlay-img-icon">
                      <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-heart"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </a>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="text-left px-4 py-3">
                <div className="retting-icon">
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star un-retting"></i>
                </div>
                <p>fitted dress</p>
                <p>
                  <b>$184.00</b>
                  <small>
                    <del>$184.00</del>
                  </small>
                </p>
                <div className="mt-2">
                  <span className="color-choice-btn bg-red-800"></span>
                  <span className="color-choice-btn bg-green-800"></span>
                  <span className="color-choice-btn bg-white"></span>
                </div>
              </div>
            </div>
            <div
              className={`group w-full ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <figure className=" relative">
                <img src={CollectionImg2} alt="cloth" />
                <div className="absolute top-0 left-0 w-full h-0  bg-blue-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className=" ">
                    <img
                      className="relative"
                      src={CollectionImg1}
                      alt="cloth"
                    />

                    <div className="absolute right-4 bottom-4 overlay-img-icon">
                      <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-heart"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </a>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="text-left px-4 py-3">
                <div className="retting-icon">
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star un-retting"></i>
                </div>
                <p>fitted dress</p>
                <p>
                  <b>$184.00</b>
                  <small>
                    <del>$184.00</del>
                  </small>
                </p>
                <div className="mt-2">
                  <span className="color-choice-btn bg-red-800"></span>
                  <span className="color-choice-btn bg-green-800"></span>
                  <span className="color-choice-btn bg-white"></span>
                </div>
              </div>
            </div>
            <div
              className={`group w-full ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <figure className=" relative">
                <img src={CollectionImg6} alt="cloth" />
                <div className="absolute top-0 left-0 w-full h-0  bg-blue-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className=" ">
                    <img
                      className="relative"
                      src={CollectionImg5}
                      alt="cloth"
                    />

                    <div className="absolute right-4 bottom-4 overlay-img-icon">
                      <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-heart"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </a>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="text-left px-4 py-3">
                <div className="retting-icon">
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star un-retting"></i>
                </div>
                <p>fitted dress</p>
                <p>
                  <b>$184.00</b>
                  <small>
                    <del>$184.00</del>
                  </small>
                </p>
                <div className="mt-2">
                  <span className="color-choice-btn bg-red-800"></span>
                  <span className="color-choice-btn bg-green-800"></span>
                  <span className="color-choice-btn bg-white"></span>
                </div>
              </div>
            </div>
            <div
              className={`group w-full ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <figure className=" relative">
                <img src={CollectionImg1} alt="cloth" />
                <div className="absolute top-0 left-0 w-full h-0  bg-blue-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className=" ">
                    <img
                      className="relative"
                      src={CollectionImg2}
                      alt="cloth"
                    />

                    <div className="absolute right-4 bottom-4 overlay-img-icon">
                      <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-heart"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>{" "}
                      <br />
                      <a href="">
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </a>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="text-left px-4 py-3">
                <div className="retting-icon">
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star retting"></i>
                  <i className="fa-solid fa-star un-retting"></i>
                </div>
                <p>fitted dress</p>
                <p>
                  <b>$184.00</b>
                  <small>
                    <del>$184.00</del>
                  </small>
                </p>
                <div className="mt-2">
                  <span className="color-choice-btn bg-red-800"></span>
                  <span className="color-choice-btn bg-green-800"></span>
                  <span className="color-choice-btn bg-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
