import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { useState } from "react";

export default function Experience() {
  const [active, setActive] = useState("experience");

  return (
    <section className="mx-auto max-w-3xl px-6 pt-10">
      <h2 className="mb-4 text-xl md:text-2xl text-center font-semibold">My Journey</h2>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={()=> setActive("experience")}
          className={`mb-4 px-4 py-3 text-sm md:text-md rounded-full cursor-pointer ${active === "experience" ? "bg-zinc-800 text-white dark:bg-white dark:text-black  " : "border border-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-black"}`}
        >
          Experience
        </button>
        <button
          onClick={()=> setActive("education")}
          className={`mb-4 px-4 py-3 cursor-pointer text-sm md:text-md rounded-full ${active === "education" ? "bg-zinc-800 text-white dark:bg-white dark:text-black"  : "border border-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-black"}`}
        >
          Education
        </button>
      </div>
      {
        active === "experience" &&
      <Timeline defaultValue={3} orientation="vertical">
        <TimelineItem step={1}>
          <TimelineIndicator />
          <TimelineSeparator />
          <TimelineHeader>
            <TimelineDate>2023 - Present</TimelineDate>
            <TimelineTitle>Tata Consultancy Services</TimelineTitle>
          </TimelineHeader>
          <TimelineContent>
            Currently working as an Azure Support Engineer at TCS, developing technical troubleshooting and problem-solving skills while pursuing my goal of becoming a Frontend Developer.
          </TimelineContent>
        </TimelineItem>

        <TimelineItem step={2}>
          <TimelineIndicator />
          <TimelineSeparator />
          <TimelineHeader>
            <TimelineDate>Aug 2026 - Sep 2026</TimelineDate>
            <TimelineTitle>Thiranex</TimelineTitle>
          </TimelineHeader>
          <TimelineContent>
            Developed interactive web applications and improved my frontend
            skills.
          </TimelineContent>
        </TimelineItem>

        <TimelineItem step={3}>
          <TimelineIndicator />
          <TimelineHeader>
            <TimelineDate>Present</TimelineDate>
            <TimelineTitle>Growing as a Frontend/FullStack Developer</TimelineTitle>
          </TimelineHeader>
          <TimelineContent>
            Continuing to build projects and learn modern frontend/fullStack technologies.
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      }

       {active === "education" && (
        <Timeline defaultValue={3} orientation="vertical">
          <TimelineItem step={1}>
            <TimelineIndicator />
            <TimelineSeparator />
            <TimelineHeader>
              <TimelineDate>2019 – 2023</TimelineDate>
              <TimelineTitle>Sri Krishna College of Technology - Coimbatore</TimelineTitle>
            </TimelineHeader>
            <TimelineContent>
              Completed my Mechanical Engineering degree, developing strong analytical, problem-solving, and technical skills that I now apply to frontend development.
            </TimelineContent>
          </TimelineItem>

          <TimelineItem step={2}>
            <TimelineIndicator />
            <TimelineSeparator />
            <TimelineHeader>
              <TimelineDate>Apr 2026 - Aug 2026</TimelineDate>
              <TimelineTitle>SoftLogic Systems</TimelineTitle>
            </TimelineHeader>
            <TimelineContent>
              Completed Java Full Stack Development training, gaining hands-on experience in React, Java, Spring Boot and MySQL.
            </TimelineContent>
          </TimelineItem>
          

            <TimelineItem step={3}>
            <TimelineIndicator />
            <TimelineSeparator />
            <TimelineHeader>
              <TimelineDate>Present</TimelineDate>
              <TimelineTitle>Growing as a Frontend/FullStack Developer</TimelineTitle>
            </TimelineHeader>
            <TimelineContent>
              Continuing to build projects and learn modern frontend/fullStack technologies.
            </TimelineContent>
          </TimelineItem>

        </Timeline>
    )}
    </section>
  );
}
