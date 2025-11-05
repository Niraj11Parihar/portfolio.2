import React from "react";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap, FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { TbBrandReactNative } from "react-icons/tb";

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

const SkillIcon = ({ icon: Icon, label, color, duration }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    className="rounded-2xl flex flex-col justify-center items-center border-4 border-neutral-800 p-6 sm:p-8 gap-3"
  >
    <Icon className={`text-5xl sm:text-6xl lg:text-7xl ${color}`} />
    <p className="text-xs sm:text-sm text-neutral-400 font-medium text-center">{label}</p>
  </motion.div>
);

export const Skills = () => {
  const skills = [
    { icon: FaHtml5, label: "HTML", color: "text-[#DD4B25]", duration: 2.5 },
    { icon: DiCss3, label: "CSS", color: "text-[#1A6FB4]", duration: 2 },
    { icon: FaBootstrap, label: "Bootstrap", color: "text-[#7910F2]", duration: 3.5 },
    { icon: RiTailwindCssFill, label: "Tailwind", color: "text-[#07B0CE]", duration: 4 },
    { icon: TbBrandReactNative, label: "React Native", color: "text-cyan-400", duration: 2.5 },
    { icon: IoLogoJavascript, label: "JavaScript", color: "bg-[#E8D44D] text-black rounded", duration: 2.5 },
    { icon: SiMongodb, label: "MongoDB", color: "text-green-500", duration: 1 },
    { icon: SiExpress, label: "Express", color: "text-white", duration: 2 },
    { icon: RiReactjsLine, label: "React", color: "text-cyan-400", duration: 3 },
    { icon: FaNodeJs, label: "Node.js", color: "text-green-600", duration: 4 },
    { icon: RiNextjsLine, label: "Next.js", color: "text-black-400", duration: 4 },
  ];

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
        className="flex flex-wrap items-start justify-center gap-x-6 gap-y-12 sm:gap-x-8 lg:gap-x-12"
      >
        {skills.map((skill, index) => (
          <SkillIcon
            key={index}
            icon={skill.icon}
            label={skill.label}
            color={skill.color}
            duration={skill.duration}
          />
        ))}
      </motion.div>
    </div>
  );
};