'use client';

import PageHero from '@/components/PageHero';
import ServicesGrid from '@/components/ServicesGrid';
import Layout from '@/components/Layout';

export default function ServicesPage() {
  return (
    <Layout>
      <PageHero 
        title="Our Services"
        subtitle="Comprehensive pawn and loan services to meet your needs"
      />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Additional Info */}
      <AdditionalServicesInfo />
    </Layout>
  );
}

/* --- Child Components --- */



function AdditionalServicesInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">

          {/* How Our Services Work */}
          <HowServicesWork />

          {/* Why Choose Us */}
          <WhyChooseUs />

        </div>
      </div>
    </section>
  );
}

function HowServicesWork() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">
        How Our Services Work
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        At Fast Cache Pawn, we offer a variety of services to help you get the cash you need quickly and easily. 
        Our process is simple, transparent, and designed with your convenience in mind.
      </p>
      <ul className="space-y-4">
        {[
          "Quick and confidential loan processing",
          "Competitive rates and fair evaluations",
          "Flexible repayment options",
          "Professional and friendly service",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-amber-500 mr-2">✓</span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">
        Why Choose Us
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        We pride ourselves on providing exceptional service and building long-term relationships with our customers. 
        Our experienced staff is here to help you find the best solution for your needs.
      </p>
      <CallToAction />
    </div>
  );
}

function CallToAction() {
  return (
    <div className="relative bg-black rounded-xl p-8 shadow-2xl overflow-hidden text-center">
      {/* Flashy background flare */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-red-600/10 opacity-40 pointer-events-none" />

      <h3 className="text-3xl font-bold text-amber-400 mb-4 uppercase tracking-wider">
        Need Cash Fast?
      </h3>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Walk in today — walk out with cash in your hand.  
        No waiting. No gimmicks. Just fair deals and fast service.
      </p>

      <a 
        href="/contact" 
        className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:scale-105 hover:brightness-110 transition-all"
      >
        Get Cash Now
      </a>

      {/* Decorative glowing line at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-full mt-6" />
    </div>
  );
}
