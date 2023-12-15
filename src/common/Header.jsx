import React from "react";
import logo from "../components/assets/logo.png"
import { FolderUp } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import {auth} from "../firebase-config"

const Header = () => {
  return (
    <>
      <div className="w-full pr-40 pl-40 h-20  text-black flex justify-between">
        <div className="flex h-full justify-center items-center">
          <HashLink to={"/"}><img className="h-12" src={logo} alt="" /></HashLink>
        </div>
        <div className="flex justify-center items-center gap-10">
          <HashLink to={"/welcome"}>
            <button className=" h-10 w-32 font-semibold outline outline-2 rounded-xl outline-black text-black">
                {auth.currentUser?auth.currentUser:"log in"}
            </button>{" "}
          </HashLink>
          <HashLink to={"/upload"}>
            <button className="h-10 w-32 bg-slate-800 font-bold tracking-wider text-white  text-sm rounded-xl flex items-center justify-center gap-2 outline-black hover:bg-blue-700 duration-100">
              Upload
              <FolderUp />
            </button>
          </HashLink>
        </div>
      </div>
      <div className=" w-full outline outline-1 outline-slate-200"></div>
    </>
  );
};

export default Header;
