import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Fast Cache Pawn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast Cache Pawn has been serving the Logan community for over 20 years. 
            We pride ourselves on providing fair and honest service to all our customers.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We strive to provide the best pawn services in Cache Valley, offering fair prices 
              and excellent customer service. Whether you need a short-term loan or want to buy 
              quality items at great prices, we&apos;re here to help.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Honesty and transparency in all transactions</li>
              <li>• Fair pricing for both buying and selling</li>
              <li>• Excellent customer service</li>
              <li>• Community involvement and support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 