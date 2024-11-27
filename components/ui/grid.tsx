'use client';
// File: src/components/MobileAnimation.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimationDemo } from "./bg";

const MobileAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Motion variants for the icons
  const iconVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    animate: (custom) => ({
      x: custom.x, // Dynamic x movement
      y: custom.y, // Dynamic y movement
      scale: 0.3, // Shrinking effect
      opacity: 0.0, // Fading effect as it approaches
      transition: { duration: 1.5, ease: "easeInOut" },
    }),
  };

  const textVariants = {
    initial: { opacity: 0, x: -50 }, // Start slightly offscreen
    animate: { opacity: 1, x: 0, transition: { duration: 1 } }, // Fade and slide in
  };

  const textRightVariants = {
    initial: { opacity: 0, x: 50 }, // Start slightly offscreen
    animate: { opacity: 1, x: 0, transition: { duration: 1 } }, // Fade and slide in
  };

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      // Smooth scrolling to the second section
      document.getElementById("s2").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 1600); // Ensure delay matches animation duration
  };

  return (
    <>
      <section id="s1">
        <div className="relative w-full h-screen bg-gray-50 overflow-hidden flex items-center justify-center">
          {/* Background Icons */}
          <motion.div
            className="absolute top-10 left-10 w-12 h-12 bg-red-300 rounded-full"
            variants={iconVariants}
            custom={{ x: 100, y: 400 }} // Custom position for animation
            animate={isAnimating ? "animate" : "initial"}
          />

        <motion.div
            className="absolute top-10 left-15 w-12 h-12 bg-purple-400 rounded-full"
            variants={iconVariants}
            custom={{ x: 100, y: 400 }} // Custom position for animation
            animate={isAnimating ? "animate" : "initial"}
          />
          <motion.div
            className="absolute top-20 right-20 w-12 h-12 bg-green-300 rounded-full"
            variants={iconVariants}
            custom={{ x: -150, y: 350 }} // Custom position for animation
            animate={isAnimating ? "animate" : "initial"}
          />
          <motion.div
            className="absolute bottom-10 left-20 w-12 h-12 bg-blue-300 rounded-full"
            variants={iconVariants}
            custom={{ x: 150, y: -200 }} // Custom position for animation
            animate={isAnimating ? "animate" : "initial"}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-300 rounded-full"
            variants={iconVariants}
            custom={{ x: -100, y: -250 }} // Custom position for animation
            animate={isAnimating ? "animate" : "initial"}
          />


          {/* Mobile Image */}
          <motion.div
            className="relative w-48 h-96 bg-black rounded-2xl shadow-lg mt-[800px] cursor-pointer"
            onClick={handleClick}
            initial={{ y: 0 }}
            animate={{ y: isAnimating ? -400 : 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            {/* Add an optional mock screen */}
            
            <motion.div
                className="absolute left-96 top-[50%] w-full transform -translate-y-1/2 text-lg font-bold text-gray-600"
                variants={textRightVariants}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
            >
            Right Demo Text
          </motion.div>

            <div className="absolute inset-5 bg-gray-800 rounded-xl"></div>

            <motion.div
                className="absolute right-96 top-[50%] w-full transform -translate-y-1/2 text-lg font-bold text-gray-600"
                variants={textVariants}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
            >
            Left Demo Text
          </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="s23" className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
        <BackgroundGradientAnimationDemo />
      </section>
    </>
  );
};

export default MobileAnimation;
