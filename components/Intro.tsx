import Link from "next/link";
import { Shapes } from "./Shapes";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section>
      <div
        className="flex flex-col-reverse mt-15 sm:pt-10 sm:mb-4 w-full justify-between sm:h-lvh sm:flex-row scroll-mt-28"
        id="home"
      >
        {/* left div  */}
        <div className=" h-fit sm:h-lvh w-full flex flex-col sm:w-[50%] font-lato px-5 mb-7 sm:mt-45 sm:pl-10 intro">
          <div className="sm:pt-16">
            <div className="text-white p-2 text-xl ">Hi i am,</div>
            <div className="font-light text-7xl text-white">Ritesh Bhoskar</div>
          </div>
          <div className="text-3xl font-lato  pt-4 pb-2 ">
            a Tech - Enthusiast , Learner and an Engineer.
          </div>
          <div className="text-xl  text-white font-lato py-2">
            I have a deep passion for technology and computer science, enjoying
            every aspect from front-end design to backend problem-solving, and I
            also love working with hardware.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-3">
            <Link
              href={"#contact"}
              className="bg-gray-900 text-white px-7 py-3
                            flex items-center justify-center rounded-full gap-2
                            "
            >
              Contact Me <BsArrowRight />
            </Link>
            <a
              href="/resume.pdf"
              title="download my resume"
              role="button"
              download
              className="border-white border-2 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full
                            font-lato"
            >
              Download Resume <HiDownload />
            </a>
            <div className="flex flex-row gap-2">
              <a
                href="https://www.linkedin.com/in/ritesh-bhoskar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white sm:text-gray-700 sm:bg-white p-3 flex justify-center items-center rounded-full 
                            w-full sm:w-fit border-white border-2 "
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/RiteshBhoskar"
                target="_blank"
                rel="noopener noreferrer"
                className="border-white border-2 text-white sm:text-gray-700 sm:bg-white p-3 flex items-center 
                            justify-center rounded-full relative text-[1.25rem]
                            w-full sm:w-fit"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>

        {/* right div */}
        <div className="sm:w-[50%] sm:-mt-10 mt-20 ">
          <Shapes />
        </div>
      </div>
    </section>
  );
}
