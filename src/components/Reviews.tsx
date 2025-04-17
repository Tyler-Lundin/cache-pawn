interface Review {
  author: string;
  location: string;
  content: string;
  rating: number;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      author: 'Lynn',
      location: 'Rivers Heights, UT',
      content: 'Great service honest never had any problem. My grandson even likes and shops there when he needs something.',
      rating: 5
    },
    {
      author: 'Todd Christensen',
      location: 'Logan UT 84321',
      content: 'The fast cache pawn shop has treated me very well! I have been a customer there for over 20 years.',
      rating: 5
    },
    {
      author: 'Kodi Perkins',
      location: 'Logan Utah',
      content: 'They have been the best pawn shop! They seriously have been there when needed the most!',
      rating: 5
    },
    {
      author: 'Jeff',
      location: 'Logan, Utah',
      content: 'Best pawn shop in the valley hands down!',
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Customer <span className="text-amber-500">Reviews</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear what our customers have to say about their experience with Fast Cache Pawn.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-red-600/0 group-hover:from-amber-500/5 group-hover:to-red-600/5 transition-all duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{review.author}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-600 leading-relaxed">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews; 