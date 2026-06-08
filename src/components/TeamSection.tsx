"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const team = [
  {
    name: "Victor Chazarra",
    role: "Founder, Realtyfy",
    image: "team-victor",
    linkedin: "https://www.linkedin.com/in/chazarra/",
    bio: [
      "I'm Victor. I live and invest in Bali, and I started Realtyfy to share what investing in Indonesian real estate actually looks like from the ground.",
      "Indonesia is one of the most exciting and most misunderstood property markets in the world. Foreign ownership rules confuse people, the good deals rarely make it to the listings sites, and a lot of investors lose money to avoidable mistakes.",
      "Realtyfy is where I break it down honestly — the markets, the legal structures, the real numbers, and the pitfalls — so you can invest with confidence instead of guesswork.",
    ],
  },
];

export function TeamSection() {
  const [openBio, setOpenBio] = useState<string | null>(null);
  const activeMember = team.find((m) => m.name === openBio);

  return (
    <>
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Meet Victor
          </motion.h2>

          <div className="grid grid-cols-1 max-w-sm mx-auto gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                onClick={() => setOpenBio(member.name)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-xl cursor-pointer"
              >
                {/* Photo */}
                <img
                  src={`/images/${member.image}.jpg`}
                  alt={`${member.name}, ${member.role}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Name + role */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl font-bold">{member.name}</p>
                  <p className="text-white/70 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-lg text-gray-500 italic"
          >
          Realtyfy is real talk on Indonesian property — from an investor who lives it.
          </motion.p>
        </div>
      </section>

      {/* Small modal card popup */}
      <AnimatePresence>
        {openBio && activeMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
            onClick={() => setOpenBio(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 sm:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenBio(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold leading-none"
              >
                &times;
              </button>
              <img
                src={`/images/${activeMember.image}.jpg`}
                alt={`${activeMember.name}, ${activeMember.role}`}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                {activeMember.name}
              </h3>
              <p className="text-brand-500 font-semibold text-xs uppercase tracking-wider text-center mb-8">
                {activeMember.role}
              </p>
              <div className="space-y-4 text-gray-600 text-sm leading-loose text-left">
                {activeMember.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {activeMember.linkedin && (
                <div className="mt-6 text-center">
                  <a
                    href={activeMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-500 hover:text-brand-600 font-medium"
                  >
                    LinkedIn →
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
