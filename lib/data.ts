
import appleImg from "@/public/apple.png";
import mediumLike from "@/public/blog-app.png";
import brainwave from "@/public/brainwave.png";
import lightAi from "@/public/light-ai-landingpage.png";
import mediso from "@/public/mediso.png"

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

export const projectsData = [
  {
    title: "Mediso",
    description: "A platform for patients to share concerns, upvote issues, and connect with doctors for personalized support.",
    tags: ["Nextjs", "Typescript","Postgres", "NextAuth" ,"Prisma" , "Vercel", "Bcrypt"],
    imageUrl: mediso,
    link: "https://mediso.vercel.app/",
  },
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