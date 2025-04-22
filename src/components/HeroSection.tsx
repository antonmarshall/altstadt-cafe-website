
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  height?: 'full' | 'large' | 'medium';
  overlay?: boolean;
}

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink = '#',
  height = 'large',
  overlay = true,
}: HeroSectionProps) => {
  return (
    <div 
      className={cn(
        "relative bg-cover bg-center flex items-center justify-center",
        {
          'min-h-screen': height === 'full',
          'min-h-[80vh]': height === 'large',
          'min-h-[60vh]': height === 'medium',
        }
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
          {subtitle}
        </p>
        {buttonText && (
          <a 
            href={buttonLink} 
            className="cafe-button bg-cafe-beige text-cafe-brown hover:bg-white animate-fade-in"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
