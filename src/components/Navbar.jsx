import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Toggle from "./Toggle";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const displayMenu = () => {
    console.log("menu clicked");
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex gap-3">
      <div>
        <button onClick={displayMenu}>
          <GiHamburgerMenu
            size={20}
            className=" flex flex-col md:hidden cursor-pointer mt-3 outline-0"
          />
        </button>
        <ul
          className={`${menuOpen ? "flex" : "hidden"} absolute right-0 top-10 z-50 flex-col gap-4 rounded-md bg-white p-4 shadow-lg md:hidden dark:bg-zinc-900 `}
        >
          <li>
            <a href="#home" className="relative inline-block group">
              Home
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative inline-block group">
              About
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative inline-block group">
              Projects
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative inline-block group">
              Contact
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          </li>
        </ul>
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#home" className="relative inline-block group">
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative inline-block group">
              About
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative inline-block group">
              Projects
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative inline-block group">
              Contact
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          </li>
        </ul>
      </div>
      <Toggle></Toggle>
    </div>
  );
};

export default NavBar;
