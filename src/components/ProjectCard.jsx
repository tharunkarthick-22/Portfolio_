import React from "react";
import TechSack from "./TechSack";
import { IoLogoGithub } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiOutlineExport } from "react-icons/ai";

const ProjectCard = (props) => {
  const { Project } = props;
  const { id, title, description, techStack, github, demo } = Project;
  return (
    <div className="flex">
      <div className="flex flex-col gap-2">
        <img className="rounded" src={Project.image} alt="" />
        <div className="mt-3 flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
          <div className="flex gap-3 text-zinc-700">
            <a href={github} target="_blank" className="hover:text-zinc-900 hover:scale-110 dark:text-white">
              <FaGithub size={28}/>
            </a>
            <a href={demo} target="_blank" className="hover:text-zinc-900 hover:scale-110 dark:text-white">
              <FaArrowUpRightFromSquare size={25}/>
            </a>
          </div>
        </div>
        <p className="text-xs md:text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((stack) => {
            return (
              <div key={stack.name} className="border px-2 rounded-full">
                <TechSack stack={stack}></TechSack>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


