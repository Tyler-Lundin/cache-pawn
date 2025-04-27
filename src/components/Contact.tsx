'use client';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Get in <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Questions? Need a quote? Ready to make a deal?  
            Reach out — we&apos;re ready to help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactCard
            icon="📞"
            title="Phone"
            description="Call us directly — fast answers, real people."
            link={{
              href: "tel:4357532316",
              text: "(435) 753-2316",
            }}
          />
          <ContactCard
            icon="📍"
            title="Address"
            description="Drop by our Logan location. Deals happen fast."
            link={{
              href: "https://maps.google.com/?q=527+Main+St+Logan+UT+84321",
              text: "View on Map",
            }}
          >
            <p className="text-gray-600">527 Main St</p>
            <p className="text-gray-600">Logan, UT 84321</p>
          </ContactCard>
          <ContactCard
            icon="⏰"
            title="Business Hours"
            description="Come see us — walk-ins welcome anytime."
          >
            <div className="space-y-1 text-gray-600">
              <p>Mon-Fri: 10:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </ContactCard>
        </div>

      </div>
    </section>
  );
};

export default Contact;

/* --- Smaller Reusable Pieces --- */

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  link?: { href: string; text: string };
  children?: React.ReactNode;
}
function ContactCard({ icon, title, description, link, children }: ContactCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* Hover Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-red-600/0 group-hover:from-amber-500/5 group-hover:to-red-600/5 transition-all duration-300 z-0" />

      {/* Main Card Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-8 space-y-6 text-center">

        {/* Top Section */}
        <div className="space-y-4">
          {/* Icon */}
          <div className="text-5xl">{icon}</div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>

          {/* Description */}
          <p className="text-gray-600">{description}</p>

          {/* Optional Child Content (like address lines or hours) */}
          {children}
        </div>

        {/* Bottom Section */}
        {link && (
          <a
            href={link.href}
            target={link.href.startsWith('http') ? "_blank" : undefined}
            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-1 text-amber-600 font-semibold hover:text-amber-700 transition-colors mt-4"
          >
            {link.text}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 3h7m0 0v7m0-7L10 14"
              />
            </svg>
          </a>
        )}

      </div>
    </div>
  );
}
