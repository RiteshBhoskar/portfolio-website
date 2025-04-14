"use client"
import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
    const { ref, inView } = useInView();
    const { setActiveSection } = useActiveSectionContext();
  
    useEffect(() => {
      if(inView){
        setActiveSection("Projects");
      }
    }, [inView, setActiveSection])
  
  return (
    <section ref={ref} className="flex flex-col items-center justify-center scroll-mt-28" id="projects">
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
    </section>
  )
};
