"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { ArrowRight, CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { serviceCategories } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Dynamic icon component
const DynamicIcon = ({ name }: { name: string }) => {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return IconComponent ? <IconComponent className="w-10 h-10" /> : null;
};

export default function ServiceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = serviceCategories[activeIndex];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="What We Offer"
          subtitle="Comprehensive business setup solutions tailored to your needs"
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Swiper Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Swiper
              modules={[EffectCards, Pagination, Navigation]}
              effect="cards"
              grabCursor={true}
              cardsEffect={{
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
              className="!w-[300px] md:!w-[400px] mx-auto pb-12"
            >
              {serviceCategories.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                    {/* Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                        service.color === "primary" ? "bg-primary text-dark" :
                        service.color === "secondary" ? "bg-secondary text-white" :
                        "bg-accent text-white"
                      }`}>
                        <DynamicIcon name={service.icon} />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swipe Hint */}
            <p className="text-center text-gray-500 text-sm mt-4">
              Swipe or use arrows to explore services
            </p>
          </motion.div>

          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    activeService.color === "primary" ? "bg-primary/10 text-primary" :
                    activeService.color === "secondary" ? "bg-secondary/10 text-secondary" :
                    "bg-accent/10 text-accent"
                  }`}>
                    <DynamicIcon name={activeService.icon} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-dark">
                      {activeService.title}
                    </h3>
                    <p className="text-gray-500">Service Category</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg mb-8">
                  {activeService.description}
                </p>

                {/* Services List */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h4 className="font-semibold text-dark mb-4">Services Included:</h4>
                  <ul className="space-y-3">
                    {activeService.services.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button href={`/services#${activeService.id}`} variant="outline">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Service Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-3 mt-12"
        >
          {serviceCategories.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                idx === activeIndex
                  ? "bg-primary text-dark"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {service.title}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
