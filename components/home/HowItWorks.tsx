"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#141425', isolation: 'isolate' }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-secondary/40 to-transparent rounded-full blur-3xl"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="How It Works"
          title="Your Business Setup Journey"
          subtitle="Simple, transparent process from consultation to launch"
          light
        />

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary via-primary-light to-secondary"
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 mx-auto lg:mx-0 relative z-10 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300"
                >
                  <span className="text-2xl font-bold text-dark">{step.number}</span>
                </motion.div>

                {/* Content Card */}
                <div className="text-center lg:text-left backdrop-blur-sm bg-white/5 rounded-xl p-5 border border-white/10 group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>

                {/* Arrow - Desktop Only */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="hidden lg:block absolute top-10 -right-6 text-primary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
