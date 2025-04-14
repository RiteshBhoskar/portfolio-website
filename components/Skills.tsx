"use client";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MdCircle } from "react-icons/md";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

gsap.registerPlugin(ScrollTrigger);

const skillNames = [
  {
    name: "React",
    color: "#29D8FF",
  },
  {
    name: "Nextjs.",
    color: "#FFFFFF",
  },
  {
    name: "Gsap",
    color: "#0AE448", 
  },
  {
    name: "Typescript",
    color: "#000000",
  },
];

export default function Skills() {
      const { ref, inView } = useInView();
      const { setActiveSection } = useActiveSectionContext();
    
      useEffect(() => {
        if(inView){
          setActiveSection("Skills");
        }
      }, [inView, setActiveSection])
      const component = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  });

  return (
    <section
      className="py-7 overflow-x-hidden scroll-mt-40 "
      ref={(el) => {
        component.current = el;
        ref(el);
      }}
      id="skills"
    >
      <h2 className="text-5xl text-white flex justify-center font-lato pb-3">
        Skills
      </h2>
      {skillNames.map((skill, skillIndex) => (
        <div
          key={skillIndex}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className=" text-7xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 && skill.color ? skill.color : "inherit",
                }}
              >
                {skill.name}
              </span>
              <span className="text-5xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
      <div className="flex justify-center">
        <div className="my-7 max-w-[53rem] mb-10">
          <ul className="flex flex-wrap justify-center gap-2.5 text-lg font-lato text-white">
            {skillsData.map((skill, index) => (
              <motion.li
                key={index}
                className="border border-white px-4 py-2 rounded-full"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
