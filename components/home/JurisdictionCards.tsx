"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Factory, Globe, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { jurisdictions } from "@/lib/data";

const iconMap: { [key: string]: React.ReactNode } = {
  Building2: <Building2 className="w-12 h-12" />,
  Factory: <Factory className="w-12 h-12" />,
  Globe: <Globe className="w-12 h-12" />,
};

export default function JurisdictionCards() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Business Setup Options"
          title="Choose Your Business Structure"
          subtitle="We offer comprehensive setup solutions for all types of companies in the UAE"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {jurisdictions.map((jurisdiction, index) => (
            <motion.div
              key={jurisdiction.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={jurisdiction.href}>
                <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-dark transition-colors">
                    {iconMap[jurisdiction.icon]}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold text-dark mb-3">
                    {jurisdiction.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{jurisdiction.description}</p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
