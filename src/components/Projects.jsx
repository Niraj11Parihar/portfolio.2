import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-3xl md:text-5xl lg:text-6xl"
      >
        Projects
      </motion.h1>

      <div className="space-y-12">
        {PROJECTS.map((pr, index) => (
          <div
            key={index}
            className="mb-18 flex flex-wrap items-center lg:justify-center p-3"
          >
            <div className="w-full lg:w-1/2">
              <motion.img
                src={pr.image}
                alt={pr.title}
                className="h-3/4 w-3/4 object-cover mb-4"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 font-semibold text-2xl md:text-3xl lg:text-4xl"
              >
                {pr.title}
                <span className="text-lg md:text-2xl lg:text-3xl text-purple-100">
                  {pr.company}
                </span>
              </motion.h6>

              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 text-neutral-400 text-base md:text-lg lg:text-xl"
              >
                {pr.description}
              </motion.p>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap"
              >
                {pr.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 font-medium text-md md:text-base lg:text-xl text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
