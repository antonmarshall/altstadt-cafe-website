
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-cafe-brown mb-4">Kontakt & Anfahrt</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Besuchen Sie uns im Herzen der Lübecker Altstadt. Wir freuen uns auf Sie!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-cafe-beige/30 p-8 rounded-lg">
            <h3 className="text-2xl font-pacifico text-cafe-brown mb-6">Kontaktdaten</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-cafe-brown">Adresse</h4>
                <address className="not-italic">
                  Altstadtcafé<br />
                  Altstadtgasse 123<br />
                  23552 Lübeck
                </address>
              </div>
              
              <div>
                <h4 className="font-bold text-cafe-brown">Kontakt</h4>
                <p>Tel: <a href="tel:+4945112345678" className="hover:text-cafe-brown">+49 451 12345678</a></p>
                <p>E-Mail: <a href="mailto:info@altstadtcafe-luebeck.de" className="hover:text-cafe-brown">info@altstadtcafe-luebeck.de</a></p>
              </div>
              
              <div>
                <h4 className="font-bold text-cafe-brown">Öffnungszeiten</h4>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td>Montag - Freitag:</td>
                      <td>09:00 - 18:00 Uhr</td>
                    </tr>
                    <tr>
                      <td>Samstag:</td>
                      <td>10:00 - 18:00 Uhr</td>
                    </tr>
                    <tr>
                      <td>Sonntag:</td>
                      <td>11:00 - 17:00 Uhr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h3 className="text-xl font-pacifico text-cafe-brown mt-8 mb-4">Reservierungsanfrage</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border border-cafe-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown" 
                    placeholder="Ihr Name" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium">E-Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border border-cafe-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown" 
                    placeholder="Ihre E-Mail" 
                    required 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block mb-1 text-sm font-medium">Datum</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full p-2 border border-cafe-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block mb-1 text-sm font-medium">Uhrzeit</label>
                  <input 
                    type="time" 
                    id="time" 
                    className="w-full p-2 border border-cafe-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown" 
                    required 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block mb-1 text-sm font-medium">Anzahl der Personen</label>
                <input 
                  type="number" 
                  id="guests" 
                  min="1" 
                  className="w-full p-2 border border-cafe-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown" 
                  placeholder="Anzahl der Gäste" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium">Nachricht</label>
                <textarea 
                  id="message" 
                  rows={3} 
                  className="w-full p-2 border border-cafe-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown" 
                  placeholder="Ihre Nachricht an uns" 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="cafe-button w-full"
              >
                Anfrage senden
              </button>
            </form>
          </div>
          
          <div className="h-[500px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.6204443850805!2d10.677813316168314!3d53.86674888009524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b208bb16499289%3A0x39e40316351e230c!2sAltstadt%2C%20L%C3%BCbeck!5e0!3m2!1sen!2sde!4v1650000000000!5m2!1sen!2sde" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Karte zum Altstadtcafé"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
