import React from "react";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { Mascot } from "./Mascot";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import java from "../assets/icons/java.png";
import mysql from "../assets/icons/mysql.png";
import reactIcon from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import tailwind from "../assets/icons/tailwind.png";
import bootstrap from "../assets/icons/bootstrap.png";
import spring from "../assets/icons/springBoot.png";
import github from "../assets/icons/github.png";
import githubLight from "../assets/icons/gitHub-light.png";

const Hero = () => {
  return (
    <div className="">
      <p>
        Aspiring Frontend Developer passionate about building responsive,
        user-friendly web experiences with React, JavaScript, and modern web
        technologies. I enjoy turning creative ideas into clean, interactive
        interfaces while continuously learning and improving my skills.
      </p>
      <div className="relative mx-auto my-1 h-100 w-100 max-w-full items-center justify-center">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Mascot
            className="outline-0"
            size={180}
            directions="/mascots/beard-directions.webp"
            reactions="/mascots/beard-reactions.webp"
            label="Portfolio Mascot"
          />
        </div>
        <div className="absolute inset-0 z-5">
          <OrbitingCircles radius={110} duration={15} iconSize={40}>
            <img src={html} alt="HTML" className="  h-8 w-8 object-contain" />
            <img src={css} alt="CSS" className=" h-8 w-8 object-contain" />
            <img
              src={js}
              alt="JavaScript"
              className="h-8 w-8 object-contain "
            />
            <img src={java} alt="Java" className="h-8 w-8 object-contain " />
            <img src={mysql} alt="MySql" className="h-8 w-8 object-contain " />

            <img
              src={github}
              alt="GitHub"
              className="h-8 w-8 object-contain "
            />
          </OrbitingCircles>
        </div>
        <OrbitingCircles radius={160} duration={18} iconSize={40} reverse>
          <img
            src={reactIcon}
            alt="GitHub"
            className="h-8 w-8 object-contain"
          />
          <img
            src={spring}
            alt="SpringBoot"
            className="h-8 w-8 object-contain"
          />
          <img
            src={bootstrap}
            alt="BootStrap"
            className="h-8 w-8 object-contain"
          />
          <img
            src={tailwind}
            alt="Taiwind CSS"
            className="h-8 w-8 object-contain"
          />
          <img
            src={redux}
            alt="Redux toolkit"
            className="h-8 w-8 object-contain"
          />
        </OrbitingCircles>
      </div>
    </div>
  );
};

export default Hero;
