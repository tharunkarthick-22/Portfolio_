import React, { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

const Toggle = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="mt-3 md:mt-6.5 outline-0">
      <button onClick={handleTheme} className="cursor-pointer">
        {theme === "dark" ? <MdSunny size={20} /> : <RiMoonFill size={20} />}
      </button>
    </div>
  );
};

export default Toggle;
