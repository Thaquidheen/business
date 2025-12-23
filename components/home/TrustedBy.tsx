"use client";

import { motion } from "framer-motion";

// Placeholder company names for the marquee
const companies = [
  "TechVentures",
  "GlobalTrade Co",
  "InnovatePlus",
  "PrimeGroup",
  "DigitalFirst",
  "VentureHub",
  "StartupBay",
  "BusinessPro",
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mb-8"
        >
          Trusted by leading businesses across the globe
        </motion.p>
      </div>

      {/* Logo Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex animate-marquee">
          {/* First Set */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8"
            >
              <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="font-bold text-lg">{company[0]}</span>
                </div>
                <span className="font-semibold whitespace-nowrap">{company}</span>
              </div>
            </div>
          ))}
          {/* Duplicate Set for Seamless Loop */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8"
            >
              <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="font-bold text-lg">{company[0]}</span>
                </div>
                <span className="font-semibold whitespace-nowrap">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
