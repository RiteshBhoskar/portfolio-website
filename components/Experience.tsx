"use client"
import React, { useEffect } from "react";
import { LuGraduationCap } from "react-icons/lu";
import MiniSectionDivider from "./MiniSectionDivider";
import { LoaderPinwheel } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Experience() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if(inView){
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection])
  return (
    <section ref={ref} id="experience" className="flex py-5 justify-center items-center">
      <div>
        <h2
          className="text-5xl pb-7 font-lato text-white
         justify-center flex"
        >
          My Experience
        </h2>
        <div className="flex justify-center items-center">
          <div className="text-4xl text-center text-white pr-2 ml-6 flex items-center">
            <LuGraduationCap />
          </div>
          <p className="text-2xl text-white font-lato flex justify-center">
            Currently Studying in College , Looking for an Internship.
          </p>
        </div>
        <div className="flex justify-center">
          <MiniSectionDivider />
        </div>
        <div className="flex justify-center text-white">
          <LoaderPinwheel />
        </div>
      </div>
    </section>
  );
}
