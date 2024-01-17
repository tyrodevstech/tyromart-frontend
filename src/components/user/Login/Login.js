import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const passwordShowRef = useRef("");
  const handleShow = () => {
    const passShow = passwordShowRef.current.checked;
    setShow(passShow);
  };
  return (
    <div className="container mx-auto ">
      <div className="lg:w-2/5 w-11/12 bg-[#ddd] mx-auto my-24 mt-32 p-10 border border-[#ff4c3b]">
        {/* <div className="flex items-center justify-between ">
          <div className="mr-3">
            <label htmlFor="">Email</label> <br />
            <input className="input h-11 rounded-none w-[384px]" type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input className="input h-11 rounded-none w-[384px]" type="text" />
          </div>
        </div> */}
        <h1 className="text-center font-bold text-3xl text-color-primary my-6">
          Login
        </h1>
        <form action="">
          <div>
            <label htmlFor="email" className="text-lg font-medium ml-2">
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
          <div className="relative form-control mt-6">
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
          </div>
          <button
            className="btn mt-6 btn-block bg-orange-500 text-lg hover:bg-orange-600 border-0"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-3">
          <Link
            to="/reset-password"
            className="inline-block text-right w-full underline text-lg"
          >
            Forgot Password?
          </Link>
        </div>
        <p className="text-center mt-5">
          New To Developer Thrill{" "}
          <Link to="/register" className="text-color-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
