import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
        viewport={{ once: true }}
        className="my-20 text-center text-3xl md:text-5xl lg:text-6xl"
      >
        Experience
      </motion.h1>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-18 flex flex-wrap items-center lg:justify-center p-3">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} // Trigger when in view
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-base md:text-lg lg:text-xl text-neutral-400">{exp.year}</p>
            </motion.div>

            <div className="w-full max-w-3xl lg:w-3/4">
              {/* Role */}
              <motion.h6
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="font-semibold text-2xl md:text-3xl lg:text-4xl"
              >
                {exp.role}
              </motion.h6>

              {/* Company - placed below with only vertical padding */}
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl lg:text-2xl text-purple-400 py-1"
              >
                {exp.company}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-purpal-400 text-base md:text-lg lg:text-xl leading-relaxed"
              >
                {exp.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
