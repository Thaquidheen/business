"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/lib/data";

export default function CTABanner() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #1D4E89 100%)',
        isolation: 'isolate'
      }}
    >

      {/* Morphing blob shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 blur-2xl hidden lg:block"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          borderRadius: ["70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 blur-2xl hidden lg:block"
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-2xl hidden lg:block backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full hidden lg:block backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 hidden lg:block"
      >
        <Sparkles className="w-8 h-8 text-white/20" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Business in UAE?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/90 mb-10"
          >
            Get a free consultation with our experts today and take the first
            step towards your entrepreneurial journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/contact" variant="white" size="lg">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Or call: {companyInfo.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
