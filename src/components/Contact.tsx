const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get in <span className="text-amber-500">Touch</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We&apos;re here to help! Reach out to us through any of the following methods.
        </p>
        <p className="text-gray-600">Don&apos;t hesitate to reach out!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-red-600/0 group-hover:from-amber-500/5 group-hover:to-red-600/5 transition-all duration-300"></div>
          <div className="relative p-8">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              📞
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <a 
              href="tel:4357532316" 
              className="text-amber-600 hover:text-amber-700 text-lg font-medium transition-colors"
            >
              (435) 753-2316
            </a>
          </div>
        </div>

        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-red-600/0 group-hover:from-amber-500/5 group-hover:to-red-600/5 transition-all duration-300"></div>
          <div className="relative p-8">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              📍
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">527 Main St</p>
            <p className="text-gray-600">Logan, UT 84321</p>
            <a 
              href="https://maps.google.com/?q=527+Main+St+Logan+UT+84321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
            >
              View on Map
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-red-600/0 group-hover:from-amber-500/5 group-hover:to-red-600/5 transition-all duration-300"></div>
          <div className="relative p-8">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              ⏰
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Monday - Wednesday: 10:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Thursday - Friday: 10:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 