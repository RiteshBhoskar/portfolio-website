import React from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div
      id="contact"
      className="py-5 flex flex-col justify-center scroll-mt-28"
    >
      <div className="font-lato text-white flex justify-center text-5xl">
        Contact Me
      </div>
      <div className="flex justify-center">
        <div className="font-lato text-white flex-col justify-center text-xl mt-4">
          <div className="flex flex-wrap px-3 justify-center text-center">
            Fastest way to contact me is to DM me on Twitter at &nbsp;
            <a
              href="https://x.com/RiteshBhoskar7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex">
                <div className="text-xl flex items-center justify-center text-black">
                  <FaXTwitter />
                </div>
                @RiteshBhoskar7
              </div>
            </a>
          </div>
          <div className="flex justify-center my-3">Or</div>
          <div className="flex justify-center px-3 flex-wrap">
            You can mail me at &nbsp;
            <a
              href="mailto:riteshbhoskar7@gmail.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              riteshbhoskar7@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
