import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';
import { Roboto_Serif } from "next/font/google";
import { Poster } from './Props';
const font = Roboto_Serif({
  weight: ['400'],
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <section className="w-full md:border-1 md:border-b-0 md:border-black min-h-[calc(100vh-100px)] bg-gradient-to-br from-amber-500 to-amber-200 flex items-center justify-center px-4 py-6 md:py-12">
      <AnimatedBackground>
      <div className="w-full max-w-6xl overflow-hidden p-6 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <h1
            style={font.style}
            className="md:hidden inline-block text-4xl font-bold text-amber-900 text-center    leading-tight"
          >
            Your Trusted Pawn Shop
          </h1>
        {/* Poster Image */}
        <Poster />

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1
            style={font.style}
            className="hidden md:inline-block text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your 
            <br />
            Trusted 
            <br />
            Pawn Shop
          </h1>
          <hr className="w-full border-t border-black mb-6 hidden md:block" />
          <p className="text-lg sm:text-xl text-gray-800 mb-6 leading-relaxed">
            Serving Logan, Utah for over 20 years. Fast cash loans, jewelry, musical instruments, electronics, and more.
          </p>
          <div className="flex flex-col gap-4 justify-center md:justify-start">
            <ServicesButton />
            <ContactButton />
          </div>
        </div>

      </div>
      </AnimatedBackground>

    </section>
  );
};

export default Hero;

function ContactButton() {
  return(
    <Link
    href="/contact"
    className="group relative px-8 py-4 bg-white/50 text-amber-900 font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
  >
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    
    {/* Border animation */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute inset-[4px] rounded-full bg-white/75" />
    
    {/* Content */}
    <span className="relative flex justify-center items-center gap-2 text-xl group-hover:scale-x-105 transition-all duration-300">

      <span className="text-2xl">📞</span>
      Contact Us
      <svg 
        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </Link>
  )
}

function ServicesButton() {
  return(
    <Link
    href="/services"
    className="group relative px-8 py-4 bg-white/50 text-gray-900 font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
  >
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    
    {/* Border animation */}
    <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute inset-[4px] rounded-full bg-white/75" />
    
    {/* Content */}
    <span className="relative flex justify-center items-center gap-2 text-xl group-hover:scale-x-105 transition-all duration-300">
      <span className="text-2xl">💰</span>
      <span className="text-xl font-bold transition-all duration-300">Our Services</span>
      <svg 
        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </Link>
  )
}