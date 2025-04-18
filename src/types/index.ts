
export interface LayoutProps {
  children: React.ReactNode;
}

export interface Review {
  author: string;
  location: string;
  content: string;
  rating: number;
}

export interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export interface PlaceReview {
  Gg?: {
    Eg?: string;  // author name
    Fg?: string;  // profile photo URL
    Gg?: string;  // author URL
  };
  Ig?: number;    // rating
  Jg?: string;    // relative time
  Kg?: string;    // text
} 