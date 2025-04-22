
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const Speisekarte = () => {
  const coffeeMenu: MenuCategory = {
    title: "Kaffee & Espresso",
    items: [
      { name: "Filterkaffee", description: "Handgebrüht mit Bohnen aus fairem Handel", price: "2,80 €" },
      { name: "Espresso", description: "Kräftig und aromatisch", price: "2,50 €" },
      { name: "Espresso Doppio", description: "Doppelter Espresso", price: "3,50 €" },
      { name: "Cappuccino", description: "Espresso mit aufgeschäumter Milch", price: "3,80 €" },
      { name: "Café Latte", description: "Espresso mit viel heißer Milch und Milchschaum", price: "4,00 €" },
      { name: "Latte Macchiato", description: "Heiße Milch mit Espresso und Milchschaum", price: "4,20 €" },
      { name: "Flat White", description: "Doppelter Espresso mit samtiger Milch", price: "3,90 €" },
      { name: "Lübecker Spezial", description: "Mit Karamell und einer Prise Meersalz", price: "4,20 €" },
    ]
  };
  
  const specialDrinks: MenuCategory = {
    title: "Besondere Getränke",
    items: [
      { name: "Chai Latte", description: "Würziger Chai mit heißer Milch", price: "4,00 €" },
      { name: "Heiße Schokolade", description: "Cremige Schokolade mit Sahne", price: "3,80 €" },
      { name: "Matcha Latte", description: "Japanisches Matcha mit schaumiger Milch", price: "4,20 €" },
      { name: "Golden Milk", description: "Kurkuma-Latte mit Gewürzen", price: "4,00 €" },
      { name: "Frischer Ingwertee", description: "Mit Honig und Zitrone", price: "3,50 €" },
    ]
  };
  
  const coldDrinks: MenuCategory = {
    title: "Erfrischende Getränke",
    items: [
      { name: "Hausgemachte Limonade", description: "Täglich frisch zubereitet", price: "3,50 €" },
      { name: "Eiskaffee", description: "Mit Vanilleeis und Sahne", price: "4,50 €" },
      { name: "Frischer Obstsaft", description: "Saisonale Früchte", price: "3,80 €" },
      { name: "Eistee", description: "Hausgemacht mit frischer Minze", price: "3,50 €" },
      { name: "Mineralwasser", description: "Still oder mit Kohlensäure", price: "2,50 €" },
    ]
  };
  
  const cakes: MenuCategory = {
    title: "Kuchen & Torten",
    items: [
      { name: "Lübecker Marzipantorte", description: "Traditionell mit hausgemachtem Marzipan", price: "4,50 €" },
      { name: "Apfel-Zimt Kuchen", description: "Mit regionalen Äpfeln", price: "3,90 €" },
      { name: "Beeren-Quark Tarte", description: "Mit saisonalen Beeren", price: "4,20 €" },
      { name: "Schokoladenkuchen", description: "Saftig mit dunkler Schokolade", price: "4,30 €" },
      { name: "Käsekuchen", description: "Nach Großmutters Rezept", price: "3,90 €" },
      { name: "Tagesangebot", description: "Fragen Sie nach unserem täglichen Spezialangebot", price: "4,00 €" },
    ]
  };
  
  const breakfast: MenuCategory = {
    title: "Frühstück (bis 12:00 Uhr)",
    items: [
      { name: "Kleines Frühstück", description: "Brötchen, Butter, Marmelade und ein Heißgetränk", price: "7,50 €" },
      { name: "Französisches Frühstück", description: "Croissant, Baguette, Käse, Marmelade und ein Heißgetränk", price: "9,50 €" },
      { name: "Veganes Frühstück", description: "Avocado-Brot, Obst, pflanzlicher Aufstrich und ein Heißgetränk", price: "10,50 €" },
      { name: "Lübecker Frühstück", description: "Reichhaltiges Frühstück mit regionalen Spezialitäten für 2 Personen", price: "24,50 €" },
    ]
  };
  
  const snacks: MenuCategory = {
    title: "Kleine Speisen",
    items: [
      { name: "Avocado-Brot", description: "Auf Vollkornbrot mit Tomaten und Microgreens", price: "6,80 €" },
      { name: "Quiche des Tages", description: "Mit kleinem Beilagensalat", price: "8,50 €" },
      { name: "Käse-Schinken Toast", description: "Mit Salatgarnitur", price: "5,50 €" },
      { name: "Mediterranes Sandwich", description: "Mit Pesto, Mozzarella und getrockneten Tomaten", price: "6,80 €" },
    ]
  };

  const renderMenuCategory = (category: MenuCategory) => (
    <div className="mb-12">
      <h3 className="text-2xl font-pacifico text-cafe-brown mb-6">{category.title}</h3>
      <div className="space-y-4">
        {category.items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-end justify-between pb-2 border-b border-cafe-brown/10">
            <div className="flex-1">
              <h4 className="font-medium text-cafe-brown">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <div className="font-medium text-cafe-brown mt-1 md:mt-0">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
          title="Unsere Speisekarte"
          subtitle="Entdecken Sie unsere handgebrühten Kaffeekreationen und hausgemachten Leckereien"
          height="medium"
        />
        
        <section className="py-16 bg-cafe-beige/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-pacifico text-center text-cafe-brown mb-8">Unsere Speisekarte</h2>
              
              {renderMenuCategory(coffeeMenu)}
              {renderMenuCategory(specialDrinks)}
              {renderMenuCategory(coldDrinks)}
              
              <div className="decorative-divider"></div>
              
              {renderMenuCategory(cakes)}
              
              <div className="decorative-divider"></div>
              
              {renderMenuCategory(breakfast)}
              {renderMenuCategory(snacks)}
              
              <div className="bg-cafe-mint/20 p-6 rounded-lg mt-12">
                <h3 className="text-xl font-pacifico text-cafe-brown mb-3">Hinweise zu Allergenen</h3>
                <p className="text-gray-700">
                  Informationen zu Allergenen und Zusatzstoffen erhalten Sie auf Nachfrage bei unserem Servicepersonal.
                  Wir berücksichtigen gerne Ihre individuellen Wünsche und Bedürfnisse.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Speisekarte;
