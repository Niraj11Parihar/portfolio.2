import React from "react";
import { DiCss3, DiRedis } from "react-icons/di";
import { FaBootstrap, FaHtml5, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import {  RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariants = (d) => {
  return {
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
  };
};


export const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
         initial={{y: -100, opacity:0}}
         animate={{y: 0, opacity: 1}}
         transition={{duration: 1, delay: 1.2}}
      className="my-30 text-center text-3xl md:text-5xl lg:text-6xl my-20">Skills</motion.h1>
      <motion.div 
         initial={{x: -200, opacity:0}}
         animate={{x: 0, opacity: 1}}
         transition={{duration: 1, delay: 0.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        
        {/* HTML Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl p-4 text-[#DD4B25] rounded" />
        </motion.div>

        {/* CSS Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <DiCss3 className="text-7xl p-4 text-[#1A6FB4] rounded" />
        </motion.div>

        {/* Bootstrap Icon */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-[#7910F2] p-4 rounded" />
        </motion.div>

        {/* Tailwind CSS Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl p-4 text-[#07B0CE] rounded" />
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl bg-[#E8D44D] text-black p-4 rounded" />
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* Express Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-white" />
        </motion.div>

        {/* ReactJS Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* NodeJS Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>

        {/* MySQL Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex justify-between border-4 border-neutral-800 p-4"
        >
          <GrMysql className="text-7xl text-[#00758F] p-4 bg-white rounded" />
        </motion.div>
        
      </motion.div>
    </div>
  );
};
