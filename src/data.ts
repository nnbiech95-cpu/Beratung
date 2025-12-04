import type { Module } from './types';

export const modules: Module[] = [
  {
    id: 'm1',
    title: 'Modul 1: Schule und Beruf',
    subModules: [
      {
        id: 'm1-k1',
        title: '1.1 Bildungsgänge',
        competences: [
          {
            id: 'c1-1',
            title: 'Kenntnis der Bildungsgänge',
            description: 'Ich kenne die verschiedenen Bildungsgänge und ihre Anforderungen.',
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
        title: '1.2 Aktualität',
        competences: [
          {
            id: 'c1-2',
            title: 'Aktuelle Entwicklungen',
            description: 'Ich orientiere mein Handeln an aktuellen pädagogischen und gesellschaftlichen Entwicklungen.',
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
        title: '1.3 Qualitätsarbeit',
        competences: [
          {
            id: 'c1-3',
            title: 'Qualitätsentwicklung',
            description: 'Ich beteilige mich an der Qualitätsentwicklung der Schule.',
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
        title: '1.4 Rechtsrahmen',
        competences: [
          {
            id: 'c1-4',
            title: 'Schulrecht',
            description: 'Ich wende schulrechtliche Bestimmungen sicher an.',
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
        title: '1.5 Rollenverständnis',
        competences: [
          {
            id: 'c1-5',
            title: 'Lehrerrolle',
            description: 'Ich reflektiere mein Rollenverständnis als Lehrkraft.',
            levels: {
              A: 'Ich kenne die Erwartungen an die Lehrerrolle.',
              B: 'Ich fülle meine Rolle bewusst aus.',
              C: 'Ich reflektiere mein Rollenhandeln kritisch.',
              D: 'Ich entwickle mein professionelles Selbstverständnis weiter.'
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
        title: '2.1 Sozialisierung',
        competences: [
          {
            id: 'c2-1',
            title: 'Soziale Prozesse',
            description: 'Ich gestalte soziale Prozesse in der Lerngruppe.',
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
        title: '2.2 Lerngruppen',
        competences: [
          {
            id: 'c2-2',
            title: 'Gruppenleitung',
            description: 'Ich leite Lerngruppen professionell.',
            levels: {
              A: 'Ich nehme die Lerngruppe als Ganzes wahr.',
              B: 'Ich gehe auf die Bedürfnisse der Lerngruppe ein.',
              C: 'Ich steuere Gruppenprozesse zielgerichtet.',
              D: 'Ich coache Lerngruppen in ihrer Entwicklung.'
            }
          }
        ]
      },
      {
        id: 'm2-k3',
        title: '2.3 Beratung (Erziehung)',
        competences: [
          {
            id: 'c2-3',
            title: 'Erziehungsberatung',
            description: 'Ich berate Eltern und Schüler in Erziehungsfragen.',
            levels: {
              A: 'Ich führe einfache Elterngespräche.',
              B: 'Ich berate bei alltäglichen Erziehungsproblemen.',
              C: 'Ich führe schwierige Beratungsgespräche lösungsorientiert.',
              D: 'Ich kooperiere mit außerschulischen Beratungseinrichtungen.'
            }
          }
        ]
      },
      {
        id: 'm2-k4',
        title: '2.4 Werthaltungen',
        competences: [
          {
            id: 'c2-4',
            title: 'Wertevermittlung',
            description: 'Ich vermittle demokratische Werte und Normen.',
            levels: {
              A: 'Ich kenne die Werte des Grundgesetzes.',
              B: 'Ich lebe diese Werte im Unterricht vor.',
              C: 'Ich thematisiere Wertekonflikte im Unterricht.',
              D: 'Ich initiiere Projekte zur Demokratieerziehung.'
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
        title: '3.1 Gesprächsführung',
        competences: [
          {
            id: 'c3-1',
            title: 'Gesprächstechniken',
            description: 'Ich setze Gesprächstechniken zielgerichtet ein.',
            levels: {
              A: 'Ich kenne grundlegende Gesprächstechniken.',
              B: 'Ich wende Gesprächstechniken in Übungssituationen an.',
              C: 'Ich führe Gespräche professionell und zielorientiert.',
              D: 'Ich leite komplexe Beratungsgespräche souverän.'
            }
          }
        ]
      },
      {
        id: 'm3-k2',
        title: '3.2 Sprache',
        competences: [
          {
            id: 'c3-2',
            title: 'Sprachvorbild',
            description: 'Ich bin mir meiner Wirkung als Sprachvorbild bewusst.',
            levels: {
              A: 'Ich drücke mich verständlich aus.',
              B: 'Ich achte auf fachsprachliche Korrektheit.',
              C: 'Ich fördere die Sprachkompetenz der Schüler.',
              D: 'Ich entwickle sprachsensible Unterrichtskonzepte.'
            }
          }
        ]
      },
      {
        id: 'm3-k3',
        title: '3.3 Medieneinsatz',
        competences: [
          {
            id: 'c3-3',
            title: 'Medienkompetenz',
            description: 'Ich setze Medien didaktisch sinnvoll ein.',
            levels: {
              A: 'Ich bediene gängige Medien sicher.',
              B: 'Ich wähle Medien passend zum Lernziel aus.',
              C: 'Ich leite Schüler zum kritischen Medienumgang an.',
              D: 'Ich entwickle Medienkonzepte für den Unterricht.'
            }
          }
        ]
      },
      {
        id: 'm3-k4',
        title: '3.4 Konflikte',
        competences: [
          {
            id: 'c3-4',
            title: 'Konfliktmanagement',
            description: 'Ich gehe konstruktiv mit Konflikten um.',
            levels: {
              A: 'Ich erkenne Konflikte frühzeitig.',
              B: 'Ich interveniere bei Störungen angemessen.',
              C: 'Ich vermittle in Konfliktsituationen (Mediation).',
              D: 'Ich implementiere Konzepte zur Gewaltprävention.'
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
        title: '4.1 Kompetenzförderung',
        competences: [
          {
            id: 'c4-1',
            title: 'Kompetenzorientierung',
            description: 'Ich richte meinen Unterricht an Kompetenzen aus.',
            levels: {
              A: 'Ich kenne die Kompetenzbereiche des Fachs.',
              B: 'Ich plane Unterrichtsstunden kompetenzorientiert.',
              C: 'Ich fördere individuelle Kompetenzentwicklungen.',
              D: 'Ich entwickle kompetenzorientierte Curricula.'
            }
          }
        ]
      },
      {
        id: 'm4-k2',
        title: '4.2 Didaktik',
        competences: [
          {
            id: 'c4-2',
            title: 'Unterrichtsplanung',
            description: 'Ich plane Unterricht fach- und sachgerecht.',
            levels: {
              A: 'Ich plane einzelne Stunden strukturiert.',
              B: 'Ich plane Unterrichtsreihen sinnvoll.',
              C: 'Ich differenziere und individualisiere Lernprozesse.',
              D: 'Ich evaluiere und optimiere meine Unterrichtsplanung.'
            }
          }
        ]
      },
      {
        id: 'm4-k3',
        title: '4.3 Schülerorientierung',
        competences: [
          {
            id: 'c4-3',
            title: 'Lernvoraussetzungen',
            description: 'Ich berücksichtige die Lernvoraussetzungen der Schüler.',
            levels: {
              A: 'Ich nehme die Interessen der Schüler wahr.',
              B: 'Ich knüpfe an die Lebenswelt der Schüler an.',
              C: 'Ich beteilige Schüler an der Unterrichtsgestaltung.',
              D: 'Ich fördere selbstgesteuertes Lernen.'
            }
          }
        ]
      },
      {
        id: 'm4-k4',
        title: '4.4 Fehlerkultur',
        competences: [
          {
            id: 'c4-4',
            title: 'Umgang mit Fehlern',
            description: 'Ich nutze Fehler als Lernchance.',
            levels: {
              A: 'Ich korrigiere Fehler sachlich.',
              B: 'Ich thematisiere Fehlerursachen.',
              C: 'Ich fördere eine positive Fehlerkultur.',
              D: 'Ich nutze Fehleranalysen zur Unterrichtsentwicklung.'
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
        title: '5.1 Diagnostizieren',
        competences: [
          {
            id: 'c5-1',
            title: 'Lernstandserhebung',
            description: 'Ich diagnostiziere Lernvoraussetzungen und Lernprozesse.',
            levels: {
              A: 'Ich nutze einfache Diagnoseinstrumente.',
              B: 'Ich leite Fördermaßnahmen aus Diagnosen ab.',
              C: 'Ich setze vielfältige Diagnoseverfahren ein.',
              D: 'Ich entwickle Diagnosekonzepte für die Schule.'
            }
          }
        ]
      },
      {
        id: 'm5-k2',
        title: '5.2 Fördern',
        competences: [
          {
            id: 'c5-2',
            title: 'Individuelle Förderung',
            description: 'Ich fördere Schülerinnen und Schüler individuell.',
            levels: {
              A: 'Ich erkenne Förderbedarf.',
              B: 'Ich erstelle einfache Förderpläne.',
              C: 'Ich setze Binnendifferenzierung gezielt ein.',
              D: 'Ich evaluiere die Wirksamkeit von Fördermaßnahmen.'
            }
          }
        ]
      },
      {
        id: 'm5-k3',
        title: '5.3 Beraten',
        competences: [
          {
            id: 'c5-3',
            title: 'Beratungskompetenz',
            description: 'Ich berate Schüler und Eltern professionell.',
            levels: {
              A: 'Ich informiere über Leistungsstände.',
              B: 'Ich führe Beratungsgespräche strukturiert.',
              C: 'Ich berate lösungsorientiert bei Lernschwierigkeiten.',
              D: 'Ich koordiniere das Beratungsnetzwerk der Schule.'
            }
          }
        ]
      },
      {
        id: 'm5-k4',
        title: '5.4 Bewerten',
        competences: [
          {
            id: 'c5-4',
            title: 'Leistungsbewertung',
            description: 'Ich bewerte Schülerleistungen transparent und gerecht.',
            levels: {
              A: 'Ich kenne die Bewertungsgrundsätze.',
              B: 'Ich mache Bewertungskriterien transparent.',
              C: 'Ich nutze vielfältige Formen der Leistungsmessung.',
              D: 'Ich entwickle Konzepte zur Leistungsmessung weiter.'
            }
          }
        ]
      }
    ]
  }
];
