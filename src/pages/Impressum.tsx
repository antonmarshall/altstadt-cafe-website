
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-28">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-pacifico text-cafe-brown mb-6">Impressum</h1>
              
              <h2 className="text-xl font-medium mt-8 mb-4 text-cafe-brown">Angaben gemäß § 5 TMG</h2>
              <p className="mb-2">Altstadtcafé Lübeck</p>
              <p className="mb-2">Maria Schmidt</p>
              <p className="mb-2">Altstadtgasse 123</p>
              <p className="mb-2">23552 Lübeck</p>
              
              <h2 className="text-xl font-medium mt-8 mb-4 text-cafe-brown">Kontakt</h2>
              <p className="mb-2">Telefon: +49 451 12345678</p>
              <p className="mb-2">E-Mail: info@altstadtcafe-luebeck.de</p>
              
              <h2 className="text-xl font-medium mt-8 mb-4 text-cafe-brown">Umsatzsteuer-ID</h2>
              <p className="mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p className="mb-2">DE123456789</p>
              
              <h2 className="text-xl font-medium mt-8 mb-4 text-cafe-brown">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="mb-2">Berufsbezeichnung: Café-Betreiber</p>
              <p className="mb-2">Zuständige Kammer: IHK zu Lübeck</p>
              <p className="mb-2">Es gelten folgende berufsrechtliche Regelungen: Gaststättenverordnung</p>
              
              <h2 className="text-xl font-medium mt-8 mb-4 text-cafe-brown">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p className="mb-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              
              <h3 className="text-lg font-medium mt-8 mb-4 text-cafe-brown">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              
              <h3 className="text-lg font-medium mt-8 mb-4 text-cafe-brown">Haftung für Links</h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mb-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
              
              <h3 className="text-lg font-medium mt-8 mb-4 text-cafe-brown">Urheberrecht</h3>
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mb-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
