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
            title: 'Bildungsgänge & Planung',
            description: 'Lehrerinnen und Lehrer konzipieren längerfristig und aufbauend die Förderung von Handlungskompetenzen für Lerngruppen in unterschiedlichen Bildungsgängen ihrer Ausbildungsschule.',
            activities: [
              'gehe sicher mit Lehrplänen um und entwickle didaktische Abschnittspläne für unterschiedliche Schulformen berufsbildender Schulen.',
              'setze Lehrplanvorgaben in passende Handlungskompetenzen für Lerngruppen um.',
              'nehme im Unterricht Bildungs- und Erziehungsaufgaben passend zum Auftrag des jeweiligen Bildungsganges wahr.'
            ]
          }
        ]
      },
      {
        id: 'm1-k2',
        title: 'K2 Aktualität',
        competences: [
          {
            id: 'c1-2',
            title: 'Aktualität & Innovation',
            description: 'Orientierung an aktuellen Entwicklungen.',
            activities: []
          }
        ]
      },
      {
        id: 'm1-k3',
        title: 'K3 Qualitätsarbeit',
        competences: [
          {
            id: 'c1-3',
            title: 'Qualitätsarbeit (IKT)',
            description: 'Beteiligung an der Qualitätsentwicklung.',
            activities: []
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
            activities: []
          }
        ]
      },
      {
        id: 'm1-k5',
        title: 'K5 Rolle Lernende',
        competences: [
          {
            id: 'c1-5',
            title: 'Rollenverständnis (Lernende)',
            description: 'Verständnis der Rolle der Lernenden.',
            activities: []
          }
        ]
      },
      {
        id: 'm1-k6',
        title: 'K6 Rolle Lehrende',
        competences: [
          {
            id: 'c1-6',
            title: 'Rollenverständnis (Lehrende)',
            description: 'Reflexion der eigenen Lehrerrolle.',
            activities: []
          }
        ]
      },
      {
        id: 'm1-k7',
        title: 'K7 Integration',
        competences: [
          {
            id: 'c1-7',
            title: 'Integration in Teams',
            description: 'Gestaltung von Integrationsprozessen.',
            activities: []
          }
        ]
      },
      {
        id: 'm1-k8',
        title: 'K8 Kooperation',
        competences: [
          {
            id: 'c1-8',
            title: 'Kooperation Externe',
            description: 'Zusammenarbeit mit Kollegen und Partnern.',
            activities: []
          }
        ]
      },
      {
        id: 'm1-k9',
        title: 'K9 Anforderungen',
        competences: [
          {
            id: 'c1-9',
            title: 'Berufliche Anforderungen',
            description: 'Umgang mit beruflichen Anforderungen.',
            activities: []
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
            title: 'Sozialisierungsprozesse',
            description: 'Gestaltung sozialer Prozesse.',
            activities: []
          }
        ]
      },
      {
        id: 'm2-k2',
        title: 'K2 Förderbedarf',
        competences: [
          {
            id: 'c2-2',
            title: 'Heterogenität & Förderung',
            description: 'Erkennen und Umgang mit Förderbedarf.',
            activities: []
          }
        ]
      },
      {
        id: 'm2-k3',
        title: 'K3 Beratung',
        competences: [
          {
            id: 'c2-3',
            title: 'Beratung (Koop)',
            description: 'Beratung in Erziehungsfragen.',
            activities: []
          }
        ]
      },
      {
        id: 'm2-k4',
        title: 'K4 Werte Normen',
        competences: [
          {
            id: 'c2-4',
            title: 'Werte & Konflikte',
            description: 'Vermittlung von Werten und Normen.',
            activities: []
          }
        ]
      },
      {
        id: 'm2-k5',
        title: 'K5 Verantwortung',
        competences: [
          {
            id: 'c2-5',
            title: 'Verantwortungsbewusstsein',
            description: 'Übernahme von Verantwortung.',
            activities: []
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
            title: 'Gesprächsführung',
            description: 'Einsatz von Gesprächstechniken.',
            activities: []
          }
        ]
      },
      {
        id: 'm3-k2',
        title: 'K2 Stimmungen',
        competences: [
          {
            id: 'c3-2',
            title: 'Wahrnehmung / Stimmungen',
            description: 'Wahrnehmung und Umgang mit Stimmungen.',
            activities: []
          }
        ]
      },
      {
        id: 'm3-k3',
        title: 'K3 Sprache',
        competences: [
          {
            id: 'c3-3',
            title: 'Sprache (Fachsprache)',
            description: 'Sprachvorbild und Sprachförderung.',
            activities: []
          }
        ]
      },
      {
        id: 'm3-k4',
        title: 'K4 Medieneinsatz',
        competences: [
          {
            id: 'c3-4',
            title: 'Medieneinsatz (Exzellenz)',
            description: 'Didaktischer Einsatz von Medien.',
            activities: []
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
            activities: []
          }
        ]
      },
      {
        id: 'm3-k6',
        title: 'K6 Lernklima',
        competences: [
          {
            id: 'c3-6',
            title: 'Lernförderliches Klima',
            description: 'Gestaltung des Lernklimas.',
            activities: []
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
            title: 'Kompetenzförderung',
            description: 'Ausrichtung am Kompetenzerwerb.',
            activities: []
          }
        ]
      },
      {
        id: 'm4-k2',
        title: 'K2 Didaktik',
        competences: [
          {
            id: 'c4-2',
            title: 'Didaktik & Methodik',
            description: 'Didaktische Planung und Durchführung.',
            activities: []
          }
        ]
      },
      {
        id: 'm4-k3',
        title: 'K3 Aufbereitung',
        competences: [
          {
            id: 'c4-3',
            title: 'Schülerorientierung',
            description: 'Didaktische Aufbereitung von Inhalten.',
            activities: []
          }
        ]
      },
      {
        id: 'm4-k4',
        title: 'K4 Lernumgebung',
        competences: [
          {
            id: 'c4-4',
            title: 'Lernumgebungen',
            description: 'Gestaltung der Lernumgebung.',
            activities: []
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
            activities: []
          }
        ]
      },
      {
        id: 'm4-k6',
        title: 'K6 Eröffnung',
        competences: [
          {
            id: 'c4-6',
            title: 'Eröffnungssituation',
            description: 'Unterrichtseinstiege gestalten.',
            activities: []
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
            activities: []
          }
        ]
      },
      {
        id: 'm4-k8',
        title: 'K8 Selbsttätigkeit',
        competences: [
          {
            id: 'c4-8',
            title: 'Schülerselbsttätigkeit',
            description: 'Förderung der Selbsttätigkeit.',
            activities: []
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
            activities: []
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
            activities: []
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
            activities: []
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
            activities: []
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
            activities: []
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
            activities: []
          }
        ]
      },
      {
        id: 'm5-k4',
        title: 'K4 Bewerten',
        competences: [
          {
            id: 'c5-4',
            title: 'Bewerten & Beurteilen',
            description: 'Leistungsbewertung.',
            activities: []
          }
        ]
      }
    ]
  }
];
