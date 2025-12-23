"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Dynamic icon component
const DynamicIcon = ({ name }: { name: string }) => {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
};

export default function ServicesSlider() {
  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Business Solutions"
          subtitle="End-to-end services tailored to your business needs in UAE"
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
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
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
            {services.map((service, index) => (
              <SwiperSlide key={service.title} className="!w-[320px] md:!w-[380px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full border border-gray-100">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-dark transition-all duration-300 group-hover:scale-110">
                        <DynamicIcon name={service.icon} />
                      </div>

                      {/* Content */}
                      <h3 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
