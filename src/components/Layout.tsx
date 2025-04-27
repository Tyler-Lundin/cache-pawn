"use client";
import Navbar from './Navbar';
import BackgroundTint from './BackgroundTint';
import ParallaxBackground from './ParallaxBackground';
import Footer from './Footer';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white/50 to-blue-300/50">
      <ParallaxBackground />
      <BackgroundTint />
      <Navbar />
      
      <main className="max-w-7xl mx-auto bg-white/30 backdrop-blur-[1px] md:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 