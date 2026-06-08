"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, utm_campaign: "homepage_hero" }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("You're on the list!");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="block text-sm font-semibold tracking-widest text-brand-500 uppercase mb-6">
            Indonesian Real Estate Investing
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            Invest in Indonesia
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold text-brand-500 leading-[1.15] tracking-tight">
            with confidence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed"
        >
          Market analysis, foreign ownership rules, rental yields, and where to
          buy — from someone investing on the ground in Bali. Get the insights
          most investors learn the hard way, straight to your inbox.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex items-center w-full max-w-md mx-auto bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              required
              className="flex-1 px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 bg-transparent outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-6 py-3 text-sm font-bold text-white bg-accent-500 rounded-full mr-1 hover:bg-accent-600 transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {status === "loading"
                ? "..."
                : status === "success"
                  ? "You're In!"
                  : "Get the Newsletter"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-3 text-sm font-medium ${status === "success" ? "text-green-600" : "text-red-500"}`}
            >
              {message}
            </p>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-sm text-gray-400"
        >
          Free. Indonesia property insights, no spam.
        </motion.p>
      </div>
    </section>
  );
}
