
import React from 'react';

interface AboutSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  content: string[];
  imageOnLeft?: boolean;
}

const AboutSection = ({
  image,
  title,
  subtitle,
  content,
  imageOnLeft = true,
}: AboutSectionProps) => {
  return (
    <section className="py-16 bg-cafe-beige/30">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cafe-brown/30 rounded-lg"></div>
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl text-cafe-brown mb-3">{title}</h2>
            {subtitle && <p className="text-xl text-cafe-brown-light mb-6">{subtitle}</p>}
            
            <div className="space-y-4">
              {content.map((paragraph, index) => (
                <p key={index} className="text-gray-700">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
