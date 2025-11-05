import React from "react";
import { EXPERIENCES, CURRENT_STATUS } from "../constants";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
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
              whileInView={{ x: 0, opacity: 1 }}
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

              {/* Company */}
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
                className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed"
              >
                {exp.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

      {/* Current Working Status Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 p-6 md:p-8 bg-gradient-to-r from-purple-900/20 to-neutral-900 border border-purple-700/30 rounded-lg"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">Current Status</h2>

        <div className="flex flex-col gap-6">
          {/* Main Status Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border border-purple-600/40 hover:border-purple-500/60 transition-all duration-300"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-neutral-900/30 to-neutral-900/40"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Left Side - Title */}
              <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-purple-600/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                    Currently Working
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors leading-tight">
                  {CURRENT_STATUS[0]?.title}
                </h3>
              </div>

              {/* Right Side - Description */}
              <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-r from-transparent to-purple-900/20">
                <p className="text-base md:text-lg text-neutral-300 group-hover:text-neutral-200 transition-colors leading-relaxed">
                  {CURRENT_STATUS[0]?.description}
                </p>
              </div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-600/10 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Status Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-lg border border-green-500/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-400">Status: Active</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400">
              Last Updated:{" "}
              <span className="text-neutral-300 font-semibold">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
