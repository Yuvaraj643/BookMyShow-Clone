import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            It All Starts Here
          </h3>
          <span className="text-gray-400 text-xs flex items-center ">
            Bhubaneswar <BsChevronRight />
          </span>
        </div>
        <div className="w-7 h-7">
        <AiOutlineSearch className="w-full h-full"/>
      </div>
      </div>

    </>
  );
};

const NavMd = () => {
    return(
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">                      
            <AiOutlineSearch />
            <input type="search" placeholder="Search for Movies,Events,Plays,Sports and Activities" className="w-full focus:outline-none" />

        </div>
    )
};

const NavLg = () => {};
const navbarcomponent = () => {
  return (
    <>
      <nav className="bg-navCol-50 px-4 py-2">
        <div className="md:hidden">{<NavSm />}</div>
        <div className="hidden lg:hidden md:flex">{<NavMd />}</div>
        <div className="hidden lg:flex">{}</div>
      </nav>
    </>
  );
};

export default navbarcomponent;
