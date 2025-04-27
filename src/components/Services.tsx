const Services = () => {
  const services = [
    { name: 'Pawn Shop', icon: '💰', href: '/services/pawn-shop' },
    { name: 'Loans', icon: '💵', href: '/services/loans' },
    { name: 'Guitars', icon: '🎸', href: '/services/guitars' },
    { name: 'Cash Loans', icon: '💲', href: '/services/cash-loans' },
    { name: 'Jewelry', icon: '💎', href: '/services/jewelry' },
    { name: 'Guns', icon: '🔫', href: '/services/guns' },
    { name: 'Gold Dealer', icon: '🥇', href: '/services/gold-dealer' },
    { name: 'Car Title Loans', icon: '🚗', href: '/services/car-title-loans' },
    { name: 'Pawnbrokers', icon: '🤝', href: '/services/pawnbrokers' },
    { name: 'Title Loans', icon: '📄', href: '/services/title-loans' }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white/90 backdrop-blur-sm">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-amber-500">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fast, fair, and reliable. Get cash, gear, or gold — whatever you need, when you need it.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative aspect-square flex flex-col justify-center items-center rounded-xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-300 hover:from-amber-300 hover:to-amber-500 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
              {service.icon}
            </div>

            {/* Service Name */}
            <h3 className="text-sm font-bold text-gray-800 group-hover:text-black uppercase tracking-wide text-center px-2">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
