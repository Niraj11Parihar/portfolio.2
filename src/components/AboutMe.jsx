import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-16">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="my-20 text-center text-3xl md:text-5xl lg:text-6xl"
        >
          About me
        </motion.h1>

        <div className="w-full px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="max-w-4xl mx-auto md:text-2xl font-light"
          >
            <ul className="space-y-4 list-disc list-outside pl-8">
              {ABOUT_TEXT.map((point, index) => (
                <li key={index} className="text-neutral-300 leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};
