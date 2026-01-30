import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [showAGB, setShowAGB] = useState(false);

  // Smooth scroll handler to ensure offset for fixed header if needed, 
  // though CSS scroll-behavior usually handles this well.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.querySelector(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="relative border-t border-organic-charcoal/5 bg-organic-cream py-20 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-xs">
            <h4 className="text-2xl font-serif mb-6 text-organic-charcoal">Deep Ease</h4>
            <p className="text-organic-textLight font-light text-sm leading-relaxed mb-6">
              Wo die seelenvolle Kunst des Seins auf die rigorose Architektur des Tuns trifft. Zwei Pfade, ein Ziel: Exzellenz.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full bg-organic-charcoal/5 hover:bg-organic-charcoal/10 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 rounded-full bg-organic-charcoal/5 hover:bg-organic-charcoal/10 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 rounded-full bg-organic-charcoal/5 hover:bg-organic-charcoal/10 transition-colors cursor-pointer"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest mb-6 text-organic-charcoal">Menü</h5>
              <ul className="space-y-4 text-organic-textLight text-sm font-light">
                <li>
                  <a href="#philosophie" onClick={(e) => handleNavClick(e, '#philosophie')} className="hover:text-organic-charcoal transition-colors block">Philosophie</a>
                </li>
                <li>
                  <a href="#coaches" onClick={(e) => handleNavClick(e, '#coaches')} className="hover:text-organic-charcoal transition-colors block">Coaching</a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-organic-charcoal transition-colors block">Angebote</a>
                </li>
                <li>
                  <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-organic-charcoal transition-colors block">Erfahrungen</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest mb-6 text-organic-charcoal">Kontakt</h5>
              <ul className="space-y-4 text-organic-textLight text-sm font-light">
                <li>coaching@deep-ease.com</li>
                <li>+49 163 1365144</li>
                <li className="pt-4">
                  <a href="#anfrage" onClick={(e) => handleNavClick(e, '#anfrage')} className="hover:text-organic-charcoal cursor-pointer transition-colors font-medium block">Gespräch buchen</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mt-20 pt-8 border-t border-organic-charcoal/5 flex flex-col md:flex-row justify-between items-center text-xs text-organic-textLight">
          <p>&copy; {new Date().getFullYear()} Deep Ease Coaching. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span 
              onClick={() => setShowImpressum(true)}
              className="hover:text-organic-charcoal cursor-pointer transition-colors"
            >
              Impressum
            </span>
            <span 
              onClick={() => setShowDatenschutz(true)}
              className="hover:text-organic-charcoal cursor-pointer transition-colors"
            >
              Datenschutz
            </span>
            <span 
              onClick={() => setShowAGB(true)}
              className="hover:text-organic-charcoal cursor-pointer transition-colors"
            >
              AGB
            </span>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-organic-charcoal/30 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0" onClick={() => setShowImpressum(false)}></div>
          <div className="relative bg-[#fdfbf7] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 text-organic-charcoal scrollbar-hide">
            <button 
              onClick={() => setShowImpressum(false)} 
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors text-organic-charcoal"
            >
              <X size={24} />
            </button>
            <div className="space-y-8 font-light text-sm leading-relaxed">
              <h2 className="text-3xl font-serif text-organic-charcoal mb-8">Impressum</h2>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">Angaben gemäß § 5 TMG</h3>
                <p>Deep-ease Coaching GbR<br/>Simon Kuhn & Leon Feldmeier<br/>Luxemburger Straße 32<br/>50674 Köln</p>
              </div>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">Kontakt</h3>
                <p>E-Mail: coaching@deep-ease.com<br/>Telefon: 0163 6864967<br/>Website: www.deep-ease.com</p>
              </div>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">Vertreten durch</h3>
                <p>Leon Feldmeier<br/>Simon Kuhn</p>
              </div>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">Redaktionell verantwortlich</h3>
                <p>Gemäß § 18 Abs. 2 MStV:<br/>Simon Kuhn<br/>Luxemburger Straße 32<br/>50674 Köln</p>
              </div>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">EU-Streitschlichtung</h3>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-organic-sageDark">https://ec.europa.eu/consumers/odr/</a>.<br/>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">Verbraucherstreitbeilegung</h3>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Datenschutz Modal */}
      {showDatenschutz && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-organic-charcoal/30 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0" onClick={() => setShowDatenschutz(false)}></div>
          <div className="relative bg-[#fdfbf7] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 text-organic-charcoal scrollbar-hide">
            <button 
              onClick={() => setShowDatenschutz(false)} 
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors text-organic-charcoal"
            >
              <X size={24} />
            </button>
            <div className="space-y-8 font-light text-sm leading-relaxed">
              <h2 className="text-3xl font-serif text-organic-charcoal mb-8">Datenschutzerklärung</h2>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">1. Datenschutz auf einen Blick</h3>
                <h4 className="font-semibold text-organic-charcoal mt-4 mb-2">Allgemeine Hinweise</h4>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                <h4 className="font-semibold text-organic-charcoal mt-4 mb-2">Datenerfassung auf dieser Website</h4>
                <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br/>Deep-ease Coaching GbR<br/>Simon Kuhn & Leon Feldmeier<br/>Luxemburger Straße 32<br/>50674 Köln<br/>E-Mail: coaching@deep-ease.com</p>
                <p className="mt-2"><strong>Wie erfassen wir Ihre Daten?</strong><br/>Ihre Daten werden dadurch erhoben, dass Sie uns diese mitteilen (z. B. per E-Mail). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
              </div>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">2. Hosting durch Netlify</h3>
                <p>Wir hosten unsere Website bei Netlify. Anbieter ist die Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA (nachfolgend: Netlify).</p>
                <p className="mt-2">Wenn Sie unsere Website besuchen, erfasst Netlify verschiedene Log-Files inklusive Ihrer IP-Adressen. Netlify ist ein Empfänger Ihrer personenbezogenen Daten und als Auftragsverarbeiter für uns tätig.</p>
                <p className="mt-2">Die Verwendung von Netlify erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung und sicheren Bereitstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="mt-2"><strong>Datenübertragung in die USA:</strong><br/>Netlify überträgt Daten in die USA. Wir haben mit Netlify einen Auftragsverarbeitungsvertrag (Data Processing Agreement) geschlossen, der die Einhaltung der EU-Datenschutzstandards garantiert. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission sowie auf das EU-U.S. Data Privacy Framework gestützt. Details finden Sie hier: <a href="https://www.netlify.com/pdf/Netlify-DPA.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-organic-sageDark">https://www.netlify.com/pdf/Netlify-DPA.pdf</a></p>
              </div>
              <div>
                 <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                 <h4 className="font-semibold text-organic-charcoal mt-4 mb-2">Datenschutz</h4>
                 <p>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.</p>
                 <h4 className="font-semibold text-organic-charcoal mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                 <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufbar.</p>
                 <h4 className="font-semibold text-organic-charcoal mt-4 mb-2">Ihre Rechte</h4>
                 <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
              </div>
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">4. Datenerfassung auf dieser Website</h3>
                <h4 className="font-semibold text-organic-charcoal mt-4 mb-2">Server-Log-Dateien</h4>
                <p>Der Provider der Seiten (Netlify) erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mt-2">Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
                <h4 className="font-semibold text-organic-charcoal mt-4 mb-2">Kontaktaufnahme</h4>
                <p>Wenn Sie uns per E-Mail oder Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AGB Modal */}
      {showAGB && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-organic-charcoal/30 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0" onClick={() => setShowAGB(false)}></div>
          <div className="relative bg-[#fdfbf7] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 text-organic-charcoal scrollbar-hide">
            <button 
              onClick={() => setShowAGB(false)} 
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors text-organic-charcoal"
            >
              <X size={24} />
            </button>
            <div className="space-y-8 font-light text-sm leading-relaxed">
              <h2 className="text-3xl font-serif text-organic-charcoal mb-8">Allgemeine Geschäftsbedingungen (AGB)</h2>
              
              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">§ 1 Geltungsbereich und Vertragspartner</h3>
                <p>(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge über Coaching-Leistungen, Beratungen, Workshops und sonstige Dienstleistungen, die zwischen der Deep-ease Coaching GbR, vertreten durch Leon Feldmeier und Simon Kuhn (nachfolgend „Anbieter“), und ihren Kunden (nachfolgend „Klient“) geschlossen werden.</p>
                <p className="mt-2">(2) Abweichende Bedingungen des Klienten werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
              </div>

              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">§ 2 Leistungsgegenstand und Vertragsschluss</h3>
                <p>(1) Der Anbieter erbringt Leistungen im Bereich des systemischen Coachings und der persönlichen Beratung. Die konkreten Inhalte und Ziele werden individuell zwischen den Parteien vereinbart.</p>
                <p className="mt-2">(2) Die Präsentation der Leistungen auf der Website stellt kein rechtlich bindendes Angebot dar. Ein Vertrag kommt erst durch die Bestätigung eines Termins oder die Unterzeichnung einer Honorarvereinbarung durch beide Parteien zustande.</p>
                <p className="mt-2">(3) Der Anbieter ist berechtigt, die Leistungen durch Leon Feldmeier oder Simon Kuhn zu erbringen.</p>
              </div>

              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">§ 3 Wichtiger Hinweis: Abgrenzung zur Therapie</h3>
                <p>(1) Das Coaching durch den Anbieter ist keine Psychotherapie, keine medizinische Heilbehandlung und ersetzt nicht den Besuch bei einem Arzt, Psychologen oder Psychiater.</p>
                <p className="mt-2">(2) Der Anbieter stellt keine Diagnosen und gibt keine Heilversprechen ab.</p>
                <p className="mt-2">(3) Der Klient bestätigt mit der Inanspruchnahme der Leistungen, dass er eigenverantwortlich handelt, geistig und körperlich gesund ist und keine akuten suizidalen oder fremdgefährdenden Absichten vorliegen. Im Zweifelsfall ist vorab ein Arzt zu konsultieren.</p>
              </div>

              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">§ 4 Honorar und Zahlungsbedingungen</h3>
                <p>(1) Es gelten die zum Zeitpunkt des Vertragsschlusses vereinbarten Honorare. Alle Preise verstehen sich inkl. gesetzlicher Umsatzsteuer.</p>
                <p className="mt-2">(2) Das Honorar ist nach Rechnungsstellung innerhalb von 7 Tagen ohne Abzug fällig, sofern kein anderes Zahlungsziel vereinbart wurde.</p>
              </div>

              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">§ 5 Terminabsagen und Ausfallhonorar</h3>
                <p>(1) Vereinbarte Termine sind verbindlich.</p>
                <p className="mt-2">(2) Eine kostenfreie Absage oder Verschiebung ist bis zu 48 Stunden vor dem Termin möglich.</p>
                <p className="mt-2">(3) Bei Absagen weniger als 24 Stunden vor dem Termin oder bei Nichterscheinen ohne vorherige Absage wird das vereinbarte Honorar zu 100 % fällig, da der Termin kurzfristig nicht mehr anderweitig vergeben werden kann. Dem Klienten bleibt der Nachweis vorbehalten, dass kein oder ein wesentlich geringerer Schaden entstanden ist.</p>
              </div>

              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">§ 6 Haftung</h3>
                <p>(1) Der Anbieter schuldet die Erbringung der vereinbarten Coaching-Dienstleistung, jedoch keinen bestimmten Erfolg. Die Umsetzung der im Coaching erarbeiteten Inhalte liegt allein in der Verantwortung des Klienten.</p>
                <p className="mt-2">(2) Die Haftung des Anbieters für leichte Fahrlässigkeit wird ausgeschlossen, sofern keine wesentlichen Vertragspflichten (Kardinalpflichten) oder Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit betroffen sind.</p>
              </div>

              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">§ 7 Vertraulichkeit und Datenschutz</h3>
                <p>(1) Der Anbieter verpflichtet sich, über alle im Rahmen der Zusammenarbeit bekannt gewordenen privaten oder geschäftlichen Informationen des Klienten strengstes Stillschweigen zu bewahren.</p>
                <p className="mt-2">(2) Die Verarbeitung personenbezogener Daten erfolgt ausschließlich im Rahmen der gesetzlichen Bestimmungen der DSGVO (siehe separate Datenschutzerklärung).</p>
              </div>

              <div>
                <h3 className="font-medium uppercase tracking-widest text-xs mb-3 text-organic-textLight">§ 8 Schlussbestimmungen</h3>
                <p>(1) Es gilt das Recht der Bundesrepublik Deutschland.</p>
                <p className="mt-2">(2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;