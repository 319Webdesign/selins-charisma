import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";

export default function DatenschutzPage() {
  return (
    <div className="pt-40 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-white text-center font-medium tracking-tight mb-4">
          Datenschutzerklärung
        </h1>
        <p className="text-white/60 text-center mb-16 max-w-xl mx-auto">
          Informationen zur Verarbeitung Ihrer personenbezogenen Daten
        </p>

        <FadeInUp>
          <div className="space-y-10 text-white/85 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                1. Verantwortliche Stelle
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br />
                <br />
                Selin&apos;s Charisma
                <br />
                [Inhaber/in – Name eintragen]
                <br />
                Hauptstraße 71
                <br />
                69469 Weinheim
                <br />
                Telefon:{" "}
                <a href="tel:+496201871966" className="text-gold hover:underline">
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
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p className="mb-4">
                Beim Besuch unserer Website werden durch den auf Ihrem Endgerät
                zum Einsatz kommenden Browser automatisch Informationen an den
                Server unserer Website gesendet. Diese Informationen werden
                temporär in einem sogenannten Logfile gespeichert. Dabei werden
                folgende Informationen ohne Ihr Zutun erfasst und bis zur
                automatisierten Löschung gespeichert:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-white/80">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>verwendeter Browser und ggf. Betriebssystem sowie Name Ihres Access-Providers</li>
              </ul>
              <p className="mt-4">
                Die genannten Daten werden durch uns zu folgenden Zwecken
                verarbeitet: Gewährleistung eines reibungslosen Verbindungsaufbaus,
                Gewährleistung einer komfortablen Nutzung unserer Website,
                Auswertung der Systemsicherheit und -stabilität sowie zu
                weiteren administrativen Zwecken. Die Rechtsgrundlage hierfür
                ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                3. Weitergabe von Daten
              </h2>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen
                als den im Folgenden aufgeführten Zwecken findet nicht statt.
                Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
                Sie Ihre nach Art. 6 Abs. 1 lit. a DSGVO ausdrückliche
                Einwilligung dazu erteilt haben, die Weitergabe nach Art. 6 Abs. 1
                lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen erforderlich ist und kein Grund zur Annahme
                besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an
                der Nichtweitergabe Ihrer Daten haben, für den Fall, dass für
                die Weitergabe nach Art. 6 Abs. 1 lit. c DSGVO eine gesetzliche
                Verpflichtung besteht, sowie dies gesetzlich zulässig und nach
                Art. 6 Abs. 1 lit. b DSGVO für die Abwicklung von
                Vertragsverhältnissen mit Ihnen erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                4. Cookies
              </h2>
              <p>
                Wir setzen auf unserer Seite Cookies ein. Details hierzu finden
                Sie in unserer{" "}
                <Link href="/cookie-richtlinien" className="text-gold hover:underline">
                  Cookie-Richtlinie
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                5. Betroffenenrechte
              </h2>
              <p className="mb-4">Sie haben das Recht:</p>
              <ul className="list-disc pl-6 space-y-1 text-white/80">
                <li>
                  gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
                  personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger
                  oder Vervollständigung Ihrer bei uns gespeicherten
                  personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
                  personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
                  bereitgestellt haben, in einem strukturierten, gängigen und
                  maschinenlesbaren Format zu erhalten oder die Übermittlung an
                  einen anderen Verantwortlichen zu verlangen;
                </li>
                <li>
                  gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung
                  jederzeit gegenüber uns zu widerrufen;
                </li>
                <li>
                  gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu
                  beschweren.
                </li>
              </ul>
              <p className="mt-4">
                Zuständige Aufsichtsbehörde: Der Landesbeauftragte für den
                Datenschutz und die Informationsfreiheit Baden-Württemberg,
                Königstraße 10a, 70173 Stuttgart.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                6. Widerspruchsrecht
              </h2>
              <p>
                Sofern Ihre personenbezogenen Daten auf Grundlage von
                berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO
                verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO
                Widerspruch gegen die Verarbeitung Ihrer personenbezogenen
                Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus
                Ihrer besonderen Situation ergeben. Möchten Sie von Ihrem
                Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an
                info@selins-charisma.de.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                7. Datensicherheit
              </h2>
              <p>
                Wir verwenden innerhalb des Website-Besuchs das verbreitete
                SSL-Verfahren (Secure Socket Layer) in Verbindung mit der
                jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser
                unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes
                verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
                Darstellung des Schüssel- bzw. Schloss-Symbols in der
                Adresszeile Ihres Browsers. Wir bedienen uns im Übrigen
                geeigneter technischer und organisatorischer Sicherheitsmaßnahmen,
                um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen,
                teilweisen oder vollständigen Verlust, Zerstörung oder gegen den
                unbefugten Zugriff Dritter zu schützen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white font-medium mb-4 border-b border-gold/30 pb-2">
                8. Aktualität dieser Datenschutzerklärung
              </h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig (Stand: März 2025).
                Durch die Weiterentwicklung unserer Website oder aufgrund
                geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
                notwendig werden, diese Datenschutzerklärung anzupassen. Die
                jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser
                Seite abgerufen werden.
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
