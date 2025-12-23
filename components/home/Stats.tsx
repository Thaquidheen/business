"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #1D4E89 100%)',
        isolation: 'isolate'
      }}
    >
      {/* Animated gradient orbs for depth */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div ref={ref} className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <motion.div
                className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 relative inline-block counter-glow ${inView ? 'counting' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </motion.div>
              <motion.p
                className="text-white/90 text-lg font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
