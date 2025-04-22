
import React from 'react';
import { Coffee, CakeSlice } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturedItem {
  icon: 'coffee' | 'cake';
  title: string;
  description: string;
  price?: string;
  image?: string;
}

interface FeaturedItemsProps {
  title: string;
  description?: string;
  items: FeaturedItem[];
  className?: string;
}

const FeaturedItems = ({
  title,
  description,
  items,
  className,
}: FeaturedItemsProps) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-cafe-brown mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="menu-item flex flex-col items-center group"
            >
              {item.image ? (
                <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 bg-cafe-beige rounded-full flex items-center justify-center mb-4 group-hover:animate-float">
                  {item.icon === 'coffee' ? (
                    <Coffee className="w-8 h-8 text-cafe-brown" />
                  ) : (
                    <CakeSlice className="w-8 h-8 text-cafe-brown" />
                  )}
                </div>
              )}

              <h3 className="text-xl font-pacifico text-cafe-brown mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center mb-4">{item.description}</p>
              {item.price && (
                <span className="text-lg font-bold text-cafe-brown">{item.price}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
