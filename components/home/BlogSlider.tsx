"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BlogSlider() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          badge="Latest Insights"
          title="Business News & Resources"
          subtitle="Stay informed with our expert guides and UAE business updates"
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
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 h-full">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-dark text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-4"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
