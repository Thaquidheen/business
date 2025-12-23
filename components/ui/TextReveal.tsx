"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "word" | "character";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
  as: Component = "span",
  splitBy = "word",
}: TextRevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const items = splitBy === "word" ? children.split(" ") : children.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Component ref={ref} className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="inline-flex flex-wrap"
        style={{ perspective: "1000px" }}
      >
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
            style={{
              marginRight: splitBy === "word" ? "0.25em" : undefined,
              transformStyle: "preserve-3d",
            }}
          >
            {item}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
