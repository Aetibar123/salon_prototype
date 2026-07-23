'use client';

import { BLOG_POSTS } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-balance">Beauty & Wellness Blog</h1>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Stay updated with tips, trends, and expert advice from our team of beauty professionals
          </p>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="border border-[#e8e8e8] rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-[#f5f1e8] to-[#faf8f4] relative overflow-hidden flex items-center justify-center">
                      <div className="text-4xl font-serif text-[#d4af37]">
                        {post.title.charAt(0)}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-wider text-[#d4af37] font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#666666]">
                          {post.readTime} min read
                        </span>
                      </div>

                      <h3 className="text-lg font-serif mb-2 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-[#666666] mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#e8e8e8]">
                        <span className="text-xs text-[#666666]">
                          By {post.author}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-[#d4af37] font-medium">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
