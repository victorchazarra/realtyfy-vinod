"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function ReferralSection() {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    const email = params.get("email");

    if (ref) {
      setReferralCode(ref);
      setLoading(false);
    } else if (email) {
      // Fetch referral code from API if not in URL
      fetch(`/api/referral-code?email=${encodeURIComponent(email)}`)
        .then(r => r.json())
        .then(data => {
          if (data.referral_code) setReferralCode(data.referral_code);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading || !referralCode) return null;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://realtyfy.com";
  const referralLink = `${siteUrl}/newsletter?ref=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-[520px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          Share <span className="text-brand-500">Realtyfy</span> with a friend
        </h2>
        <p className="text-base text-gray-500 mb-6">
          Know someone investing in Indonesia? Share your link and help us grow.
        </p>

        <div className="flex items-center gap-2 max-w-md mx-auto mb-4">
          <input
            type="text"
            readOnly
            value={referralLink}
            className="flex-1 px-4 py-3 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-full outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-6 py-3 text-sm font-bold text-white bg-accent-500 rounded-full hover:bg-accent-600 transition-colors whitespace-nowrap"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-[13px] text-gray-400">
          The more friends who join, the more exclusive content you unlock.
        </p>
      </div>
    </div>
  );
}

// The Lead — Thank You page with welcome video + survey cards + popup
export default function ThankYouPage() {
  // Push conversion event to GTM dataLayer
  useEffect(() => {
    window.dataLayer?.push({ event: "newsletter_signup" });
  }, []);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleCardClick = async (tag: string) => {
    if (hasVoted) return;
    setSelectedCard(tag);
    setHasVoted(true);

    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    if (email) {
      try {
        await fetch("/api/beehiiv-tag", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, tag }),
        });
      } catch (e) {
        console.error("Tag failed:", e);
      }
    }
  };

  const closePopup = () => setSelectedCard(null);

  return (
    <>
      {/* SECTION 1: Welcome + Survey cards (grey background) */}
      <div className="bg-gray-100 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-medium tracking-wide text-brand-500 uppercase mb-6">
            Realtyfy
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Welcome to <span className="text-brand-500">Realtyfy</span>!
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mb-10">
            Indonesian real estate investing insights, from an investor in Bali.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            What are you most interested in?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[560px] mx-auto mb-6">
            <button
              onClick={() => handleCardClick("optin-buying")}
              className={`rounded-2xl p-7 text-center ${hasVoted ? 'bg-white cursor-default' : 'bg-white hover:bg-brand-500 hover:-translate-y-0.5 cursor-pointer transition-all group shadow-sm'}`}
              disabled={hasVoted}
            >
              <div className="text-2xl mb-3">🏝️</div>
              <div className="text-[15px] font-semibold text-gray-900 group-hover:text-white mb-1">Buying a villa</div>
              <div className="text-[13px] text-gray-400 group-hover:text-brand-100 italic">&quot;A home or holiday place&quot;</div>
            </button>

            <button
              onClick={() => handleCardClick("optin-investing")}
              className={`rounded-2xl p-7 text-center ${hasVoted ? 'bg-white cursor-default' : 'bg-white hover:bg-brand-500 hover:-translate-y-0.5 cursor-pointer transition-all group shadow-sm'}`}
              disabled={hasVoted}
            >
              <div className="text-2xl mb-3">📈</div>
              <div className="text-[15px] font-semibold text-gray-900 group-hover:text-white mb-1">Rental income</div>
              <div className="text-[13px] text-gray-400 group-hover:text-brand-100 italic">&quot;Yields and ROI&quot;</div>
            </button>

            <button
              onClick={() => handleCardClick("optin-legal")}
              className={`rounded-2xl p-7 text-center ${hasVoted ? 'bg-white cursor-default' : 'bg-white hover:bg-brand-500 hover:-translate-y-0.5 cursor-pointer transition-all group shadow-sm'}`}
              disabled={hasVoted}
            >
              <div className="text-2xl mb-3">📜</div>
              <div className="text-[15px] font-semibold text-gray-900 group-hover:text-white mb-1">Ownership &amp; law</div>
              <div className="text-[13px] text-gray-400 group-hover:text-brand-100 italic">&quot;How foreigners can buy&quot;</div>
            </button>

            <button
              onClick={() => handleCardClick("optin-exploring")}
              className={`rounded-2xl p-7 text-center ${hasVoted ? 'bg-white cursor-default' : 'bg-white hover:bg-brand-500 hover:-translate-y-0.5 cursor-pointer transition-all group shadow-sm'}`}
              disabled={hasVoted}
            >
              <div className="text-2xl mb-3">🧭</div>
              <div className="text-[15px] font-semibold text-gray-900 group-hover:text-white mb-1">Just exploring</div>
              <div className="text-[13px] text-gray-400 group-hover:text-brand-100 italic">&quot;A bit of everything&quot;</div>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: Referral share (white background) */}
      <ReferralSection />

      {/* What to expect */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-[520px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            You&apos;ll get market analysis, ownership guidance, and real numbers on investing in Indonesian real estate — straight from the ground in Bali.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Keep an eye on your email. The first issue is coming soon.
          </p>
          <p className="text-[13px] text-gray-400">
            Quick reads. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Dark footer */}
      <div className="bg-[#3a3a3a] py-12 sm:py-16 text-center">
        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">
          Realtyfy
        </p>
        <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
          Invest in Indonesia<br />with <span className="text-brand-400">confidence</span>.
        </p>
        <p className="mt-4 text-[15px] text-gray-300 leading-relaxed">
          Real analysis from the ground in Bali.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="/privacidad" className="text-xs text-gray-400 hover:text-gray-300 transition-colors">Privacidad</a>
          <a href="/aviso-legal" className="text-xs text-gray-400 hover:text-gray-300 transition-colors">Aviso legal</a>
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closePopup}
        >
          {/* Blur backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Popup box */}
          <div
            className="relative bg-white rounded-3xl px-10 py-12 max-w-md mx-4 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-5">🎉</div>
            <h3 className="text-2xl font-bold text-brand-500 mb-6">
              Got it!
            </h3>
            <p className="text-base text-gray-900 leading-relaxed mb-6">
              Now check your inbox.
            </p>
            <p className="text-base text-gray-900 leading-relaxed mb-1">
              Reply with your biggest question about investing in Indonesia.
            </p>
            <p className="text-base text-gray-900 leading-relaxed">
              Victor reads every reply.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
