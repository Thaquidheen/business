"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect - background moves slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-dark overflow-hidden pb-8 sm:pb-0">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
          alt="Dubai Skyline"
          fill
          className="object-cover scale-110"
          priority
        />
        {/* Stronger overlay for better text readability */}
        <div className="absolute inset-0 bg-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-transparent"></div>
      </motion.div>

      {/* Particle Background */}
      <ParticleBackground
        particleCount={40}
        colors={["#D4AF37", "#1D4E89", "#E5C85C"]}
        speed={0.5}
        className="z-[1]"
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 hidden lg:block"
      >
        <div className="w-20 h-20 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-40 hidden lg:block"
      >
        <div className="w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
          <Star className="w-8 h-8 text-secondary-light" />
        </div>
      </motion.div>

      <motion.div className="container-custom relative z-10 pt-24 sm:pt-28 md:pt-0" style={{ y: contentY, opacity }}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-dark/60 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-primary/30"
            >
              <span className="flex items-center gap-1">
                <Star className="w-3 sm:w-4 h-3 sm:h-4 text-primary fill-primary" />
                <span className="text-white text-xs sm:text-sm font-medium">4.9</span>
              </span>
              <span className="text-gray-200 text-xs sm:text-sm">Trusted by 1000+ Entrepreneurs</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Start Your <span className="text-primary">UAE Business</span> Effortlessly with ABT Business & Financial Services
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg text-gray-200 mb-4 sm:mb-6 max-w-xl drop-shadow-md"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
              Starlinkbiz streamlines your UAE business journey with expert solutions tailored to your goals. From business registration to regulatory compliance, we provide seamless, efficient services to help you thrive in a dynamic market.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8"
            >
              {[
                { num: "01", text: "Comprehensive Business Solutions" },
                { num: "02", text: "Expert Consulting Services" },
                { num: "03", text: "24/7 Customer Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
                >
                  <span className="text-primary font-bold text-xs sm:text-sm">{item.num}</span>
                  <span className="text-white text-xs sm:text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10"
            >
              <Button href="/contact" size="lg" className="w-full sm:w-auto justify-center">
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto justify-center">
                Explore Services
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-dark/50 backdrop-blur-sm rounded-xl p-3 sm:p-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-primary bg-gray-600 overflow-hidden"
                    >
                      <Image
                        src={`https://images.unsplash.com/photo-150${i}003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face`}
                        alt="Client"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-white text-xs sm:text-sm font-medium">800+ Happy Clients</span>
              </div>
              <div className="h-px w-full sm:h-8 sm:w-px bg-gray-500"></div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 sm:w-5 h-4 sm:h-5 text-primary fill-primary"
                    />
                  ))}
                </div>
                <span className="text-white text-xs sm:text-sm font-medium">Google Reviews</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Why UAE Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-dark/80 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Why Choose <span className="text-primary">UAE</span>?
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: "🌍", text: "Strategic Global Trading Hub" },
                    { icon: "✓", text: "100% Foreign Ownership" },
                    { icon: "💰", text: "Zero Personal Income Tax" },
                    { icon: "🏗️", text: "World-Class Infrastructure" },
                    { icon: "🛡️", text: "Stable & Safe Environment" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm">
                        {item.icon === "✓" ? <CheckCircle className="w-4 h-4 text-primary" /> : item.icon}
                      </span>
                      <span className="text-white">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-primary text-dark px-4 py-2 rounded-full font-bold text-sm"
              >
                Free Consultation
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
