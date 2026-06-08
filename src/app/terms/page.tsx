import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Realtyfy",
  description: "Realtyfy terms of service — rules and guidelines for using our website and newsletter.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link href="/" className="text-sm text-brand-500 hover:text-brand-700 font-medium">
            &larr; Back to Home
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: June 2026
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing and using Realtyfy (the &ldquo;Site&rdquo;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. About Realtyfy
            </h2>
            <p className="text-gray-600 mb-2">
              Realtyfy is a content and media website that publishes articles, guides, and a newsletter about investing in Indonesian real estate. The Site provides:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Editorial articles and market analysis</li>
              <li>Guides on property ownership, structures, and due diligence</li>
              <li>An optional email newsletter you can subscribe to</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Realtyfy does not sell property, broker transactions, or provide brokerage services.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 3 — the important one for investment content */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. No Investment, Legal, or Tax Advice
            </h2>
            <p className="text-gray-600 mb-2">
              All content on Realtyfy is provided for general informational and educational purposes only. It does not constitute investment advice, legal advice, tax advice, or a recommendation to buy, sell, or hold any property or asset.
            </p>
            <p className="text-gray-600 mb-2">
              Real estate laws, ownership rules, taxes, and market conditions in Indonesia change and vary by region and individual circumstance. Before making any investment or property decision, you should consult a licensed Indonesian notary (PPAT), legal counsel, and a qualified tax advisor.
            </p>
            <p className="text-gray-600">
              You are solely responsible for your own decisions. Realtyfy and its author make no guarantee regarding returns, yields, or outcomes described in any article.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Acceptable Use
            </h2>
            <p className="text-gray-600 mb-2">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the Site or its infrastructure</li>
              <li>Interfere with or disrupt the Site</li>
              <li>Republish or redistribute Site content without permission</li>
              <li>Use automated means to scrape or copy content beyond normal browsing</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Newsletter
            </h2>
            <p className="text-gray-600">
              If you subscribe to the Realtyfy newsletter, you consent to receive periodic emails. You can unsubscribe at any time using the link in any email. Newsletter delivery is handled by a third-party email provider as described in our{" "}
              <Link href="/privacy" className="text-brand-500 hover:text-brand-700">Privacy Policy</Link>.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600">
              The Site and its content (articles, images, and design) are owned by Realtyfy and protected by applicable intellectual property laws. You may share links to articles, but you may not copy or republish substantial portions without written permission.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Third-Party Links
            </h2>
            <p className="text-gray-600">
              Articles may link to third-party websites for reference. Realtyfy is not responsible for the content, accuracy, or practices of any third-party site.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Realtyfy and its author shall not be liable for any indirect, incidental, special, or consequential damages, including any losses arising from decisions made based on Site content. Your use of the Site is at your own risk.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Changes to These Terms
            </h2>
            <p className="text-gray-600">
              We may update these Terms from time to time. Material changes will be reflected by updating the &ldquo;Last updated&rdquo; date above. Your continued use of the Site after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Contact
            </h2>
            <p className="text-gray-600 mb-2">
              If you have questions about these Terms, please contact us at:
            </p>
            <ul className="list-none text-gray-600 space-y-1">
              <li><strong>Email:</strong> hello@fanconvert.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
