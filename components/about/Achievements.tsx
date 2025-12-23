"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Best Business Consultancy 2023",
    description: "Recognized for excellence in client service",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "DED Certificate of Appreciation",
    description: "For outstanding contribution to business development",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Top Rated on Google",
    description: "4.9 stars from 800+ verified reviews",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "5000+ Happy Clients",
    description: "Trusted by entrepreneurs worldwide",
  },
];

const mediaLogos = [
  "Gulf News",
  "Khaleej Times",
  "Arabian Business",
  "Forbes Middle East",
];

export default function Achievements() {
  return (
    <section className="section-padding text-white relative" style={{ backgroundColor: '#1A1A2E', isolation: 'isolate' }}>
      <div className="container-custom">
        <SectionHeader
          badge="Recognition"
          title="Awards & Achievements"
          subtitle="Our commitment to excellence has been recognized"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                {achievement.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Media Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 pt-12"
        >
          <p className="text-center text-gray-300 mb-8">As featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {mediaLogos.map((logo) => (
              <div
                key={logo}
                className="text-xl font-display font-bold text-gray-500 hover:text-primary transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
