"use client";

import { motion } from "framer-motion";
import { Star, Handshake, Lightbulb, Target } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { values } from "@/lib/data";

const iconMap: { [key: string]: React.ReactNode } = {
  Star: <Star className="w-8 h-8" />,
  Handshake: <Handshake className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
};

export default function Values() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Our Values"
          title="What We Stand For"
          subtitle="The principles that guide everything we do"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-dark flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-all"
              >
                {iconMap[value.icon]}
              </motion.div>
              <h3 className="font-display text-xl font-bold text-dark mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
