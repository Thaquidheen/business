"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-dark"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden group">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:py-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{blogPosts[0].date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(activeCategory === "All" ? 1 : 0).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-dark">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{post.date}</span>
                      <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
