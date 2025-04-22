
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Gallery from '@/components/Gallery';

const Galerie = () => {
  // Sample gallery images - in a real project, these would be actual images from the cafe
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", alt: "Kaffee mit Latte Art" },
    { src: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0", alt: "Kuchen und Kaffee" },
    { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31", alt: "Gemütliches Café-Ambiente" },
    { src: "https://images.unsplash.com/photo-1511081692775-05d0f180a065", alt: "Frische Backwaren" },
    { src: "https://images.unsplash.com/photo-1534617084177-4b5d50a2cc92", alt: "Kaffeebohnen von unserer Rösterei" },
    { src: "https://images.unsplash.com/photo-1514481538271-cf9f99627524", alt: "Frühstück im Café" },
    { src: "https://images.unsplash.com/photo-1513267048331-5611cad62e41", alt: "Café von außen" },
    { src: "https://images.unsplash.com/photo-1525629545813-e4e7ba8226bd", alt: "Barista bei der Arbeit" },
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24", alt: "Hausgemachte Desserts" },
    { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb", alt: "Gemütliche Sitzecke" },
    { src: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836", alt: "Detailansicht der Inneneinrichtung" },
    { src: "https://images.unsplash.com/photo-1518057111178-44a106bad149", alt: "Kaffee und Croissant" },
  ];
  
  const categories = [
    { id: "all", label: "Alle Bilder" },
    { id: "coffee", label: "Kaffee" },
    { id: "cakes", label: "Kuchen & Torten" },
    { id: "interior", label: "Café-Ambiente" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
          title="Bildergalerie"
          subtitle="Eindrücke aus unserem gemütlichen Altstadtcafé"
          height="medium"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-pacifico text-cafe-brown mb-4">Unsere Galerie</h2>
              <p className="text-lg text-gray-600">
                Erleben Sie die gemütliche Atmosphäre unseres Cafés, unsere hausgemachten Köstlichkeiten und den Charme der Lübecker Altstadt in Bildern.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="px-4 py-2 rounded-full bg-cafe-beige text-cafe-brown hover:bg-cafe-brown hover:text-white transition-colors duration-200"
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            <Gallery images={galleryImages} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Galerie;
