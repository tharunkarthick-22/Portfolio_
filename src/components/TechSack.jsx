import React from "react";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import tailwind from "../assets/icons/tailwind.png";
import bootstrap from "../assets/icons/bootstrap.png";

const TechSack = (props) => {
  const { name, icon } = props.stack;

  const techIcons = {
    HTML: html,
    CSS: css,
    JavaScript: js,
    React: react,
    Redux: redux,
    "Tailwind CSS": tailwind,
    Bootstrap: bootstrap,
  };

  return (
    <div className="p-0.5 text-xs md:text-sm md:p-1">
      <span className="flex gap-1 items-center justify-center">
        <img src={techIcons[name]} alt="" className="h-5 w-5 object-contain" />
        {name}
      </span>
    </div>
  );
};

export default TechSack;
