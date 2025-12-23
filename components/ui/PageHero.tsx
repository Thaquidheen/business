"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; href: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      style={{ backgroundColor: '#1A1A2E', isolation: 'isolate' }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-3xl"
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-300 mb-6"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.name} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-primary">{crumb.name}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

      </div>
    </section>
  );
}
