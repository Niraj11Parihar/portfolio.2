import React from "react";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap, FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (d) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: d,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: 0.3,
    },
  },
});

export const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-16 px-6 md:px-12 lg:px-24">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-10"
      >
        Skills
      </motion.h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-8 lg:gap-x-12"
      >
        {/* HTML Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <FaHtml5 className="text-5xl sm:text-6xl lg:text-7xl text-[#DD4B25]" />
        </motion.div>

        {/* CSS Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <DiCss3 className="text-5xl sm:text-6xl lg:text-7xl text-[#1A6FB4]" />
        </motion.div>

        {/* Bootstrap Icon */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <FaBootstrap className="text-5xl sm:text-6xl lg:text-7xl text-[#7910F2]" />
        </motion.div>

        {/* Tailwind CSS Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <RiTailwindCssFill className="text-5xl sm:text-6xl lg:text-7xl text-[#07B0CE]" />
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <IoLogoJavascript className="text-5xl sm:text-6xl lg:text-7xl bg-[#E8D44D] text-black rounded" />
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <SiMongodb className="text-5xl sm:text-6xl lg:text-7xl text-green-500" />
        </motion.div>

        {/* Express Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <SiExpress className="text-5xl sm:text-6xl lg:text-7xl text-white" />
        </motion.div>

        {/* ReactJS Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <RiReactjsLine className="text-5xl sm:text-6xl lg:text-7xl text-cyan-400" />
        </motion.div>

        {/* NodeJS Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-center items-center border-4 border-neutral-800 p-6 sm:p-8"
        >
          <FaNodeJs className="text-5xl sm:text-6xl lg:text-7xl text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};
