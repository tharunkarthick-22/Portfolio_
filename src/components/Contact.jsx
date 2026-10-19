import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center my-5 font-semibold">
        Let's Connect
      </h2>
      <div className="flex gap-4 text-2xl justify-center ">
        <a
          href="https://www.linkedin.com/in/tharun-j-0724a31a7/"
          className=" p-3 rounded-full hover:bg-zinc-800 hover:text-white duration-150"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/tharunkarthick-22"
          target="_blank"
          className=" p-3 rounded-full hover:bg-zinc-800 hover:text-white duration-150"
        >
          <FiGithub />
        </a>
        <a
          href="mailto:tharun220402@gmail.com"
          target="_blank"
          className=" p-3 rounded-full hover:bg-zinc-800 hover:text-white duration-150"
        >
          <MdOutlineEmail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
