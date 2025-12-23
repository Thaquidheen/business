"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { packages } from "@/lib/data";

export default function PricingPackages() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          badge="Pricing"
          title="Transparent Pricing Packages"
          subtitle="Choose the package that best fits your business needs"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-card ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-primary text-dark rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 pt-4">
                <h3 className="font-display text-2xl font-bold text-dark mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-primary">{pkg.price}</div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href="/contact"
                variant={pkg.popular ? "primary" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 mt-8"
        >
          * Prices may vary based on jurisdiction and business activity. Contact us
          for a customized quote.
        </motion.p>
      </div>
    </section>
  );
}
