import React from "react";
import aboutimg from "../assets/NirajAboutMe.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-4 lg:mb-35">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="my-20 text-center text-3xl md:text-5xl lg:text-6xl"
        >
          About me
        </motion.h1>

        <div className="flex flex-wrap items-center min-h-screen">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="rounded-xl max-w-full max-h-[550px]"
              src={aboutimg}
              alt="Niraj"
            />
          </div>

          {/* About content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="max-w-xl text-center lg:text-left md:text-2xl font-light"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};
