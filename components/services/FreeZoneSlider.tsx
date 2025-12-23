"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { MapPin, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { freeZones } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function FreeZoneSlider() {
  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          badge="Free Zones"
          title="Compare UAE Free Zones"
          subtitle="Find the perfect free zone for your business with our comprehensive comparison"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="pb-16 !overflow-visible"
          >
            {freeZones.map((zone, index) => (
              <SwiperSlide key={zone.id} className="!w-[320px] md:!w-[380px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                    {/* Image Header */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={zone.image}
                        alt={zone.fullName}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />

                      {/* Zone Name Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-primary text-dark font-bold rounded-full text-sm">
                          {zone.name}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold text-lg">{zone.fullName}</p>
                        <div className="flex items-center gap-1 text-gray-300 text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          {zone.location}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Key Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <p className="text-xs text-gray-500 mb-1">Cost</p>
                          <p className="font-bold text-dark text-sm">{zone.minCost}</p>
                        </div>
                        <div className="text-center border-x border-gray-200">
                          <p className="text-xs text-gray-500 mb-1">Visas</p>
                          <p className="font-bold text-dark text-sm">{zone.visaQuota}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-500 mb-1">Setup</p>
                          <p className="font-bold text-dark text-sm">{zone.setupTime}</p>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-2 mb-6">
                        {zone.benefits.slice(0, 3).map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Ideal For Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {zone.idealFor.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-dark text-white rounded-xl font-semibold hover:bg-primary hover:text-dark transition-all group"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Compare All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 mb-4">
            Not sure which free zone is right for you?
          </p>
          <Button href="/contact">
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
