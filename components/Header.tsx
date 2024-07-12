'use client'
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
// import { Menu } from "lucide-react";


export default function Header() {

    // const [open , setOpen] = useState(false);

    const [activeSection , setActiveSection ] = useState("Home");

  return (
    <header className="z-[999] relative">
        <motion.div className="fixed top-6 
        left-1/2 h-[2.95rem] w-[25rem]  
        rounded-full border border-white border-opacity-40 -translate-x-1/2 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[2.80rem] sm:w-[36rem] sm:rounded-full sm:top-6 sm:block"
        initial={{ y: -100 ,x: "-50%" ,opacity : 0}}
        animate={{ y: 0,x: "-50%" , opacity: 1}}
        >
        </motion.div>
        <nav className=" fixed left-1/2 h-12 -translate-x-1/2 top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem]  items-center justify-center gap-y-1 text-[0.9rem] font-lato font-medium text-cyan-300  sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {
                    links.map(link =>(
                        <motion.li key={link.hash}
                        className="h-3/4 flex items-center justify-center relative"
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        >
                            <Link 
                               className={clsx(`flex w-full items-center justify-center
                               px-2 sm:px-3 py-2 hover:text-white
                                transition`,
                                {"text-white": activeSection === link.name,}
                            )}
                            href={link.hash}
                            onClick={()=> setActiveSection(link.name)}
                            >
                              {link.name}
                            </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>

                    {/* ADD THE DROPDOWN MENU */}

        {/* <div className="text-white flex justify-end pt-9 pr-3">
        <Menu />
        </div> */}
    </header>
  )
}
