import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center scroll-mt-28" id="projects">
      <h2 className="text-5xl font-lato py-5 text-white">
        My Projects
      </h2>
      <div>
        {projectsData.map((project , index)=>(
          <div
          className="flex flex-col justify-center
          mb-5 mx-3"
           key={index}>
          <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  )
};
