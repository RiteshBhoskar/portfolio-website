"use client";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mt-12 flex flex-col justify-center text-white pb-5 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-5xl  flex justify-center  -mt-5 font-lato">
        About Me
      </h2>
      <p className="text-xl px-5 sm:px-40 mt-6 leading-8 text-center font-roboto">
        I am a{" "}
        <span className="text-4xl text-black font-dancingScript">
          full stack engineer
        </span>{" "}
        with a passion for crafting dynamic and{" "}
        <span className="font-semibold">
          user-friendly front-end experiences.
        </span>
        With extensive experience in both
        <span className="italic"> front-end and back-end technologies</span>, I
        specialize in creating seamless, responsive, and visually appealing web
        applications. I <span className="underline italic">love</span> learning
        new technologies. Explore my portfolio to see how I can bring your ideas
        to life with clean, efficient , and innovative code.
      </p>
      <p className="flex justify-center items-center text-2xl py-2 font-lato font-thin">
        Currently Learning
        <Image
          src="/rust.png"
          alt="rust-image"
          height={50}
          width={90}
          className="pl-4"
        />
      </p>
    </motion.section>
  );
}
