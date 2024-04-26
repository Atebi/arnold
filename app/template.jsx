//PLEASE don't use root template together with root loading component. seperate file within its own directory is okay.

//This template greatly affects a "fixed navbar"... will need to seprate the navbar from this template.

"use client";
// import React, { Children } from 'react'
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0 },
};

// const variants = {
//   hidden: { opacity: 0, x: -200 },
//   enter: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -200 },
// };

const Template = ({ children }) => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      // transition={{ type: "linear", duration: 3 }}
    >
      {children}
    </motion.main>
  );
};

export default Template;
