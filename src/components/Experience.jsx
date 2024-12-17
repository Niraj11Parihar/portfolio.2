import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
        viewport={{ once: true }}
        className='my-20 text-center text-3xl md:text-5xl lg:text-6xl'>
        Experience
      </motion.h1>

      <div className='space-y-12'>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className='mb-18 flex flex-wrap items-center lg:justify-center p-3'>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} // Trigger when in view
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className='w-full lg:w-1/4'>
              <p className='mb-2 text-base md:text-lg lg:text-xl text-neutral-400'>{exp.year}</p>
            </motion.div>

            <div className='w-full max-w-xl lg:w-3/4'>
              <motion.h6
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} // Trigger when in view
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className='mb-4 font-semibold text-2xl md:text-3xl lg:text-4xl'>
                {exp.role}
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }} // Trigger when in view
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className='text-lg md:text-2xl lg:text-3xl text-purple-100'>
                  {exp.company}
                </motion.span>
              </motion.h6>

              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} // Trigger when in view
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className='mb-4 text-neutral-400 text-base md:text-lg lg:text-xl'>
                {exp.description}
              </motion.p>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} // Trigger when in view
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className='flex flex-wrap'>
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 font-medium text-md md:text-base lg:text-xl text-purple-800'>
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
