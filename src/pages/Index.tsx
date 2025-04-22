
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedItems from '@/components/FeaturedItems';
import AboutSection from '@/components/AboutSection';
import Gallery from '@/components/Gallery';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  // Sample data for featured items
  const coffeeSpecialties = [
    {
      icon: 'coffee' as const,
      title: 'Bio-Cappuccino',
      description: 'Cremiger Bio-Cappuccino mit hauseigener Milchschaum-Kunst',
      price: '3,80 €',
    },
    {
      icon: 'coffee' as const,
      title: 'Lübecker Spezial',
      description: 'Unser Signature-Kaffee mit Karamell und einer Prise Meersalz',
      price: '4,20 €',
    },
    {
      icon: 'coffee' as const,
      title: 'Flat White',
      description: 'Intensiver Espresso mit samtiger Milch für den besonderen Genuss',
      price: '3,90 €',
    },
  ];

  const cakeSpecialties = [
    {
      icon: 'cake' as const,
      title: 'Lübecker Marzipantorte',
      description: 'Traditionell mit hausgemachtem Marzipan und feinen Mandeln',
      price: '4,50 € / Stück',
    },
    {
      icon: 'cake' as const,
      title: 'Apfel-Zimt Kuchen',
      description: 'Saftig und würzig mit Äpfeln aus regionalem Anbau',
      price: '3,90 € / Stück',
    },
    {
      icon: 'cake' as const,
      title: 'Beeren-Quark Tarte',
      description: 'Fruchtige Tarte mit saisonalen Beeren und cremiger Quarkfüllung',
      price: '4,20 € / Stück',
    },
  ];

  // Sample gallery images
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", alt: "Kaffee mit Latte Art" },
    { src: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0", alt: "Kuchen und Kaffee" },
    { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31", alt: "Gemütliches Café-Ambiente" },
    { src: "https://images.unsplash.com/photo-1511081692775-05d0f180a065", alt: "Frische Backwaren" },
  ];

  // Sample content for about section
  const aboutContent = [
    "Seit über 15 Jahren verwöhnen wir unsere Gäste im Herzen der Lübecker Altstadt mit handgebrühtem Kaffee und hausgemachten Kuchen. Was als kleine Leidenschaft begann, ist heute zu einer Institution für Kaffeeliebhaber und Genießer geworden.",
    "Wir legen größten Wert auf die Qualität unserer Zutaten. Unser Kaffee stammt aus fairem Handel und wird von einer lokalen Rösterei speziell für uns zusammengestellt. Für unsere Backwaren verwenden wir vorwiegend regionale und saisonale Produkte.",
    "Ob Sie einen ruhigen Moment bei einer Tasse Kaffee genießen, mit Freunden bei einem Stück Kuchen plaudern oder in gemütlicher Atmosphäre arbeiten möchten – im Altstadtcafé sind Sie herzlich willkommen."
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
          title="Willkommen im Altstadtcafé"
          subtitle="Genießen Sie hausgemachten Kuchen und fair gehandelten Kaffee im Herzen der Lübecker Altstadt"
          buttonText="Tisch reservieren"
          height="large"
        />
        
        <div className="decorative-divider" />
        
        <FeaturedItems
          title="Unsere Kaffeespezialitäten"
          description="Entdecken Sie unsere sorgfältig zubereiteten Kaffeespezialitäten aus fair gehandelten Bohnen"
          items={coffeeSpecialties}
        />
        
        <div className="decorative-divider" />
        
        <AboutSection
          image="https://images.unsplash.com/photo-1513267048331-5611cad62e41"
          title="Unser Café in der Altstadt"
          subtitle="Eine Oase der Gemütlichkeit seit 2008"
          content={aboutContent}
        />
        
        <div className="decorative-divider" />
        
        <FeaturedItems
          title="Hausgemachte Kuchen & Torten"
          description="Täglich frisch gebacken mit Liebe und regionalen Zutaten"
          items={cakeSpecialties}
          className="bg-cafe-mint/20"
        />
        
        <div className="decorative-divider" />
        
        <section className="py-12 bg-cafe-beige">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-cafe-brown mb-6">Lassen Sie sich verwöhnen</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Egal ob zum Frühstück, für eine Kaffeepause oder zum gemütlichen Nachmittagskuchen - 
              bei uns finden Sie den perfekten Ort zum Verweilen und Genießen.
            </p>
            <a href="#kontakt" className="cafe-button">Besuchen Sie uns</a>
          </div>
        </section>
        
        <div className="decorative-divider" />
        
        <section className="py-16">
          <div className="container mx-auto px-4 text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-cafe-brown mb-4">Eindrücke aus unserem Café</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Erleben Sie die gemütliche Atmosphäre unseres Cafés
            </p>
          </div>
          <Gallery images={galleryImages} />
        </section>
        
        <div className="decorative-divider" id="kontakt" />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
