import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export interface LayoutProps {
  children: ReactNode;
}

export interface Review {
  author: string;
  location: string;
  content: string;
} 