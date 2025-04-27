'use client';

import { useState, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';

const libraries: ("places")[] = ["places"];

interface Review {
  author: string;
  location: string;
  content: string;
  rating: number;
}

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

const staticReviews: Review[] = [
  {
    author: 'Todd Christensen',
    location: 'Logan, UT 84321',
    content: 'Fast Cache Pawn has treated me very well! I have been a customer there for over 20 years.',
    rating: 5,
  },
  {
    author: 'Kodi Perkins',
    location: 'Logan, UT',
    content: 'They have been the best pawn shop! They seriously have been there when needed the most!',
    rating: 5,
  },
  {
    author: 'Jeff',
    location: 'Logan, UT',
    content: 'Best pawn shop in the valley hands down!',
    rating: 5,
  },
  {
    author: 'Matthew Barraclough',
    location: 'Logan, UT',
    content: 'Brought in a guitar worth ~$600, offered $100 without even looking. Be cautious.',
    rating: 1,
  },
];

const Reviews = () => {
  const [useGoogleReviews, setUseGoogleReviews] = useState(true);
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '',
    libraries,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setUseGoogleReviews(prev => !prev);
    }, 30000);

    setTimer(interval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoaded || loadError) {
      setLoading(false);
      setError(loadError ? 'Failed to load Google Maps' : null);
      return;
    }

    const fetchReviews = async () => {
      try {
        const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
        if (!placeId) throw new Error('Place ID missing.');

        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({ placeId, fields: ['reviews'] }, (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
            const formatted = place.reviews
              .filter(r => r.rating !== undefined && r.rating >= 4)
              .map(r => ({
                author_name: r.author_name,
                author_url: r.author_url || '',
                profile_photo_url: r.profile_photo_url,
                rating: r.rating || 0,
                relative_time_description: r.relative_time_description,
                text: r.text,
              }));
            setGoogleReviews(formatted);
          } else {
            setError('No reviews found.');
          }
          setLoading(false);
        });
      } catch {
        setError('Failed to fetch Google reviews.');
        setLoading(false);
      }
    };

    if (useGoogleReviews) fetchReviews();
  }, [isLoaded, loadError, useGoogleReviews]);

  const handleToggle = () => {
    if (timer) clearInterval(timer);
    setUseGoogleReviews(prev => !prev);
    const newTimer = setInterval(() => {
      setUseGoogleReviews(prev => !prev);
    }, 30000);
    setTimer(newTimer);
  };

  return (
    <section id="reviews" className="py-24 px-6 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            real people - real deals
          </p>
          <div className="mt-8">
            <ToggleSwitch active={useGoogleReviews} onClick={handleToggle} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useGoogleReviews ? (
            loading ? (
              <div className="col-span-full flex justify-center items-center py-20">
                <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : error ? (
              <div className="col-span-full text-center text-gray-600">{error}</div>
            ) : (
              googleReviews.map((review, idx) => <ReviewCard key={idx} review={review} />)
            )
          ) : (
            staticReviews.map((review, idx) => <StaticReviewCard key={idx} review={review} />)
          )}
        </div>
      </div>
    </section>
  );
};

/* --- Smaller Reusable Pieces --- */

function ToggleSwitch({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center h-12 rounded-full w-48 bg-gray-200 hover:bg-gray-300 transition-all px-1 shadow-inner"
    >
      <div
        className={`absolute top-0 left-0 h-12 w-24 rounded-full bg-amber-500 transform transition-all duration-300 ${
          active ? 'translate-x-0' : 'translate-x-24'
        }`}
      />
      <span className={`relative z-10 w-24 text-center font-semibold ${active ? 'text-white' : 'text-gray-700'}`}>
        Google
      </span>
      <span className={`relative z-10 w-24 text-center font-semibold ${!active ? 'text-white' : 'text-gray-700'}`}>
        Static
      </span>
    </button>
  );
}
function ReviewCard({ review }: { review: GoogleReview }) {
  // Define a small brand-safe palette
  const colors = ['bg-amber-500', 'bg-red-500', 'bg-yellow-600', 'bg-gray-700'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
      <div className="flex items-center gap-4">
        {/* Randomized color avatar */}
        <div className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg ${randomColor}`}>
          {review.author_name.charAt(0)}
        </div>

        {/* Reviewer Info */}
        <div>
          <h3 className="font-bold text-gray-900">{review.author_name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`}>
                ★
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Content */}
      <p className="text-gray-700 leading-relaxed">{review.text}</p>
      <p className="text-sm text-gray-400">{review.relative_time_description}</p>
    </div>
  );
}


function StaticReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-gray-900">{review.author}</h3>
          <p className="text-sm text-gray-500">{review.location}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`}>
              ★
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{review.content}</p>
    </div>
  );
}

export default Reviews;
