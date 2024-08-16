import React from "react";
import appleImg from "@/public/apple.png";
import mediumLike from "@/public/blog-app.png";
import brainwave from "@/public/brainwave.png";
import lightAi from "@/public/light-ai-landingpage.png";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Currently Studying In College",
//     location: "Pune, MH",
//     description:
//       "Currently studying in college. Looking for an internship.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2022",
  // },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Light AI Saas landing page",
    description: "Landing page for any AI saas. Can be changed according to the needs of the client. ",
    tags: ["Nextjs", "Typescript", "Framer-motion","TainwindCss", "Vercel"],
    imageUrl: lightAi,
    link: "https://light-ai-landingpage.vercel.app/",
  },
  {
    title: "Apple-Iphone15",
    description:
      "Apple's Iphone 15 website remade using Gsap, threejs and react. Goal was to learn front-end development.",
    tags: ["React","Javascript", "Threejs","Gsap", "Tailwind","Vercel"],
    imageUrl: appleImg,
    link: "https://apple-iphone-clone-eight.vercel.app/",
  },
  {
    title: "Brainwave",
    description:
      "Brainwave is a landing page for any AI SAAS. Can be changed according to the business.",
    tags: ["React", "JavaScript", "Tailwind","HTML", "CSS" , "Vercel"],
    imageUrl: brainwave,
    link:"https://brainwave-react-app.vercel.app/",
  },
  {
    title: "MediumLike",
    description:
      "A blog app made usign Next js. Which is open for pubic and is for the admins personal use too.",
    tags: [ "Next.js", "React", "PostgresSQL",
    "VercelDb", "Tailwind", "Vercel" ],
    imageUrl: mediumLike,
    link: "https://next-blog-app-teal.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Gsap",
  "ThreeJs"
] as const;