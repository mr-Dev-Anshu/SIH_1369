import React from "react";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Login = () => {
  return (
    <div className="h-screen flex flex-col items-center mt-4">
      <div className=" h-fit w-[30%] shadow-2xl rounded-xl flex flex-col justify-center items-center p-4">
        <p className="text-2xl font-semibold p-8">Sign Up</p>
        <img className="h-12" src={logo} alt="" />
        <div className="p-4 mt-4 w-full flex flex-col gap-8">
          <input
            className=" shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="text"
            placeholder="Full Name"
          />
          <input
            className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="email"
            placeholder="Email Address"
          />
          <input
            className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="email"
            placeholder="Email Address"
          />
          <select name="designation" id="">
            <option selected value="">
              Login as
            </option>
            <option value="">Student</option>
            <option value="">Mentor</option>
            <option value="">College</option>
            <option value="">Govt. Official</option>
            <option value="">Private/Investor Company</option>
          </select>
          <input
            className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="password"
            placeholder="Password"
          />
          <input
            className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <HashLink>
          <button className="h-12 w-56 shadow-inner shadow-blue-800 rounded-xl text-xl font-semibold mt-8">
            Sign Up
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default Login;
