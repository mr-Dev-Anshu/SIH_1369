import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../components/assets/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
   const navigate = useNavigate();
  const login = async () => {
    try {
      const loginUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
    navigate("/Dashboard")
      console.log("login Successfully !!");
      
    } catch(error) {
     console.log(error);
    }
  };
import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../components/assets/logo.png";
import toast, { Toaster } from "react-hot-toast";

// This is login page. Named Mistakenly to Register

const Register = () => {
  const notify = () => toast.success("Logged in Successfully !");
  // const notifyError = () => toast.error("Email/Password Incorrrect !")

  const handleLogin = () => {
    notify();
  };

  return (
    <div className="h-screen flex flex-col items-center mt-4">
      <div className=" h-fit w-[30%] shadow-2xl rounded-xl flex flex-col justify-center items-center p-4 mt-20">
        <p className="text-2xl font-semibold p-8">Log In</p>
        <img className="h-12" src={logo} alt="" />
        <div className="p-4 mt-4 w-full flex flex-col gap-8">
          <input
            required
            className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="email"
            placeholder="Email Address"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            required
            className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
            type="password"
            placeholder="Password"
            onChange={(e) => setLoginPass(e.target.value)}
          />
        </div>
        <HashLink >
          <button
            onClick={login}
        <HashLink>
          <button
            onClick={handleLogin}
            className="h-12 w-56 shadow-inner shadow-blue-800 rounded-xl text-xl font-semibold mt-8"
          >
            Login
          </button>
        </HashLink>
      </div>
      <div className="mt-5 shadow-2xl  ">
        <span className="text-xl "> Don't have an Account {"  "} </span>
        <Link to={"/register"}>
          {" "}
          <span className="text-xl text-blue-600 font-bold ">Sign Up </span>
        </Link>
      </div>
    </div>
  );
};
          <Toaster />
        </HashLink>
      </div>
      <div className="mt-8 w-[30%] p-2 rounded-xl flex gap-6 justify-center items-center shadow-2xl outline outline-slate-300 ">
        <span className="text-xl "> Don't have an Account ? {"  "} </span>
        <HashLink to={"/register"}>
          {" "}
          <span className="text-xl text-blue-600 font-bold ">Sign Up </span>
        </HashLink>
      </div>
    </div>
  );
};

export default Register;
