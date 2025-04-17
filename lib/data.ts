
import appleImg from "@/public/apple.png";
import mediumLike from "@/public/blog-app.png";
import brainwave from "@/public/brainwave.png";
import lightAi from "@/public/light-ai-landingpage.png";
import mediso from "@/public/mediso.png"
import blogify from "@/public/blogify.png"
import techWave from "@/public/Tech-Wave.png"
import portz from "@/public/portz.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    title: "Portz",
    description: "Agency and Portfolio template designed to showcase your agency's or portfolio's. Ideal for creative designers, personal portfolios.",
    tags: ["Nextjs", "GSAP" , "Typescript" , "Vercel", "TailwindCSS V4"],
    imageUrl: portz,
    link: "https://portz-three.vercel.app/",
  },
  {
    title: "Tech Wave",
    description: "Tech Wave is a high-performance e-commerce platform which delivers a seamless and scalable shopping experience.",
    tags: ["tRPC","Nextjs", "GSAP" , "TanStack query","Typescript","Zustand", "Nextauth"],
    imageUrl: techWave,
    link: "https://next-ecom-lake.vercel.app/",
  },
  {
    title: "Mediso",
    description: "A platform for patients to share concerns, upvote issues, and connect with doctors for personalized support.",
    tags: ["Nextjs", "Typescript","Postgres", "NextAuth" ,"Prisma" , "Vercel", "Bcrypt"],
    imageUrl: mediso,
    link: "https://mediso.vercel.app/",
  },
  {
    title: "Blogify",
    description: "Blogify is an intuitive, all-in-one blogging platform designed for writers, creators, and influencers.",
    tags: ["Nextjs", "Typescript","Postgres", "NextAuth" ,"Prisma" , "Vercel", "Bcrypt"],
    imageUrl: blogify,
    link: "https://blogify-five-livid.vercel.app/",
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
  "Docker",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Kubernetes",
  "Rust",
  "Framer Motion",
  "Gsap",
  "ThreeJs"
] as const;