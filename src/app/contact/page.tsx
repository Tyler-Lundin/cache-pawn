'use client';

import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero */}
      <PageHero 
        title="Contact Fast Cache Pawn" 
        subtitle="Real Deals. Real Fast. Serving Logan for Over 20 Years."
      />

      {/* Contact Content */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Form Side */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <InputField id="name" label="Name" placeholder="Your full name" />
              <InputField id="email" label="Email" type="email" placeholder="your@email.com" />
              <TextAreaField id="message" label="Message" placeholder="How can we help you?" />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 text-black font-bold uppercase tracking-wider py-4 rounded-xl shadow-md hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Details Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Visit Our Store
              </h2>

              {/* Location */}
              <DetailItem 
                title="Address" 
                content="527 Main St, Logan, UT 84321" 
                icon="📍"
              />

              {/* Phone */}
              <DetailItem 
                title="Phone" 
                content="(435) 753-2316" 
                icon="📞"
              />

              {/* Email */}
              <DetailItem 
                title="Email" 
                content="info@fastcachepawn.com" 
                icon="✉️"
              />

              {/* Business Summary */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  What We Offer
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Jewelry, guitars, electronics, and fast cash loans.  
                  Over 3,300+ happy customers — and counting.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Business Hours
              </h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md space-y-3">
                <BusinessHour day="Monday - Friday" hours="10:00 AM - 5:00 PM" />
                <BusinessHour day="Saturday" hours="10:00 AM - 4:00 PM" />
                <BusinessHour day="Sunday" hours="Closed" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

/* --- Smaller Reusable Pieces --- */

function InputField({ id, label, type = 'text', placeholder }: { id: string, label: string, type?: string, placeholder: string }) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white/90"
      />
    </div>
  );
}

function TextAreaField({ id, label, placeholder }: { id: string, label: string, placeholder: string }) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        id={id}
        name={id}
        rows={4}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white/90"
      />
    </div>
  );
}

function DetailItem({ title, content, icon }: { title: string, content: string, icon: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

function BusinessHour({ day, hours }: { day: string, hours: string }) {
  return (
    <div className="flex justify-between text-gray-700">
      <span>{day}</span>
      <span className="font-semibold text-gray-900">{hours}</span>
    </div>
  );
}
