import React from "react";
import aboutimg from "../assets/NirajAboutMe.jpg";
import { ABOUT_TEXT } from "../constants";
import{motion} from "framer-motion"

export const AboutMe = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-4 lg:mb-35 ">
        <motion.h1 
            initial={{y: -100, opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}}

        className="my-20 text-center text-3xl md:text-5xl lg:text-6xl">About me</motion.h1>
        <div className="flex flex-wrap">
          {/* Image  */}
          <div className="fw-full lg:1/2  flex justify-start   lg:p-8">
            <div className=" p-3">
              <motion.img 
                initial={{x: -100, opacity:0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.5, delay: 1}}
              className="rounded" src={aboutimg} alt="Niraj" />
            </div>
          </div>

          {/* About content  */}
          <div className="w-full flex items-center justify-end lg:w-1/2">
            <di>
              <motion.p 
                 initial={{x: 100, opacity:0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 0.5, delay: 1}}
              className="my-2 max-w-xl md:text-2xl  p-3 font-light ">{ABOUT_TEXT}</motion.p>
            </di>
          </div>
        </div>
      </div>
    </>
  );
};
