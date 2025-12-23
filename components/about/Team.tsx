"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Our Team"
          title="Meet Our Experts"
          subtitle="Dedicated professionals committed to your success"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-primary/20">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-dark hover:bg-white hover:text-secondary transition-colors shadow-lg"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg font-bold text-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
