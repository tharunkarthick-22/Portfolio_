import React from "react";
import NexCart from "../assets/project-images/NexCart.png";
import ToDo from "../assets/project-images/ToDo_App.png"
import weatherApp from "../assets/project-images/WeatherApp.png"
import loginForm from "../assets/project-images/LoginForm.png"
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const projects = [
  {
    id: 1,
    title: "NexCart",
    description:
      "E-commerce platform featuring product browsing, search, cart, and wishlist functionality.",
    image: NexCart,

    techStack: [
      { name: "React", icon: "../assets/icons/react.png" },
      { name: "JavaScript", icon: "../assets/icons/js.png" },
      { name: "Tailwind CSS", icon: "../assets/icons/tailwind.png" },
      { name: "Redux", icon: "../assets/icons/redux.png" },
    ],

    github: "https://github.com/tharunkarthick-22/E-commerce",
    demo: "https://tharunkarthick-22.github.io/E-commerce/",
  },
  {
    id: 2,
    title: "WeatherApp",
    description:
      "Displays real-time weather conditions and forecasts using the OpenWeather API.",
    image: weatherApp,

    techStack: [
      { name: "React", icon: "../assets/icons/react.png" },
      { name: "JavaScript", icon: "../assets/icons/js.png" },
      { name: "Bootstrap", icon: "../assets/icons/bootstrap.png" },
    ],

    github: "https://github.com/tharunkarthick-22/WeatherApp",
    demo: "https://tharunkarthick-22.github.io/WeatherApp/",
  },
  {
    id: 3,
    title: "ToDo App",
    description:
      "Task management app with add, edit, and delete functionality.",
    image: ToDo,

    techStack: [
      { name: "React", icon: "../assets/icons/react.png" },
      { name: "JavaScript", icon: "../assets/icons/js.png" },
    ],

    github: "https://github.com/tharunkarthick-22/Simple-ToDo-Application/",
    demo: "https://tharunkarthick-22.github.io/Simple-ToDo-Application/",
  },
  {
    id: 4,
    title: "Login Form",
    description:
      "Responsive login interface with form inputs and interactive UI elements.",
    image: loginForm,

    techStack: [
      { name: "HTML", icon: "../assets/icons/html.png" },
      { name: "CSS", icon: "../assets/icons/css.png" },
      { name: "JavaScript", icon: "../assets/icons/j.png" },
      { name: "Bootstrap", icon: "../assets/icons/bootstrap.png" },
    ],

    github: "https://github.com/tharunkarthick-22/Portfolio_",
    demo: "https://tharunkarthick-22.github.io/Portfolio_/",
  },
  
]

  return (
    <div>
      <h2 className="text-center text-xl md:text-2xl font-semibold">Projects</h2>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 ">
      {
        projects.map( (project)=> {
          return <div key={project.id} className=" shadow-md rounded-md p-4 dark:bg-zinc-900">
            <ProjectCard Project={project}></ProjectCard>
          </div>
        } )
      }
      </div>
      
    </div>
  );
};

export default Projects;
