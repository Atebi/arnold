"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedDiv = ({ children, variant, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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
