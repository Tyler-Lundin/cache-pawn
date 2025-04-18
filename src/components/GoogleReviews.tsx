'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Review {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}&fields=reviews&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`
        );
        
        const data = await response.json();
        
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        } else {
          setError('No reviews found');
        }
      } catch (err) {
        setError('Failed to fetch reviews');
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={review.profile_photo_url}
                alt={review.author_name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-amber-500' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{review.text}</p>
          <p className="text-sm text-gray-500">{review.relative_time_description}</p>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews; 