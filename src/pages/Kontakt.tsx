
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';

const Kontakt = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
          title="Kontakt & Anfahrt"
          subtitle="So erreichen Sie uns im Herzen der Lübecker Altstadt"
          height="medium"
        />
        
        <ContactSection />
        
        <section className="py-16 bg-cafe-beige/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-pacifico text-cafe-brown mb-6">
                Häufig gestellte Fragen
              </h2>
              
              <div className="space-y-6 text-left mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-pacifico text-cafe-brown mb-2">Benötige ich eine Reservierung?</h3>
                  <p className="text-gray-700">
                    Grundsätzlich können Sie uns auch ohne Reservierung besuchen. An Wochenenden und zu Stoßzeiten empfehlen wir jedoch, einen Tisch zu reservieren, um Wartezeiten zu vermeiden.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-pacifico text-cafe-brown mb-2">Gibt es glutenfreie oder vegane Optionen?</h3>
                  <p className="text-gray-700">
                    Ja, wir bieten täglich mindestens ein glutenfreies und ein veganes Kuchenangebot sowie entsprechende Kaffeevariationen mit pflanzlicher Milch an. Sprechen Sie uns gerne auf weitere Wünsche an.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-pacifico text-cafe-brown mb-2">Kann ich Kuchen für besondere Anlässe bestellen?</h3>
                  <p className="text-gray-700">
                    Natürlich! Wir fertigen Torten und Kuchen nach Ihren Wünschen für Geburtstage, Hochzeiten und andere Anlässe an. Bitte kontaktieren Sie uns mindestens 3-4 Tage im Voraus.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-pacifico text-cafe-brown mb-2">Gibt es WLAN im Café?</h3>
                  <p className="text-gray-700">
                    Ja, wir stellen unseren Gästen kostenfreies WLAN zur Verfügung. Das Passwort erhalten Sie an der Theke.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
