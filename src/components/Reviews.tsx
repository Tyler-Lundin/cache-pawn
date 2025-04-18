'use client';

import { useState, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';

interface Review {
  author: string;
  location: string;
  content: string;
  rating: number;
}

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface PlaceReview {
  Gg?: {
    Eg?: string;  // author name
    Fg?: string;  // profile photo URL
    Gg?: string;  // author URL
  };
  Ig?: number;    // rating
  Jg?: string;    // relative time
  Kg?: string;    // text
}

const libraries: ("places")[] = ["places"];

const Reviews = () => {
  const [useGoogleReviews, setUseGoogleReviews] = useState(true);
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '',
    libraries
  });

  const staticReviews: Review[] = [
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
    },
    {
      author: 'Matthew Barraclough',
      location: 'Logan, UT',
      content: "Brought in a guitar worth ~600 and he offered me $100. Less than half of the minimum I would have expected or considered and he didn't even look at the guitar. Don't sell here unless you want your intelligence insulted.",
      rating: 1
    }
  ];

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setUseGoogleReviews(prev => !prev);
    }, 30000); // Switch every 30 seconds

    setTimer(cycleInterval);

    return () => {
      if (cycleInterval) {
        clearInterval(cycleInterval);
      }
    };
  }, []); // Remove timer from dependencies

  const handleToggleReviews = () => {
    if (timer) {
      clearInterval(timer);
    }
    setUseGoogleReviews(prev => !prev);
    const newTimer = setInterval(() => {
      setUseGoogleReviews(prev => !prev);
    }, 30000);
    setTimer(newTimer);
  };

  useEffect(() => {
    if (!isLoaded || loadError) {
      setLoading(false);
      setError(loadError ? 'Failed to load Google Maps' : null);
      return;
    }

    const fetchGoogleReviews = async () => {
      try {
        const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
        
        if (!placeId) {
          setError('Place ID is not configured');
          setLoading(false);
          return;
        }

        const request: google.maps.places.PlaceOptions = {
          id: placeId
        };

        const place = new google.maps.places.Place(request);
        const result = await place.fetchFields({ fields: ['reviews'] });
        
        if (result.place.reviews) {
          const reviews = result.place.reviews as unknown as PlaceReview[];
          
          const formattedReviews: GoogleReview[] = reviews
            .map((review) => {
              const authorInfo = review.Gg || {};
              return {
                author_name: authorInfo.Eg || 'Anonymous Reviewer',
                author_url: authorInfo.Gg || '',
                profile_photo_url: authorInfo.Fg || '',
                rating: review.Ig || 0,
                relative_time_description: review.Jg || '',
                text: review.Kg || ''
              };
            })
            .filter((review) => review.rating >= 4) // Only show 4 and 5 star reviews
            .sort((a, b) => b.rating - a.rating); // Sort by rating (highest first)
          
          setGoogleReviews(formattedReviews);
        } else {
          setError('No reviews found');
        }
        setLoading(false);
      } catch {
        setError('Failed to fetch reviews');
        setLoading(false);
      }
    };

    if (useGoogleReviews) {
      fetchGoogleReviews();
    }
  }, [isLoaded, loadError, useGoogleReviews]);

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

  const renderGoogleReviews = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12 text-gray-600">
          {error}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {googleReviews.map((review, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-red-600/0 group-hover:from-amber-500/5 group-hover:to-red-600/5 transition-all duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{review.author_name || 'Anonymous Reviewer'}</h3>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
              <p className="text-sm text-gray-500 mt-4">{review.relative_time_description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderStaticReviews = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {staticReviews.map((review, index) => (
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
    );
  };

  return (
    <section id="reviews" className="">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Customer <span className="text-amber-500">Reviews</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don&apos;t just take our word for it - hear what our customers have to say about their experience with Fast Cache Pawn.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleToggleReviews}
            className="relative inline-flex items-center h-10 rounded-full w-40 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 px-1"
          >
            <div className={`absolute left-0 top-0 w-20  h-10 rounded-full bg-amber-500 transition-transform duration-200 ${useGoogleReviews ? 'translate-x-0' : 'translate-x-20'}`} />
            <span className={`relative z-10 w-20 text-center text-sm font-medium ${useGoogleReviews ? 'text-white' : 'text-gray-600'}`}>
              Google
            </span>
            <span className={`relative z-10 w-20 text-center text-sm font-medium ${!useGoogleReviews ? 'text-white' : 'text-gray-600'}`}>
              Static
            </span>
          </button>
        </div>
      </div>
      {useGoogleReviews ? renderGoogleReviews() : renderStaticReviews()}
    </section>
  );
};

export default Reviews; 