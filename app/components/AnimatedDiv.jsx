"use client";

import React, { useState, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

const AnimatedDiv = ({ children, variant, delay }) => {
  const ref = useRef(null);
  //   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const inView = useInView(ref);

  const variants = {
    fadeInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    fadeInUp: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[variant].initial}
      animate={inView ? variants[variant].animate : variants[variant].initial}
      transition={{
        ease: "linear",
        // type: "spring",
        duration: 0.4,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
