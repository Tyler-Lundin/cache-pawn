'use client';

import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>

      {/* Hero */}
      <PageHero 
        title="Privacy Policy"
        subtitle="Your trust matters. Here's how we protect it."
      />

      {/* Policy Content */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col space-y-16">

          {/* Intro */}
          <div className="space-y-6 text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              At Fast Cache Pawn, your privacy isn&apos;t just a policy — it&apos;s a priority.  
              Here&apos;s how we protect your information, keep it confidential, and operate with transparency.
            </p>
          </div>

          {/* Main Policy Points */}
          <div className="space-y-10">
            <SectionTitle title="How We Handle Your Information" />
            <ul className="space-y-4">
              {[
                "We collect information only for specific, clear purposes.",
                "We use your data only for what we told you — nothing else.",
                "We store personal info only as long as needed, not forever.",
                "We collect everything lawfully, fairly, and with your knowledge.",
                "We work to keep your info accurate and updated.",
                "We protect your data from unauthorized access or loss.",
                "We explain our practices clearly if you ever ask.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-amber-500 text-xl leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cookies */}
          <div className="space-y-6">
            <SectionTitle title="Cookies & Tracking" />
            <p className="text-gray-700 leading-relaxed">
              We use cookies to help you have a smoother experience on our site and to understand how people use it.  
              If you prefer not to allow cookies, you can always change your browser settings.
            </p>
          </div>

          {/* Third Parties */}
          <div className="space-y-6">
            <SectionTitle title="Third-Party Services" />
            <p className="text-gray-700 leading-relaxed">
              Sometimes we work with trusted partners (like analytics and hosting providers).  
              They handle your data responsibly under strict agreements.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-6">
            <SectionTitle title="Your Rights" />
            <p className="text-gray-700 leading-relaxed">
              You have the right to see what data we have, fix it if it&apos;s wrong, or ask us to delete it.  
              You can also opt out of certain communications anytime.
            </p>
          </div>

          {/* Contact Box */}
          <div className="p-8 bg-white/90 rounded-xl shadow-md space-y-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Need to Reach Us?
            </h2>
            <p className="text-gray-700">
              Questions about your privacy? Want to make a request?  
              We&apos;re here to help.
            </p>
            <div className="text-gray-700 mt-4 space-y-1">
              <p>Privacy Officer, Fast Cache Pawn</p>
              <p>527 Main St, Logan, UT 84321</p>
              <p>Phone: (435) 753-2316</p>
              <p>Email: info@fastcachepawn.com</p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

/* --- Small reusable --- */

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4">
      {title}
    </h2>
  );
}
