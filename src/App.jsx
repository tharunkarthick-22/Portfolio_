import { Meteors } from "./components/ui/meteors";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Experience from "./components/Experience";

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const meteorCount = () => {
      if (window.innerWidth <= 640) {
        setCount(30);
      } else if (window.innerWidth <= 1024) {
        setCount(60);
      } else {
        setCount(90);
      }
    };

    meteorCount();

    window.addEventListener("resize", meteorCount);

    return () => {
      window.removeEventListener("resize", meteorCount);
    };
  });

  return (
    <div className="relative min-h-screen ">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden ">
        <Meteors number={count} angle={215} />
      </div>

      <div className="relative z-10 my-10 mx-10">
        <div id="home">
          <Home />
        </div>

        <div className="container w-11/12 mx-auto">
          <div id="hero">
            <Hero />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
