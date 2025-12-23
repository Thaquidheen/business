"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
