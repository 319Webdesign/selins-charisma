import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";

export default function CookieRichtlinienPage() {
  return (
    <div className="pt-40 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-white text-center font-medium tracking-tight mb-4">
          Cookie-Richtlinien
        </h1>
        <p className="text-white/60 text-center mb-16 max-w-xl mx-auto">
          Informationen zur Verwendung von Cookies auf dieser Website
        </p>

        <FadeInUp>
          <div className="space-y-10 text-white/85 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                1. Was sind Cookies?
              </h2>
              <p>
                Cookies sind kleine Textdateien, die von Websites auf Ihrem
                Computer oder mobilen Gerät gespeichert werden, wenn Sie diese
                besuchen. Sie werden weit verbreitet eingesetzt, um Websites
                funktionsfähiger und effizienter zu machen sowie dem
                Website-Betreiber bestimmte Informationen zu liefern. Cookies
                können von der besuchten Website (First-Party-Cookies) oder von
                Drittanbietern (Third-Party-Cookies) stammen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                2. Wie wir Cookies verwenden
              </h2>
              <p className="mb-4">
                Auf unserer Website setzen wir Cookies ein, um Ihnen die
                Nutzung zu erleichtern und bestimmte Funktionen bereitzustellen.
                Die von uns verwendeten Cookies lassen sich wie folgt
                einteilen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>
                  <strong className="text-white/90">Technisch notwendige Cookies:</strong>{" "}
                  Diese Cookies sind für den Betrieb der Website unbedingt
                  erforderlich. Sie ermöglichen grundlegende Funktionen wie
                  Seitennavigation und Zugriff auf sichere Bereiche. Ohne diese
                  Cookies kann die Website nicht ordnungsgemäß funktionieren.
                </li>
                <li>
                  <strong className="text-white/90">Funktionale Cookies:</strong>{" "}
                  Diese Cookies ermöglichen erweiterte Funktionen und
                  Personalisierung (z. B. Spracheinstellungen, Formulardaten).
                  Sie können von uns oder von Drittanbietern gesetzt werden.
                </li>
                <li>
                  <strong className="text-white/90">Analyse-Cookies:</strong>{" "}
                  Sofern wir Analyse-Tools (z. B. zur Besucherstatistik)
                  einsetzen, können entsprechende Cookies gesetzt werden. Diese
                  helfen uns zu verstehen, wie Besucher die Website nutzen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                3. Rechtsgrundlage
              </h2>
              <p>
                Technisch notwendige Cookies setzen wir auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO ein (berechtigtes Interesse an der
                Bereitstellung einer funktionsfähigen Website). Sofern wir für
                andere Cookies Ihre Einwilligung einholen, erfolgt die
                Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sie
                können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
                widerrufen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                4. Speicherdauer
              </h2>
              <p>
                Die Speicherdauer der Cookies richtet sich nach ihrem Zweck.
                Sitzungscookies werden gelöscht, sobald Sie Ihren Browser
                schließen. Andere Cookies können für einen festgelegten
                Zeitraum (z. B. mehrere Monate oder Jahre) auf Ihrem Gerät
                verbleiben, sofern Sie sie nicht vorher manuell löschen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                5. Ihre Wahlmöglichkeiten
              </h2>
              <p className="mb-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen
                von Cookies informiert werden und Cookies nur im Einzelfall
                erlauben, die Annahme von Cookies für bestimmte Fälle oder
                generell ausschließen sowie das automatische Löschen der Cookies
                beim Schließen des Browsers aktivieren. Bei der Deaktivierung
                von Cookies kann die Funktionalität dieser Website
                eingeschränkt sein.
              </p>
              <p>
                Die entsprechenden Einstellungen finden Sie in der Regel in den
                Optionen oder Einstellungen Ihres Browsers (z. B. unter
                „Datenschutz“, „Cookies“ oder „Website-Einstellungen“).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                6. Weitere Informationen
              </h2>
              <p>
                Weitere Details zur Verarbeitung personenbezogener Daten auf
                dieser Website finden Sie in unserer{" "}
                <Link href="/datenschutz" className="text-gold hover:underline">
                  Datenschutzerklärung
                </Link>
                . Bei Fragen zu unseren Cookie-Richtlinien können Sie uns unter
                den im{" "}
                <Link href="/impressum" className="text-gold hover:underline">
                  Impressum
                </Link>{" "}
                angegebenen Kontaktdaten erreichen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                7. Änderungen
              </h2>
              <p>
                Wir behalten uns vor, diese Cookie-Richtlinie bei Bedarf
                anzupassen, um sie an geänderte Rechtslage oder an die
                tatsächliche Nutzung von Cookies auf unserer Website
                anzupassen. Die jeweils aktuelle Fassung finden Sie auf dieser
                Seite. Stand: März 2025.
              </p>
            </section>
          </div>
        </FadeInUp>

        <p className="mt-16 text-center">
          <Link
            href="/"
            className="text-gold hover:underline text-sm font-medium"
          >
            ← Zurück zur Startseite
          </Link>
        </p>
      </div>
    </div>
  );
}
