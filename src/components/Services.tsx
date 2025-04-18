const Services = () => {
  const services = [
    { name: 'Pawn Shop', icon: '💰' },
    { name: 'Loans', icon: '💵' },
    { name: 'Guitars', icon: '🎸' },
    { name: 'Cash Loans', icon: '💲' },
    { name: 'Jewelry', icon: '💎' },
    { name: 'Guns', icon: '🔫' },
    { name: 'Gold Dealer', icon: '🥇' },
    { name: 'Car Title Loans', icon: '🚗' },
    { name: 'Pawnbrokers', icon: '🤝' },
    { name: 'Title Loans', icon: '📄' }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white/75 backdrop-blur-[1px]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-amber-500">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of services to meet your needs. Whether you&apos;re looking to pawn, buy, or get a loan, we&apos;ve got you covered.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative h-48 flex flex-col justify-center items-center rounded-2xl overflow-hidden"
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl" />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Content */}
            <div className="relative p-6 text-center">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                Professional service with competitive rates
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 