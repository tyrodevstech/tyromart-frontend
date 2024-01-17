import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="container mx-auto ">
      <div className="lg:w-2/5 w-11/12 bg-[#ddd] mx-auto my-24 mt-32 p-10 border border-[#ff4c3b]">
        <h1 className="text-center font-bold text-3xl text-color-primary my-6">
          Reset Your Password
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

          <button
            className="btn mt-6 btn-block bg-orange-500 text-lg hover:bg-orange-600 border-0"
            type="submit"
          >
            Send
          </button>
        </form>
        <div className="mt-3">
          <Link
            to="/login"
            className="inline-block text-right w-full underline text-lg"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
