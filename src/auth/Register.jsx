import React, { useEffect, useState } from "react";
import logo from "../components/assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase-config";

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passMatch, setPassMach] = useState(false);
  const [passMessage, setPassMessage] = useState(false);
  const [errror, setErrror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user,setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
  });
  //  useEffect(()=>{
  //     console.log(confirmPassword);
  //     console.log(registerEmail);
  //     console.log(registerPassword);
  //  })
  const register = async () => {
    if (confirmPassword != registerPassword) {
      setPassMach(true);
      return;
    } else {
      setPassMach(false);
    }

    if (registerPassword.length < 6) {
      setPassMessage(true);
      return;
    } else {
      setPassMessage(false);
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setErrorMessage(false);
      console.log(user);
    } catch (error) {
      setErrror(true);
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="h-screen flex flex-col items-center mt-4">
      <form action="" className="w-full flex items-center justify-center">
        <div className=" h-fit w-[30%] shadow-2xl rounded-xl flex flex-col justify-center items-center p-4">
          <p className="text-2xl font-semibold p-8">Sign Up</p>
          <img className="h-12" src={logo} alt="" />
          <div className="p-4 mt-4 w-full flex flex-col gap-8 font-medium">
            <input
              className=" border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
            <input
              className="border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
            />
            {passMessage ? (
              <span className="text-red-400">
                Password Should be have atleast 6 Charaters{" "}
              </span>
            ) : null}
            <input
              className="border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {passMatch ? (
              <span className="text-red-400">
                Password Confirmation Mismatch
              </span>
            ) : null}
          </div>
          <HashLink>
            <button
              type="submit"
              className="h-12 w-56 shadow-inner shadow-blue-800 rounded-xl text-xl font-semibold mt-8"
              onClick={register}
            >
              Sign Up
            </button>
          </HashLink>
        </div>
      </form>
      <div className="text-red-500 text-xl font-bold ">
        {errror ? <div>{errorMessage}</div> : null}
      </div>
      <div>{ `User login with ${user.email}`}</div>
      <div className="mt-5 shadow-2xl  ">
        <span className="text-xl ">Have an Account {"  "} </span>
        <Link to={"/login"}>
          {" "}
          <span className="text-xl text-blue-600  font-bold   ">log In </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
