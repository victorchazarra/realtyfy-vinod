"use client";

import { motion } from "framer-motion";

const topics = [
  {
    icon: "🏝️",
    title: "Where to buy",
    body: "Bali, Jakarta, and the emerging regions worth watching — what's overpriced, what's undervalued, and why.",
  },
  {
    icon: "📜",
    title: "Ownership rules",
    body: "How foreigners can legally own and control property in Indonesia — leasehold, Hak Pakai, and PT PMA structures explained.",
  },
  {
    icon: "📈",
    title: "Yields & returns",
    body: "Realistic rental yields, occupancy rates, and ROI — the numbers behind villas, apartments, and land.",
  },
  {
    icon: "🛡️",
    title: "Due diligence",
    body: "How to verify titles, vet developers, and avoid the scams and pitfalls that catch first-time foreign investors.",
  },
  {
    icon: "🧭",
    title: "On-the-ground reality",
    body: "Insights from someone actually investing in the market — not recycled headlines or brochure promises.",
  },
  {
    icon: "✉️",
    title: "Straight to your inbox",
    body: "Market updates and new analysis delivered to the Realtyfy newsletter, so you stay ahead without the noise.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-24 sm:pb-32 bg-brand-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
        >
          What Realtyfy Covers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-16"
        >
          Everything you need to invest in Indonesian real estate without
          guessing — explained clearly, from the ground up.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-200"
            >
              <span className="text-3xl">{topic.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {topic.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
