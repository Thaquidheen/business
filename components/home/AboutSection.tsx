"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

const features = [
  "Comprehensive Business Solutions",
  "Expert Consulting Services",
  "24/7 Customer Support",
];

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1546412414-e1885259563a?w=1920&h=1080&fit=crop"
          alt="Dubai Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/90"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">About Us</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6">
              Start Your UAE Business Effortlessly with{" "}
              <span className="text-primary">{companyInfo.shortName} Business Setup</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              {companyInfo.shortName} Business Setup streamlines your UAE business journey
              with expert solutions tailored to your goals. From business registration to
              regulatory compliance, we provide seamless, efficient services to help you
              thrive in a dynamic market. Partner with us to transform your vision into
              success in one of the world&apos;s top business hubs.
            </p>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-white font-bold text-base sm:text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-primary font-semibold text-base sm:text-lg">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-dark font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-gold hover:shadow-lg text-sm sm:text-base"
              >
                Learn More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            {/* Main Land - Left (Full Height) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden group row-span-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=800&fit=crop"
                alt="Main Land"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Main Land
                </h3>
              </div>
            </motion.div>

            {/* Free Zone - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden group ring-2 sm:ring-4 ring-primary/50"
            >
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop"
                alt="Free Zone"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  Free Zone
                </h3>
              </div>
            </motion.div>

            {/* Offshore - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&h=400&fit=crop"
                alt="Offshore"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  Offshore
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
