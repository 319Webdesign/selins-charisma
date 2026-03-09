import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";

export default function ImpressumPage() {
  return (
    <div className="pt-40 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-white text-center font-medium tracking-tight mb-4">
          Impressum
        </h1>
        <p className="text-white/60 text-center mb-16 max-w-xl mx-auto">
          Angaben gemäß § 5 TMG
        </p>

        <FadeInUp>
          <div className="space-y-10 text-white/85 leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                Anbieter / Verantwortlich für den Inhalt
              </h2>
              <p className="mb-2">
                Selin&apos;s Charisma
                <br />
                [Inhaber/in – Name eintragen]
                <br />
                Hauptstraße 71
                <br />
                69469 Weinheim
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                Kontakt
              </h2>
              <p className="mb-2">
                Telefon:{" "}
                <a
                  href="tel:+496201871966"
                  className="text-gold hover:underline"
                >
                  +49 6201 871966
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@selins-charisma.de"
                  className="text-gold hover:underline"
                >
                  info@selins-charisma.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                <br />
                [USt-IdNr. – falls vorhanden eintragen]
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                [Name und Anschrift – wie oben eintragen]
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                EU-Streitschlichtung
              </h2>
              <p className="mb-2">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
                nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                Haftung für Inhalte
              </h2>
              <p className="mb-2">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                jedoch nicht verpflichtet, übermittelte oder gespeicherte
                fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
                eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
                einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
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
