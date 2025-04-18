import { BackButton } from '@/components/BackButton';
import ParallaxBackground from '@/components/ParallaxBackground';
import PageHero from '@/components/PageHero';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white/90">
      <ParallaxBackground />
      <BackButton />

      <PageHero 
        title="Privacy Policy"
        subtitle="Your privacy is very important to us"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Your privacy is very important to us. This policy explains how we collect, use, and protect your personal information.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>We identify the purposes for which information is being collected at or before the time of collection.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>We collect and use personal information solely to fulfill those purposes and for related uses, unless we obtain your consent or are required by law.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>We retain personal information only as long as needed to fulfill those purposes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>We collect personal data lawfully and fairly, and where appropriate, with your knowledge or consent.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>We aim to keep personal data relevant, accurate, and up to date for its intended purpose.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>We safeguard your personal information against unauthorized access, loss, misuse, or alteration using reasonable security measures.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>We provide information about our privacy policies and practices upon request.</span>
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-12">Cookies & Tracking</h2>
            <p className="text-gray-600">
              Our website may use cookies or similar technologies to enhance user experience and analyze traffic. You can adjust your browser settings to disable cookies if you prefer.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">Third-Party Services</h2>
            <p className="text-gray-600">
              We may use third-party services (such as analytics or hosting providers) that collect, monitor, or process data on our behalf. These services are contractually obligated to handle your data responsibly.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">Your Rights</h2>
            <p className="text-gray-600">
              You have the right to request access to your personal data, ask for corrections, or request deletion of your information. You may also opt out of communications or data collection where applicable. To exercise these rights, contact us using the details below.
            </p>

            <p className="text-gray-600 mt-8">
              We are committed to protecting your privacy and operating in compliance with applicable data protection laws.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our Privacy Policy or wish to exercise your privacy rights, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Privacy Officer<br />
                Fast Cache Pawn<br />
                527 Main St<br />
                Logan, UT 84321<br />
                Phone: 435-753-2316<br />
                Email: info@fastcachepawn.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
