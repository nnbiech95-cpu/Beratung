import type { UserProfile } from './types';

export const demoProfile: UserProfile = {
  id: 'demo-profile',
  name: 'Musterreferendar/in',
  color: '#3b82f6',
  ratings: {
    'c1-1': {
      competenceId: 'c1-1',
      level: 8,
      note: 'Beleg: 📄 Verlaufsplan\n\nExemplarische Feinplanung einer Unterrichtseinheit (BGY 25a) unter Berücksichtigung curricularer Vorgaben (LF 2).',
      isPriority: false
    },
    'c1-2': {
      competenceId: 'c1-2',
      level: 9,
      note: 'Beleg: 💻 Bilanz-App\n\nEntwicklung innovativer OER-Lernsoftware (React/Vite) zur didaktischen Modernisierung des Rechnungswesens.',
      isPriority: true
    },
    'c1-3': {
      competenceId: 'c1-3',
      level: 8,
      note: 'Beleg: 💻 ESP32-App\n\nBereitstellung barrierefreier, responsiver Lernanwendungen (Green IT), die technische Hürden im Unterricht minimieren.',
      isPriority: false
    },
    'c1-4': {
      competenceId: 'c1-4',
      level: 8,
      note: 'Beleg: 💻 ESP32-App\n\nPräventive Sicherheitserziehung: Digitale Simulation von Gefahren (Kurzschluss) VOR der realen Arbeit (Unfallverhütung).',
      isPriority: false
    },
    'c1-5': {
      competenceId: 'c1-5',
      level: 7,
      note: 'Beleg: 📄 Verlaufsplan\n\nSchriftliche Reflexion (siehe Fußzeile Verlaufsplan): Kritische Auseinandersetzung mit dem eigenen Zeitmanagement und Schülerfeedback.',
      isPriority: false
    },
    'c1-6': {
      competenceId: 'c1-6',
      level: 8,
      note: 'Beleg: 💻 Lehrstil-Tool\n\nEvidenzbasierte Reflexion der eigenen Lehrerrolle (Autorität vs. Demokratie) auf Basis von Hattie & Baumrind.',
      isPriority: false
    },
    'c1-7': {
      competenceId: 'c1-7',
      level: 9,
      note: 'Beleg: ⚡ E-Mail Screenshot\n\nBereitstellung eigener Materialien (Apps & Verlaufspläne) für die Fachschaft per E-Mail (Sharing Culture).',
      isPriority: false
    },
    'c1-8': {
      competenceId: 'c1-8',
      level: 8,
      note: 'Beleg: ⚡ E-Mail Screenshot\n\nProfessionelle Korrespondenz mit Ausbildungsbetrieben/Eltern (anonymisiert).',
      isPriority: false
    },
    'c1-9': {
      competenceId: 'c1-9',
      level: 8,
      note: 'Beleg: 💻 Lehrstil-Tool\n\nTheoretische Fundierung der eigenen Resilienz und Burnout-Prävention durch Balance von Nähe und Distanz.',
      isPriority: false
    },
    'c2-1': {
      competenceId: 'c2-1',
      level: 8,
      note: 'Beleg: 💻 Bilanz-App\n\nFörderung ökonomischer Mündigkeit durch Simulation von Finanzentscheidungen im \'ReichGeldSpiel\'.',
      isPriority: false
    },
    'c2-2': {
      competenceId: 'c2-2',
      level: 8,
      note: 'Beleg: 📄 Verlaufsplan\n\nPlanung von Binnendifferenzierung durch \'Hilfekarten\' und \'Tippkarten\' im Unterrichtsverlauf (siehe Spalte Medien).',
      isPriority: false
    },
    'c2-3': {
      competenceId: 'c2-3',
      level: 7,
      note: 'Beleg: ⚡ Aktennotiz\n\nDokumentation der Zusammenarbeit mit der Schulsozialarbeit zur individuellen Förderung.',
      isPriority: false
    },
    'c2-4': {
      competenceId: 'c2-4',
      level: 8,
      note: 'Beleg: 💻 Lehrstil-Tool\n\nAnalyse von Konfliktpotentialen im Klassenraum; Förderung einer demokratischen Wertekultur (Partizipation).',
      isPriority: false
    },
    'c2-5': {
      competenceId: 'c2-5',
      level: 8,
      note: 'Beleg: 💻 Bilanz-App\n\nFörderung der Eigenverantwortung: Schüler erhalten spiegelbildliches Feedback durch Progress-Tracking.',
      isPriority: false
    },
    'c3-1': {
      competenceId: 'c3-1',
      level: 7,
      note: 'Beleg: 📄 Verlaufsplan\n\nSteuerung von Unterrichtsgesprächen (UG) in der Erarbeitungsphase zur Aktivierung von Vorwissen.',
      isPriority: false
    },
    'c3-2': {
      competenceId: 'c3-2',
      level: 8,
      note: 'Beleg: 💻 Lehrstil-Tool\n\nSensibilisierung für die Auswirkung des eigenen Verhaltens auf das Klassenklima und das emotionale Wohlbefinden.',
      isPriority: false
    },
    'c3-3': {
      competenceId: 'c3-3',
      level: 8,
      note: 'Beleg: 🎨 Tafelbild\n\nSicherung korrekter Fachterminologie (Nacherfüllung, Rücktritt, Minderung) durch visuelle Strukturierung.',
      isPriority: false
    },
    'c3-4': {
      competenceId: 'c3-4',
      level: 10,
      note: 'Beleg: 💻 Bilanz-App\n\nFull-Stack-Kompetenz: Wechsel vom Medien-Konsumenten zum Produzenten komplexer didaktischer Software.',
      isPriority: true
    },
    'c3-5': {
      competenceId: 'c3-5',
      level: 8,
      note: 'Beleg: ⚡ Gedächtnisprotokoll\n\nKonstruktive Lösung von Unterrichtsstörungen durch Vier-Augen-Gespräche und Zielvereinbarungen.',
      isPriority: false
    },
    'c3-6': {
      competenceId: 'c3-6',
      level: 9,
      note: 'Beleg: 💻 Lehrstil-Tool\n\nWissenschaftliche Fundierung eines lernförderlichen Klimas (vgl. Hattie: d=0.52) durch Balance von Wärme und Struktur.',
      isPriority: false
    },
    'c4-1': {
      competenceId: 'c4-1',
      level: 8,
      note: 'Beleg: 🎨 Tafelbild\n\nVisualisierung komplexer Rechtszusammenhänge (§ 437 BGB) fördert den Aufbau mentaler Modelle bei den SuS.',
      isPriority: false
    },
    'c4-2': {
      competenceId: 'c4-2',
      level: 8,
      note: 'Beleg: 📄 Verlaufsplan\n\nMethodenvielfalt: Wechsel zwischen Storytelling (Einstieg), Unterrichtsgespräch und kooperativer Fallarbeit (PA).',
      isPriority: false
    },
    'c4-3': {
      competenceId: 'c4-3',
      level: 8,
      note: 'Beleg: 📄 Verlaufsplan\n\nLebensweltbezug im Einstieg (\'Sneaker-Fail\'): Anknüpfung an reale Erfahrungswelt der Lernenden zur Sinnstiftung.',
      isPriority: false
    },
    'c4-4': {
      competenceId: 'c4-4',
      level: 9,
      note: 'Beleg: 💻 Bilanz-App\n\nGestaltung zeit- und ortsunabhängiger digitaler Lernräume (Flipped Classroom Szenarien).',
      isPriority: true
    },
    'c4-5': {
      competenceId: 'c4-5',
      level: 9,
      note: 'Beleg: 💻 ESP32-App\n\nFächerübergreifender Ansatz: Verknüpfung von Informatik (Logik), Physik (Elektrik) und Englisch (Datasheets).',
      isPriority: false
    },
    'c4-6': {
      competenceId: 'c4-6',
      level: 8,
      note: 'Beleg: 📄 Verlaufsplan\n\nInszenierung eines stummen Impulses mit Realobjekt (Sneaker) zur Weckung von Neugier und Betroffenheit.',
      isPriority: false
    },
    'c4-7': {
      competenceId: 'c4-7',
      level: 9,
      note: 'Beleg: 💻 ESP32-App\n\nSystematisierung der Fehlersuche: Der \'Troubleshooting-Baum\' etabliert Fehler als analytische Lernanlässe (Debugging).',
      isPriority: false
    },
    'c4-8': {
      competenceId: 'c4-8',
      level: 8,
      note: 'Beleg: 💻 Lehrstil-Tool\n\nTheoretische Fundierung selbstregulierten Lernens: Übergang von enger Führung zu begleiteter Autonomie.',
      isPriority: false
    },
    'c4-9': {
      competenceId: 'c4-9',
      level: 7,
      note: 'Beleg: 📄 Verlaufsplan\n\nSicherung des Lernerfolgs durch Transferaufgabe (E-Mail schreiben) am Stundenende.',
      isPriority: false
    },
    'c4-10': {
      competenceId: 'c4-10',
      level: 8,
      note: 'Beleg: ⚡ Edkimo PDF\n\nDatengestützte Evaluation der Unterrichtsqualität durch anonymes Schülerfeedback.',
      isPriority: false
    },
    'c4-11': {
      competenceId: 'c4-11',
      level: 9,
      note: 'Beleg: 💻 Bilanz-App\n\nDigitale Adaptivität: Software passt sich durch verschiedene Levels dem Lerntempo an.',
      isPriority: false
    },
    'c5-1': {
      competenceId: 'c5-1',
      level: 9,
      note: 'Beleg: 💻 Bilanz-App\n\nEinsatz von Learning Analytics (Quiz-Statistiken) zur datengestützten Diagnose von Lernständen in Echtzeit.',
      isPriority: true
    },
    'c5-2': {
      competenceId: 'c5-2',
      level: 9,
      note: 'Beleg: 💻 ESP32-App\n\nIntegrierte Fördermaßnahmen: \'Just-in-Time\' Erklärungen und Warnhinweise bei Fehlbedienung.',
      isPriority: false
    },
    'c5-3': {
      competenceId: 'c5-3',
      level: 9,
      note: 'Beleg: 💻 Lehrstil-Tool\n\nApp als Reflexionsinstrument: Das Tool berät Nutzer (Lehrer) datengestützt zur Optimierung ihres Führungsstils.',
      isPriority: false
    },
    'c5-4': {
      competenceId: 'c5-4',
      level: 8,
      note: 'Beleg: ⚡ Korrektur (Foto)\n\nTransparente Leistungsbewertung anhand eines Erwartungshorizonts; formative Rückmeldung auf Arbeitsblättern.',
      isPriority: false
    }
  }
};
