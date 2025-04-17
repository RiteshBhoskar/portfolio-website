"use client"
import { projectsData } from "@/lib/data";
import React, { useState } from "react";
import Project from "./project";
import { useSectionInView } from "@/lib/hook";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [showAll, setShowAll] = useState(false);

  const VISIBLE_COUNT = 6;
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, VISIBLE_COUNT);
  
  return (
    <section ref={ref} className="flex flex-col items-center justify-center" id="projects">
      <h2 className="text-5xl font-lato py-5 text-white">
        My Projects
      </h2>
      <div>
        {visibleProjects.map((project , index)=>(
          <div
          className="flex flex-col justify-center
          mb-5 mx-3"
           key={index}>
          <Project {...project} />
          </div>
        ))}
      </div>

      {projectsData.length > VISIBLE_COUNT && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="my-6 px-4 py-2 bg-transparent border-white border backdrop-blur-3xl text-white rounded-full "
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  )
};
