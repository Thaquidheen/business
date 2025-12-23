"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { milestones } from "@/lib/data";

export default function OurStory() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6">
              Two Decades of Excellence in Business Setup
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a vision to simplify business setup in the UAE, we have
                grown into one of the region&apos;s most trusted consultancy firms.
                With over two decades of experience, we&apos;ve helped thousands of
                entrepreneurs transform their business dreams into reality.
              </p>
              <p>
                Our deep understanding of UAE regulations, combined with strong
                government relationships, enables us to deliver efficient, compliant
                solutions for businesses of all sizes. From startups to multinational
                corporations, we provide tailored guidance every step of the way.
              </p>
              <p>
                Today, we continue to innovate and adapt to the ever-evolving
                business landscape, ensuring our clients receive the most current
                and effective solutions for their business setup needs.
              </p>
            </div>
          </motion.div>

          {/* Image & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                  alt="Our Team"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              {/* Timeline Card */}
              <div className="absolute -bottom-8 -left-8 bg-white border border-gray-100 rounded-xl shadow-2xl p-6 max-w-xs">
                <h4 className="font-display text-lg font-bold text-dark mb-4">
                  Our Journey
                </h4>
                <div className="space-y-3">
                  {milestones.slice(0, 3).map((milestone, index) => (
                    <div key={milestone.year} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-dark font-bold text-sm">
                        {milestone.year}
                      </div>
                      <span className="text-gray-600 text-sm">{milestone.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
