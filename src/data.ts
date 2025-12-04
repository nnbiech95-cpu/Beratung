import type { Module } from './types';

export const modules: Module[] = [
  {
    id: 'm1',
    title: 'Modul 1: Schule und Beruf',
    subModules: [
      {
        id: 'm1-k1',
        title: 'Bildungsgänge',
        competences: [
          {
            id: 'c1',
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
        title: 'Rechtsrahmen',
        competences: [
          {
            id: 'c2',
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
      }
    ]
  },
  {
    id: 'm2',
    title: 'Modul 2: Sozialisation, Erziehung, Bildung',
    subModules: [
      {
        id: 'm2-k1',
        title: 'Sozialisierung',
        competences: [
          {
            id: 'c3',
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
      }
    ]
  },
  {
    id: 'm3',
    title: 'Modul 3: Kommunikation und Interaktion',
    subModules: [
      {
        id: 'm3-k1',
        title: 'Gesprächsführung',
        competences: [
          {
            id: 'c4',
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
      }
    ]
  },
  {
    id: 'm4',
    title: 'Modul 4: Unterricht',
    subModules: [
      {
        id: 'm4-k1',
        title: 'Didaktik',
        competences: [
          {
            id: 'c5',
            title: 'Unterrichtsplanung',
            description: 'Ich plane Unterricht fach- und sachgerecht.',
            levels: {
              A: 'Ich plane einzelne Stunden strukturiert.',
              B: 'Ich plane Unterrichtsreihen kompetenzorientiert.',
              C: 'Ich differenziere und individualisiere Lernprozesse.',
              D: 'Ich evaluiere und optimiere meine Unterrichtsplanung.'
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
        title: 'Diagnostizieren',
        competences: [
          {
            id: 'c6',
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
      }
    ]
  }
];
