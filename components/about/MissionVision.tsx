"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: '#141425' }}>
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To simplify business establishment in the UAE by providing expert
              guidance, transparent processes, and dedicated support at every step.
              We are committed to helping entrepreneurs navigate the complexities of
              company formation with ease and confidence.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-xl bg-secondary/20 border border-secondary/30 text-secondary-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To be the most trusted partner for entrepreneurs worldwide seeking
              to build successful businesses in the UAE. We aspire to set the
              standard for excellence in business consultancy through innovation,
              integrity, and unwavering commitment to client success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
