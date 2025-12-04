import type { Module } from './types';

export const modules: Module[] = [
  {
    id: 'm1',
    title: 'Modul 1: Schule und Beruf',
    subModules: [
      {
        id: 'm1-k1',
        title: 'K1 Bildungsgänge',
        competences: [
          {
            id: 'c1-1',
            title: 'Bildungsgänge',
            description: 'Kenntnis und Beratung zu Bildungsgängen.',
            levels: {
              A: 'Ich habe einen Überblick über die Bildungsgänge.',
              B: 'Ich kann die Anforderungen der Bildungsgänge beschreiben.',
              C: 'Ich berate Schüler bezüglich der Bildungsgänge differenziert.',
              D: 'Ich entwickle Konzepte zur Laufbahnberatung weiter.'
            }
          }
        ]
      },
      {
        id: 'm1-k2',
        title: 'K2 Aktualität',
        competences: [
          {
            id: 'c1-2',
            title: 'Aktualität',
            description: 'Orientierung an aktuellen Entwicklungen.',
            levels: {
              A: 'Ich nehme aktuelle Entwicklungen wahr.',
              B: 'Ich integriere aktuelle Themen in meine Arbeit.',
              C: 'Ich diskutiere aktuelle Entwicklungen kritisch.',
              D: 'Ich initiiere Projekte zu aktuellen Themen.'
            }
          }
        ]
      },
      {
        id: 'm1-k3',
        title: 'K3 Qualitätsarbeit',
        competences: [
          {
            id: 'c1-3',
            title: 'Qualitätsarbeit',
            description: 'Beteiligung an der Qualitätsentwicklung.',
            levels: {
              A: 'Ich kenne die Konzepte der Qualitätsarbeit.',
              B: 'Ich wirke an Evaluationsmaßnahmen mit.',
              C: 'Ich bringe Vorschläge zur Qualitätsverbesserung ein.',
              D: 'Ich leite Arbeitsgruppen zur Qualitätsentwicklung.'
            }
          }
        ]
      },
      {
        id: 'm1-k4',
        title: 'K4 Rechtsrahmen',
        competences: [
          {
            id: 'c1-4',
            title: 'Rechtsrahmen',
            description: 'Anwendung schulrechtlicher Bestimmungen.',
            levels: {
              A: 'Ich kenne die wichtigsten Rechtsvorschriften.',
              B: 'Ich handele in Standardsituationen rechtssicher.',
              C: 'Ich wende Rechtsvorschriften auch in komplexen Fällen an.',
              D: 'Ich unterstütze Kollegen in rechtlichen Fragen.'
            }
          }
        ]
      },
      {
        id: 'm1-k5',
        title: 'K5 Rolle Lernende',
        competences: [
          {
            id: 'c1-5',
            title: 'Rolle Lernende',
            description: 'Verständnis der Rolle der Lernenden.',
            levels: {
              A: 'Ich nehme die Perspektive der Lernenden wahr.',
              B: 'Ich berücksichtige die Rolle der Lernenden im Unterricht.',
              C: 'Ich fördere die aktive Rolle der Lernenden.',
              D: 'Ich entwickle Konzepte zur Stärkung der Lernendenrolle.'
            }
          }
        ]
      },
      {
        id: 'm1-k6',
        title: 'K6 Rolle Lehrende',
        competences: [
          {
            id: 'c1-6',
            title: 'Rolle Lehrende',
            description: 'Reflexion der eigenen Lehrerrolle.',
            levels: {
              A: 'Ich kenne die Erwartungen an die Lehrerrolle.',
              B: 'Ich fülle meine Rolle bewusst aus.',
              C: 'Ich reflektiere mein Rollenhandeln kritisch.',
              D: 'Ich entwickle mein professionelles Selbstverständnis weiter.'
            }
          }
        ]
      },
      {
        id: 'm1-k7',
        title: 'K7 Integration',
        competences: [
          {
            id: 'c1-7',
            title: 'Integration',
            description: 'Gestaltung von Integrationsprozessen.',
            levels: {
              A: 'Ich kenne die Grundlagen der Integration.',
              B: 'Ich berücksichtige Integrationsaspekte im Unterricht.',
              C: 'Ich fördere aktiv die Integration aller Schüler.',
              D: 'Ich entwickle inklusive Konzepte für die Schule.'
            }
          }
        ]
      },
      {
        id: 'm1-k8',
        title: 'K8 Kooperation',
        competences: [
          {
            id: 'c1-8',
            title: 'Kooperation',
            description: 'Zusammenarbeit mit Kollegen und Partnern.',
            levels: {
              A: 'Ich bin bereit zur Kooperation.',
              B: 'Ich arbeite in Teams konstruktiv mit.',
              C: 'Ich initiiere Kooperationsprojekte.',
              D: 'Ich vernetze die Schule mit externen Partnern.'
            }
          }
        ]
      },
      {
        id: 'm1-k9',
        title: 'K9 Anforderungen',
        competences: [
          {
            id: 'c1-9',
            title: 'Anforderungen',
            description: 'Umgang mit beruflichen Anforderungen.',
            levels: {
              A: 'Ich kenne die Anforderungen des Berufs.',
              B: 'Ich bewältige die Anforderungen im Alltag.',
              C: 'Ich gehe professionell mit Belastungen um.',
              D: 'Ich entwickle Strategien zur Gesunderhaltung.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'm2',
    title: 'Modul 2: Sozialisation, Erziehung, Bildung',
    subModules: [
      {
        id: 'm2-k1',
        title: 'K1 Sozialisierung',
        competences: [
          {
            id: 'c2-1',
            title: 'Sozialisierung',
            description: 'Gestaltung sozialer Prozesse.',
            levels: {
              A: 'Ich nehme soziale Prozesse wahr.',
              B: 'Ich reagiere angemessen auf soziale Dynamiken.',
              C: 'Ich fördere aktiv ein positives Sozialklima.',
              D: 'Ich entwickle Konzepte zum sozialen Lernen.'
            }
          }
        ]
      },
      {
        id: 'm2-k2',
        title: 'K2 Förderbedarf',
        competences: [
          {
            id: 'c2-2',
            title: 'Förderbedarf',
            description: 'Erkennen und Umgang mit Förderbedarf.',
            levels: {
              A: 'Ich erkenne offensichtlichen Förderbedarf.',
              B: 'Ich leite erste Fördermaßnahmen ein.',
              C: 'Ich erstelle differenzierte Förderpläne.',
              D: 'Ich evaluiere Förderkonzepte.'
            }
          }
        ]
      },
      {
        id: 'm2-k3',
        title: 'K3 Beratung',
        competences: [
          {
            id: 'c2-3',
            title: 'Beratung',
            description: 'Beratung in Erziehungsfragen.',
            levels: {
              A: 'Ich führe einfache Beratungsgespräche.',
              B: 'Ich berate bei alltäglichen Problemen.',
              C: 'Ich führe schwierige Gespräche lösungsorientiert.',
              D: 'Ich kooperiere mit Beratungseinrichtungen.'
            }
          }
        ]
      },
      {
        id: 'm2-k4',
        title: 'K4 Werte Normen',
        competences: [
          {
            id: 'c2-4',
            title: 'Werte und Normen',
            description: 'Vermittlung von Werten und Normen.',
            levels: {
              A: 'Ich kenne die relevanten Werte und Normen.',
              B: 'Ich lebe Werte im Unterricht vor.',
              C: 'Ich thematisiere Wertekonflikte.',
              D: 'Ich initiiere Projekte zur Werteerziehung.'
            }
          }
        ]
      },
      {
        id: 'm2-k5',
        title: 'K5 Verantwortung',
        competences: [
          {
            id: 'c2-5',
            title: 'Verantwortung',
            description: 'Übernahme von Verantwortung.',
            levels: {
              A: 'Ich nehme meine Verantwortung wahr.',
              B: 'Ich fördere Verantwortungsübernahme bei Schülern.',
              C: 'Ich übertrage Verantwortung an Schüler.',
              D: 'Ich entwickle Konzepte zur Verantwortungsförderung.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'm3',
    title: 'Modul 3: Kommunikation und Interaktion',
    subModules: [
      {
        id: 'm3-k1',
        title: 'K1 Gesprächsführung',
        competences: [
          {
            id: 'c3-1',
            title: 'Gesprächstechniken',
            description: 'Einsatz von Gesprächstechniken.',
            levels: {
              A: 'Ich kenne grundlegende Gesprächstechniken.',
              B: 'Ich wende Gesprächstechniken an.',
              C: 'Ich führe Gespräche professionell.',
              D: 'Ich leite komplexe Gespräche souverän.'
            }
          }
        ]
      },
      {
        id: 'm3-k2',
        title: 'K2 Stimmungen',
        competences: [
          {
            id: 'c3-2',
            title: 'Stimmungen',
            description: 'Wahrnehmung und Umgang mit Stimmungen.',
            levels: {
              A: 'Ich nehme Stimmungen wahr.',
              B: 'Ich gehe auf Stimmungen ein.',
              C: 'Ich beeinflusse die Stimmung positiv.',
              D: 'Ich nutze Stimmungen für Lernprozesse.'
            }
          }
        ]
      },
      {
        id: 'm3-k3',
        title: 'K3 Sprache',
        competences: [
          {
            id: 'c3-3',
            title: 'Sprache',
            description: 'Sprachvorbild und Sprachförderung.',
            levels: {
              A: 'Ich drücke mich verständlich aus.',
              B: 'Ich achte auf fachsprachliche Korrektheit.',
              C: 'Ich fördere die Sprachkompetenz der Schüler.',
              D: 'Ich entwickle sprachsensible Konzepte.'
            }
          }
        ]
      },
      {
        id: 'm3-k4',
        title: 'K4 Medieneinsatz',
        competences: [
          {
            id: 'c3-4',
            title: 'Medieneinsatz',
            description: 'Didaktischer Einsatz von Medien.',
            levels: {
              A: 'Ich bediene gängige Medien.',
              B: 'Ich wähle Medien passend aus.',
              C: 'Ich leite zum kritischen Medienumgang an.',
              D: 'Ich entwickle Medienkonzepte.'
            }
          }
        ]
      },
      {
        id: 'm3-k5',
        title: 'K5 Konflikte',
        competences: [
          {
            id: 'c3-5',
            title: 'Konflikte',
            description: 'Umgang mit Konflikten.',
            levels: {
              A: 'Ich erkenne Konflikte.',
              B: 'Ich interveniere angemessen.',
              C: 'Ich vermittle in Konflikten.',
              D: 'Ich implementiere Präventionskonzepte.'
            }
          }
        ]
      },
      {
        id: 'm3-k6',
        title: 'K6 Lernklima',
        competences: [
          {
            id: 'c3-6',
            title: 'Lernklima',
            description: 'Gestaltung des Lernklimas.',
            levels: {
              A: 'Ich achte auf ein ruhiges Lernklima.',
              B: 'Ich sorge für eine förderliche Arbeitsatmosphäre.',
              C: 'Ich schaffe ein motivierendes Lernklima.',
              D: 'Ich entwickle das Lernklima nachhaltig weiter.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'm4',
    title: 'Modul 4: Unterricht',
    subModules: [
      {
        id: 'm4-k1',
        title: 'K1 Kompetenz',
        competences: [
          {
            id: 'c4-1',
            title: 'Kompetenzorientierung',
            description: 'Ausrichtung am Kompetenzerwerb.',
            levels: {
              A: 'Ich kenne die Kompetenzbereiche.',
              B: 'Ich plane kompetenzorientiert.',
              C: 'Ich fördere individuelle Kompetenzen.',
              D: 'Ich entwickle kompetenzorientierte Curricula.'
            }
          }
        ]
      },
      {
        id: 'm4-k2',
        title: 'K2 Didaktik',
        competences: [
          {
            id: 'c4-2',
            title: 'Didaktik',
            description: 'Didaktische Planung und Durchführung.',
            levels: {
              A: 'Ich plane Stunden strukturiert.',
              B: 'Ich begründe didaktische Entscheidungen.',
              C: 'Ich variiere didaktische Methoden.',
              D: 'Ich entwickle didaktische Konzepte weiter.'
            }
          }
        ]
      },
      {
        id: 'm4-k3',
        title: 'K3 Aufbereitung',
        competences: [
          {
            id: 'c4-3',
            title: 'Aufbereitung',
            description: 'Didaktische Aufbereitung von Inhalten.',
            levels: {
              A: 'Ich bereite Inhalte verständlich auf.',
              B: 'Ich reduziere didaktisch angemessen.',
              C: 'Ich bereite Inhalte differenziert auf.',
              D: 'Ich erstelle eigene Lernmaterialien.'
            }
          }
        ]
      },
      {
        id: 'm4-k4',
        title: 'K4 Lernumgebung',
        competences: [
          {
            id: 'c4-4',
            title: 'Lernumgebung',
            description: 'Gestaltung der Lernumgebung.',
            levels: {
              A: 'Ich nutze die vorhandene Lernumgebung.',
              B: 'Ich gestalte die Lernumgebung funktional.',
              C: 'Ich schaffe eine anregende Lernumgebung.',
              D: 'Ich entwickle Konzepte zur Raumgestaltung.'
            }
          }
        ]
      },
      {
        id: 'm4-k5',
        title: 'K5 Vernetzung',
        competences: [
          {
            id: 'c4-5',
            title: 'Vernetzung',
            description: 'Vernetzung von Wissen.',
            levels: {
              A: 'Ich stelle Bezüge her.',
              B: 'Ich vernetze Inhalte sinnvoll.',
              C: 'Ich fördere vernetztes Denken.',
              D: 'Ich plane fächerübergreifende Projekte.'
            }
          }
        ]
      },
      {
        id: 'm4-k6',
        title: 'K6 Eröffnung',
        competences: [
          {
            id: 'c4-6',
            title: 'Eröffnung',
            description: 'Unterrichtseinstiege gestalten.',
            levels: {
              A: 'Ich wähle passende Einstiege.',
              B: 'Ich motiviere durch Einstiege.',
              C: 'Ich aktiviere Vorwissen gezielt.',
              D: 'Ich entwickle innovative Einstiegsszenarien.'
            }
          }
        ]
      },
      {
        id: 'm4-k7',
        title: 'K7 Fehlerkultur',
        competences: [
          {
            id: 'c4-7',
            title: 'Fehlerkultur',
            description: 'Umgang mit Fehlern.',
            levels: {
              A: 'Ich korrigiere Fehler sachlich.',
              B: 'Ich thematisiere Fehlerursachen.',
              C: 'Ich fördere eine positive Fehlerkultur.',
              D: 'Ich nutze Fehleranalysen zur Entwicklung.'
            }
          }
        ]
      },
      {
        id: 'm4-k8',
        title: 'K8 Selbsttätigkeit',
        competences: [
          {
            id: 'c4-8',
            title: 'Selbsttätigkeit',
            description: 'Förderung der Selbsttätigkeit.',
            levels: {
              A: 'Ich lasse Schüler selbstständig arbeiten.',
              B: 'Ich leite zu selbstständigem Arbeiten an.',
              C: 'Ich fördere selbstgesteuerte Lernprozesse.',
              D: 'Ich ermögliche offene Lernformen.'
            }
          }
        ]
      },
      {
        id: 'm4-k9',
        title: 'K9 Nachhaltigkeit',
        competences: [
          {
            id: 'c4-9',
            title: 'Nachhaltigkeit',
            description: 'Sicherung von Lernergebnissen.',
            levels: {
              A: 'Ich sichere Ergebnisse.',
              B: 'Ich übe und wiederhole sinnvoll.',
              C: 'Ich fördere nachhaltiges Lernen.',
              D: 'Ich evaluiere den Lernerfolg langfristig.'
            }
          }
        ]
      },
      {
        id: 'm4-k10',
        title: 'K10 Evaluation',
        competences: [
          {
            id: 'c4-10',
            title: 'Evaluation',
            description: 'Evaluation von Unterricht.',
            levels: {
              A: 'Ich hole Feedback ein.',
              B: 'Ich reflektiere meinen Unterricht.',
              C: 'Ich nutze Evaluationsergebnisse zur Verbesserung.',
              D: 'Ich etabliere Feedbackkulturen.'
            }
          }
        ]
      },
      {
        id: 'm4-k11',
        title: 'K11 Differenzierung',
        competences: [
          {
            id: 'c4-11',
            title: 'Differenzierung',
            description: 'Umgang mit Heterogenität.',
            levels: {
              A: 'Ich erkenne Unterschiede.',
              B: 'Ich differenziere Aufgaben.',
              C: 'Ich individualisiere Lernwege.',
              D: 'Ich entwickle inklusive Unterrichtskonzepte.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'm5',
    title: 'Modul 5: Beratung, Diagnose und Bewertung',
    subModules: [
      {
        id: 'm5-k1',
        title: 'K1 Diagnostizieren',
        competences: [
          {
            id: 'c5-1',
            title: 'Diagnostizieren',
            description: 'Diagnose von Lernvoraussetzungen.',
            levels: {
              A: 'Ich nutze einfache Diagnoseinstrumente.',
              B: 'Ich leite Maßnahmen aus Diagnosen ab.',
              C: 'Ich setze vielfältige Diagnoseverfahren ein.',
              D: 'Ich entwickle Diagnosekonzepte.'
            }
          }
        ]
      },
      {
        id: 'm5-k2',
        title: 'K2 Fördern',
        competences: [
          {
            id: 'c5-2',
            title: 'Fördern',
            description: 'Individuelle Förderung.',
            levels: {
              A: 'Ich erkenne Förderbedarf.',
              B: 'Ich erstelle Förderpläne.',
              C: 'Ich fördere individuell und differenziert.',
              D: 'Ich evaluiere Fördermaßnahmen.'
            }
          }
        ]
      },
      {
        id: 'm5-k3',
        title: 'K3 Beraten',
        competences: [
          {
            id: 'c5-3',
            title: 'Beraten',
            description: 'Beratung von Schülern und Eltern.',
            levels: {
              A: 'Ich informiere über Leistungen.',
              B: 'Ich berate strukturiert.',
              C: 'Ich berate lösungsorientiert.',
              D: 'Ich koordiniere Beratungsnetzwerke.'
            }
          }
        ]
      },
      {
        id: 'm5-k4',
        title: 'K4 Bewerten',
        competences: [
          {
            id: 'c5-4',
            title: 'Bewerten',
            description: 'Leistungsbewertung.',
            levels: {
              A: 'Ich kenne Bewertungsgrundsätze.',
              B: 'Ich bewerte transparent.',
              C: 'Ich nutze vielfältige Bewertungsformen.',
              D: 'Ich entwickle Bewertungskonzepte weiter.'
            }
          }
        ]
      }
    ]
  }
];
