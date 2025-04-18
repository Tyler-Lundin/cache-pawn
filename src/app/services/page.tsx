import Services from '@/components/Services';
import { BackButton } from '@/components/BackButton';
import ParallaxBackground from '@/components/ParallaxBackground';
import PageHero from '@/components/PageHero';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white/90">
      <ParallaxBackground />
      <BackButton />

      <PageHero 
        title="Our Services"
        subtitle="Comprehensive pawn and loan services to meet your needs"
      />

      {/* Services Grid */}
      <Services />

      {/* Additional Services Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                How Our Services Work
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Fast Cache Pawn, we offer a variety of services to help you get the cash you need quickly and easily. 
                Our process is simple, transparent, and designed with your convenience in mind.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-600">Quick and confidential loan processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-600">Competitive rates and fair evaluations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-600">Flexible repayment options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-600">Professional and friendly service</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We pride ourselves on providing exceptional service and building long-term relationships with our customers. 
                Our experienced staff is here to help you find the best solution for your needs.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-4">
                  Visit our store or contact us today to learn more about our services and how we can help you.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 