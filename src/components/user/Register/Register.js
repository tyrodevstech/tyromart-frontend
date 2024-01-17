import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../../../ContextProvider/UserContext";

const Register = () => {
  const [show, setShow] = useState(false);
  const passwordShowRef = useRef("");
  const handleShow = () => {
    const passShow = passwordShowRef.current.checked;
    setShow(passShow);
  };
  const { accessibilityState } = useContext(userContext);
  return (
    <div className="container mx-auto ">
      <div className="lg:w-8/12	 w-11/12 bg-[#ddd] mx-auto my-24 mt-32 p-10 border border-[#ff4c3b]">
        <h1 className="text-center font-bold text-3xl text-color-primary my-6">
          Registard Now
        </h1>
        <form action="">
          <div className="lg:flex items-center justify-between ">
            <div className="lg:mr-3">
              <label htmlFor="" className="text-lg font-medium ml-2">
                First Name
              </label>{" "}
              <br />
              <input
                placeholder="First Name"
                className="input h-11 rounded-none lg:w-[376px] w-full"
                type="text"
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <label htmlFor="" className="text-lg font-medium ml-2">
                Last Name
              </label>
              <br />
              <input
                placeholder="Last Name"
                className="input h-11 rounded-none lg:w-[376px] w-full"
                type="text"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>{" "}
            <br />
            <input
              placeholder="Enter Email"
              id="email"
              type="email"
              className="input h-11 w-full rounded-none"
            />
          </div>
          <div className="lg:flex items-center justify-between mt-6">
            <div className="lg:mr-3">
              <label htmlFor="" className="text-lg font-medium ml-2">
                Password
              </label>{" "}
              <br />
              <input
                placeholder="Password"
                className="input h-11 rounded-none lg:w-[376px] w-full"
                type="text"
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <label htmlFor="" className="text-lg font-medium ml-2">
                Confirm Password
              </label>
              <br />
              <input
                placeholder="Confirm Password"
                className="input h-11 rounded-none lg:w-[376px] w-full"
                type="text"
              />
            </div>
          </div>
          {/* <div className="relative form-control mt-6">
            <label htmlFor="password" className="text-lg font-medium ml-2">
              Password
            </label>{" "}
            <div
              onClick={handleShow}
              className="absolute inset-y-0 right-3 flex items-center px-2 top-6"
            >
              <label className="swap swap-rotate">
                <input ref={passwordShowRef} type="checkbox" />
                <i className="fa-solid fa-eye-low-vision swap-on fill-current"></i>
                <i className="fa-solid fa-eye swap-off fill-current"></i>
              </label>
            </div>
            <input
              id="password"
              type={show ? "text" : "password"}
              placeholder="Password"
              className="input h-11 w-full rounded-none"
            />
          </div> */}
          <button
            className="btn mt-6 btn-block bg-orange-500 text-lg hover:bg-orange-600 border-0 mt-6"
            type="submit"
          >
            Registered Now
          </button>
        </form>
        <div>
          <p className="text-center mt-5">
            Already Have An Account{" "}
            <Link to="/login" className="text-color-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
