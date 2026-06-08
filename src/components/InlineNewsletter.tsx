"use client";

import { useState } from "react";

export function InlineNewsletter({ slug }: { slug?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          utm_source: "website",
          utm_medium: "organic",
          utm_campaign: slug || "blog_signup",
          tags: ["blog-signup"],
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("You're in. Check your inbox.");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  };

  const bullets = (
    <ul className="space-y-4 text-white text-base">
      <li className="flex items-start gap-3">
        <span className="text-brand-400 text-lg leading-none mt-0.5">•</span>
        <span>Indonesia property market analysis.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-brand-400 text-lg leading-none mt-0.5">•</span>
        <span>Ownership rules and real numbers.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-brand-400 text-lg leading-none mt-0.5">•</span>
        <span>No hype, no spam.</span>
      </li>
    </ul>
  );

  return (
    <div className="my-12 rounded-2xl bg-[#1f2937] px-6 py-8 sm:px-10 sm:py-10">
      <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-10">
        {/* Left side (desktop) / Top (mobile) */}
        <div className="flex-1">
          <p className="text-2xl font-bold text-white leading-snug mb-1">
            Sign up for the Realtyfy newsletter
          </p>
          <p className="text-base font-bold text-gray-200 mb-4">
            Investing in Indonesian real estate, explained.
          </p>

          {/* Bullets: mobile only, centered between headline and form */}
          <div className="md:hidden mb-6 flex justify-center">
            {bullets}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full sm:max-w-md">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              required
              aria-label="Email address"
              className="w-full px-6 py-3.5 text-base text-gray-900 placeholder-gray-400 bg-white rounded-full outline-none shadow-lg disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full py-3.5 text-base font-bold text-white bg-accent-500 rounded-full hover:bg-accent-600 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "..." : status === "success" ? "You're In!" : "Subscribe to the newsletter"}
            </button>
          </form>

          {message && (
            <p className={`mt-4 text-sm font-medium ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>

        {/* Right side: bullets, desktop only */}
        <div className="hidden md:block flex-1">
          {bullets}
        </div>
      </div>
    </div>
  );
}
