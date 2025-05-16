import React from "react";
import { HERO_CONTENT } from "../constants";
import profileimg from "../assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  viewport: { once: true },
});

export const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-4 lg:mb-35">
        <div className="flex flex-wrap justify-center items-center min-h-screen">
          {/* Content part */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4">
            <div className="flex flex-col items-center lg:items-start max-w-xl">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-8 text-6xl font-thin tracking-tight lg:text-8xl"
              >
                Niraj Parihar
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="mt-4 text-center lg:text-left text-lg md:text-2xl font-light p-3"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>

          {/* Profile image part */}
          <div className="w-full lg:w-1/2 flex justify-center p-4">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="rounded-xl max-h-[500px] w-auto"
              src={profileimg}
              alt="Niraj"
            />
          </div>
        </div>
      </div>
    </>
  );
};
