"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  ScrollText,
  Stamp,
  FolderCheck,
  Landmark,
  Calculator,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

const iconMap: { [key: string]: React.ReactNode } = {
  FileText: <FileText className="w-8 h-8" />,
  ScrollText: <ScrollText className="w-8 h-8" />,
  Stamp: <Stamp className="w-8 h-8" />,
  FolderCheck: <FolderCheck className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
  Calculator: <Calculator className="w-8 h-8" />,
};

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Business Setup Services"
          subtitle="End-to-end solutions tailored to your business needs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                    {iconMap[service.icon]}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
