"use client";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { links } from "@/lib/data";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Circle } from "rc-progress";
import NumberFlow from "@number-flow/react";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function Navbar() {
  const { activeSection , setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isNavOpen , setIsNavOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [selected, setSelected] = useState("Home");

  useEffect(() => {
    const updateScroll = () => {
      const percentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    setSelected(activeSection);
  }, [activeSection])

  return (
    <header className="z-[999] relative">
      <motion.div
        className="hidden sm:block md:block lg:block fixed top-0 
        left-1/2
         border border-white border-opacity-40 -translate-x-1/2 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[2.80rem] sm:w-[36rem] sm:rounded-full sm:top-6"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="hidden sm:block sm:fixed sm:left-1/2 sm:w-[36rem] -translate-x-1/2 sm:top-[1.7rem] sm:h-12 sm:py-0"
      >
        <ul className="hidden sm:flex sm:w-full sm:items-center sm:justify-between px-1 h-fit sm:text-[0.9rem] font-lato font-medium text-cyan-300  sm:flex-nowrap">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="sm:h-3/4 flex h-fit items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  `hidden sm:relative sm:flex sm:w-full sm:items-center sm:justify-center sm:h-fit sm:px-3 sm:py-2 hover:text-white transition`,
                  { "text-white": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.name)}
                }
              >
                {link.name}

                {link.name === activeSection && ( 
                <motion.span className="bg-gray-300 rounded-full bg-opacity-50 absolute inset-0 -z-10 w-full" layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                }}
                >
                </motion.span>
                  )
                }
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}>
        <motion.div
          layout
          className="block sm:hidden md:hidden lg:hidden fixed left-1/2 top-6 -translate-x-1/2 border border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
          initial={{
            width: "14rem",
            height: "3.5rem",
            borderRadius: "2rem",
          }}
          animate={{
            width: isNavOpen ? "18rem" : "14rem",
            height: isNavOpen ? "auto" : "3.5rem",
            borderRadius: isNavOpen ? "1.5rem" : "2rem",
          }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="h-7 w-7 flex-shrink-0"
            >
              <Circle
                percent={scrollPercentage * 100}
                strokeWidth={10}
                strokeColor="#fff"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.span
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="font-thin font-mono text-lg text-white cursor-pointer flex justify-center"
              >
                {selected}
              </motion.span>
            </AnimatePresence>

            <div className="font-medium text-white flex justify-center items-center flex-shrink-0 overflow-clip"
            style={{ flexBasis: "2.5rem", textAlign: "right" }}>
              <NumberFlow
                value={scrollPercentage}
                format={{ style: "percent" }}
                locales="en-US"
                className="text-center w-full"
              />
            </div>
          </div>

          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                className="flex flex-col gap-2  justify-center items-center px-4 pb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {links.map((link) => (
                  <Link
                    key={link.hash}
                    href={link.hash}
                    className="block px-3 py-1 rounded-md transition-all font-thin font-mono text-lg text-slate-200"
                    onClick={() => {
                      setIsNavOpen(false);
                      setSelected(link.name);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </MotionConfig>
    </header>
  );
}
