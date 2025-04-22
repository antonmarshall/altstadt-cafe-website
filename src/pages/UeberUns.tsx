
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

const UeberUns = () => {
  const storyContent = [
    "Das Altstadtcafé wurde im Jahr 2008 von Maria Schmidt gegründet, die ihre Leidenschaft für guten Kaffee und hausgemachten Kuchen zum Beruf machte. Nach vielen Jahren Erfahrung in verschiedenen Cafés und Konditoreien wagte sie den Schritt in die Selbständigkeit und eröffnete das Altstadtcafé in einer gemütlichen Gasse in der Lübecker Altstadt.",
    "Was als kleines Café mit wenigen Sitzplätzen begann, hat sich im Laufe der Jahre zu einem beliebten Treffpunkt für Einheimische und Touristen entwickelt. Heute führt Maria das Café gemeinsam mit ihrem Sohn Lars, der ihre Leidenschaft für Kaffee teilt und als ausgebildeter Barista seine eigenen Ideen einbringt.",
    "Über die Jahre ist das Altstadtcafé seinem Motto treu geblieben: Qualität, Gemütlichkeit und persönlicher Service stehen im Mittelpunkt. Wir freuen uns, Sie bei uns begrüßen zu dürfen!"
  ];
  
  const philosophyContent = [
    "Im Altstadtcafé legen wir großen Wert auf Nachhaltigkeit und Qualität. Unsere Kaffeebohnen beziehen wir direkt über Fair Trade-Kooperationen, um faire Arbeitsbedingungen für die Kaffeebauern zu garantieren. Für unsere Röstungen arbeiten wir mit einer lokalen Rösterei zusammen, die die Bohnen schonend und mit viel Liebe zum Detail veredelt.",
    "Unsere Kuchen und Torten werden täglich frisch in unserer hauseigenen Backstube zubereitet. Dabei verwenden wir bevorzugt regionale und saisonale Zutaten von Produzenten aus der Umgebung. So unterstützen wir nicht nur die lokale Wirtschaft, sondern garantieren auch frische Produkte mit kurzen Transportwegen.",
    "Auch in anderen Bereichen versuchen wir, möglichst nachhaltig zu handeln: Wir verwenden biologisch abbaubare To-Go-Becher, reduzieren Plastikmüll, wo immer es möglich ist, und achten auf einen ressourcenschonenden Umgang mit Energie und Wasser."
  ];
  
  const teamContent = [
    "Unser Team besteht aus leidenschaftlichen Kaffeeliebhabern und Backtalenten, die mit Freude und Engagement für Sie da sind. Von unseren erfahrenen Baristas, die jede Tasse Kaffee mit Sorgfalt zubereiten, bis hin zu unseren freundlichen Servicekräften, die für eine angenehme Atmosphäre sorgen – alle teilen die Liebe zum Detail und zur Gastfreundschaft.",
    "Regelmäßige Schulungen und Workshops halten uns auf dem neuesten Stand der Kaffeekunst und Backtrends. So können wir Ihnen stets besondere Geschmackserlebnisse und einen erstklassigen Service bieten.",
    "Wir sind stolz darauf, ein familiäres Arbeitsumfeld geschaffen zu haben, in dem sich jeder einbringen und weiterentwickeln kann. Diese positive Energie spüren auch unsere Gäste – denn nichts geht über ein ehrliches Lächeln und echte Gastfreundschaft."
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1513267048331-5611cad62e41"
          title="Über uns"
          subtitle="Erfahren Sie mehr über das Altstadtcafé, unsere Geschichte und Philosophie"
          height="medium"
        />
        
        <AboutSection
          image="https://images.unsplash.com/photo-1453614512568-c4024d13c247"
          title="Unsere Geschichte"
          content={storyContent}
        />
        
        <div className="decorative-divider" />
        
        <AboutSection
          image="https://images.unsplash.com/photo-1551269901-5c5e14c25df7"
          title="Unsere Philosophie"
          subtitle="Nachhaltigkeit, Qualität und Regionalität"
          content={philosophyContent}
          imageOnLeft={false}
        />
        
        <div className="decorative-divider" />
        
        <AboutSection
          image="https://images.unsplash.com/photo-1507914372368-b2b085b925a1"
          title="Unser Team"
          content={teamContent}
        />
        
        <section className="py-16 bg-cafe-beige text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-pacifico text-cafe-brown mb-6">
              Besuchen Sie uns bald!
            </h2>
            <p className="text-xl text-cafe-brown-light mb-8 max-w-3xl mx-auto">
              Wir freuen uns darauf, Sie in unserem Café begrüßen zu dürfen und Ihnen einen besonderen Kaffeegenuss zu bereiten.
            </p>
            <a href="/kontakt" className="cafe-button">Jetzt Tisch reservieren</a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UeberUns;
