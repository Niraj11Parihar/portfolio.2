import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [imageIndices, setImageIndices] = useState({});

  const handleImageScroll = (projectIndex, direction) => {
    const project = PROJECTS[projectIndex];
    if (!project.gallery) return;

    const currentIndex = imageIndices[projectIndex] || 0;
    const totalImages = project.gallery.length;
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = totalImages - 1;
    if (newIndex >= totalImages) newIndex = 0;

    setImageIndices({ ...imageIndices, [projectIndex]: newIndex });
  };

  const handleImageSelect = (projectIndex, imageIndex) => {
    setImageIndices({ ...imageIndices, [projectIndex]: imageIndex });
  };

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
        {PROJECTS.map((pr, index) => {
          const currentImageIndex = imageIndices[index] || 0;
          const hasGallery = pr.gallery && pr.gallery.length > 0;

          return (
            <div
              key={index}
              className="mb-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between p-4 gap-8 lg:gap-16 w-full max-w-[500px] md:max-w-[700px] lg:max-w-none mx-auto"
            >
              <div className="w-full lg:w-1/2 flex justify-center">
                {hasGallery ? (
                  <div className="w-full flex flex-col items-center">
                    <div className="relative group w-full h-[260px] md:h-[340px] lg:h-[390px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-lg flex items-center justify-center">
                      <motion.img
                        key={currentImageIndex}
                        src={pr.gallery[currentImageIndex]}
                        alt={pr.title}
                        className="h-full w-full object-contain rounded-xl bg-neutral-950"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35 }}
                      />

                      <button
                        type="button"
                        onClick={() => handleImageScroll(index, -1)}
                        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-purple-600 hover:scale-110"
                        aria-label="Previous image"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleImageScroll(index, 1)}
                        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-purple-600 hover:scale-110"
                        aria-label="Next image"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2">
                      {pr.gallery.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          type="button"
                          onClick={() => handleImageSelect(index, imgIndex)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex === imgIndex
                              ? "w-8 bg-purple-500"
                              : "w-2 bg-neutral-600 hover:bg-purple-300"
                          }`}
                          aria-label={`Go to image ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={pr.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex justify-center"
                  >
                    <motion.img
                      src={pr.image}
                      alt={pr.title}
                      className="h-[260px] md:h-[340px] lg:h-[390px] w-full object-cover rounded-xl border border-neutral-800 shadow-lg"
                    />
                  </a>
                )}
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                <motion.h6
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-4 font-semibold text-2xl md:text-3xl lg:text-4xl text-white"
                >
                  {pr.title}
                  {pr.company && (
                    <span className="text-lg md:text-2xl lg:text-3xl text-purple-100 ml-2">
                      {pr.company}
                    </span>
                  )}
                </motion.h6>

                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-6 text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed"
                >
                  {pr.description}
                </motion.p>

                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {pr.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded bg-neutral-900 px-3 py-1 text-sm md:text-base lg:text-lg font-medium text-purple-400 border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};