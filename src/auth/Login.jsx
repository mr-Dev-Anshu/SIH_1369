import React from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from "../components/assets/logo.png";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="h-screen flex flex-col items-center mt-4">
      <div className=" h-fit w-[30%] shadow-2xl rounded-xl flex flex-col justify-center items-center p-4 mt-20">
        <p className="text-2xl font-semibold p-8">Login</p>
        <img className="h-12" src={logo} alt="" />
        <div className="p-4 mt-4 w-full flex flex-col gap-8">
          <input
            className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="email"
            placeholder="Email Address"
          />
          <input
            className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="password"
            placeholder="Password"
          />
        </div>
        <HashLink>
          <button className="h-12 w-56 shadow-inner shadow-blue-800 rounded-xl text-xl font-semibold mt-8">Login</button>
        </HashLink>
      </div>
      <div className="mt-5 shadow-2xl  ">
           <span className="text-xl "> Don't have an Account {"  "} </span> 
          <Link to={"/register"}> <span  className="text-xl text-blue-600 font-bold ">Sign Up  </span></Link>
        </div>
    </div>
  )
}

export default Register