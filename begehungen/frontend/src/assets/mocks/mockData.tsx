import { Jobs, type Topic } from "../../@types/observations.ts"
import { Typography } from "@mui/material"

export const topics: Topic[] = [
  {
    title: "Standardhygienemassnahmen",
    sections: [
      {
        title: "Händehygiene",
        link: {
          text: "HYG 77",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
            critical: true,
          },
        ],
      },
      {
        title: "Chirurgische (chir.) Händedesinfektion",
        link: {
          text: "HYG 77",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Wird eine chir. Händedesinfektion unmittelbar vor dem operativen Eingriff (vor sterilem Ankleiden)
                  durchgeführt?
                </Typography>
              </>
            ),
            disabledFor: [Jobs.KAS, Jobs.LAGERUNGS_PFLEGE],
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Wird die chir. Händedesinfektion im Waschraum oder in einem dafür vorgesehenen Bereich durchgeführt?
                </Typography>
              </>
            ),
            disabledFor: [Jobs.KAS, Jobs.LAGERUNGS_PFLEGE],
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Ist die Einwirkzeit für die chir. Händedesinfektion bekannt und wird diese eingehalten?
                </Typography>
              </>
            ),
            disabledFor: [Jobs.KAS, Jobs.LAGERUNGS_PFLEGE],
          },
        ],
      },
      {
        title: "Schutzausrüstung/Kontakt mit Körperflüssigkeiten",
        link: {
          text: "HYG 77",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Chirurgische Maske:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Wird diese nach Indikationen und satt anliegend getragen und deckt sie Nase und Mund ab?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Schutzbrille:
                </Typography>
                <Typography fontSize={"smaller"}>Werden diese zum Schutz vor Körperflüssigkeiten getragen?</Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Unsterile Handschuhe:
                </Typography>
                <Typography fontSize={"smaller"}>Sind die Indikationen zum Tragen bekannt?</Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Arbeitshygiene",
        link: {
          text: "HYG 77",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  OP Bereichskleidung:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Wird diese korrekt getragen? (Privatkleidung ist nicht sichtbar)
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Haarschutz:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Sind alle Kopfhaare, inkl. Barthaaren, Bänder und Stoffhauben mit Einweghauben abgedeckt?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Handschmuck:
                </Typography>
                <Typography fontSize={"smaller"}>Sind die Hände und Unterarme frei?</Typography>
              </>
            ),
            critical: true,
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hängender Schmuck:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Wird hängender Schmuck / Ohrschmuck abgezogen oder komplett abgedeckt?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Fingernägel:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Sind diese sauber, kurz und ohne Nagellack/künstlichen Auflagen?
                </Typography>
              </>
            ),
            critical: true,
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Wärmejacken:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden diese geschlossen getragen und bei Indikation zur Händehygiene die Ärmel hochgeschoben?
                </Typography>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Patientenbezogene Massnahmen",
    sections: [
      {
        title: "Injektions- und Infusionslösungen/Infusionssysteme",
        link: {
          text: "HYG 165",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Injektionen und Punktionen",
        link: {
          text: "HYG 124",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Injektionen und Punktionen der Risikogruppe 1 (bspw. Einlage peripherer Venenkatheter Blutentnahme",
        link: {
          text: "HYG 124",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Injektionen und Punktionen der Risikogruppe 2a (bspw. Abnahme Blutkulturen)",
        link: {
          text: "HYG 124",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Injektionen und Punktionen der Risikogruppe 2b (bspw. diagnostische Aszites- oder Blasenpunktion)",
        link: {
          text: "HYG 124",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Injektionen und Punktionen der Risikogruppe 3 (bspw. Lumbalpunktion oder Punktionen in Organe)",
        link: {
          text: "HYG 124",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Injektionen und Punktionen der Risikogruppe 4 (bspw. Einlage ZVK oder PICC)",
        link: {
          text: "HYG 124",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Präoperative Haarkürzung",
        link: {
          text: "HYG 138",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Patientenlagerung",
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Antibiotikaprophylaxe",
        link: {
          text: "Insel Antibiotika",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Normothermie",
        link: {
          text: "HYG 270",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Blasenkatheterisierung",
        link: {
          text: "HYG 150",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
      {
        title: "Präoperative Hautdesinfektion",
        link: {
          text: "HYG 84",
          hyperlink: "https://google.com",
        },
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Ablauforganisation",
    sections: [
      {
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Sind alle für die Operation notwendigen Informationen auf dem OP-Programm erhalten?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>Wird das Team-Time-Out korrekt durchgeführt?</Typography>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Steriles Arbeiten",
    link: {
      text: "HYG 285",
      hyperlink: "https://google.com",
    },
    sections: [
      {
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Werden vor dem Richten die Instrumentiertische wischdesinfiziert?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>Erfolgt das sterile Ankleiden nach geschlossener Methode?</Typography>
              </>
            ),
            link: {
              text: "HYG 390",
              hyperlink: "https://google.com",
            },
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Werden die sterile Verpackungen vor dem Öffnen auf Unversehrtheit und Sterilität geprüft?
                </Typography>
              </>
            ),
            critical: true,
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>Wird das Sterilgut angereicht und nicht gespickt?</Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Wird kleines Sterilgut mit einer sterilen Klemme entgegengenommen?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Erfolgt beim Abgeben und Fixieren der sterilen Abdeckung durch unsteriles Personal keine
                  Kontamination?
                </Typography>
              </>
            ),
            critical: true,
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Sind die bei der Operation benötigte Geräte, welche den notwendigen Abstand nicht einhalten können,
                  korrekt steril abgedeckt?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Erfolgt ein Platzwechsel Rücken zu Rücken oder Bauch zu Bauch?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Werden die sterilen Flächen nicht mit unsterilen Gegenständen übergriffen?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>Wird bei einer Kontamination angepasst reagiert?</Typography>
              </>
            ),
            critical: true,
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Werden doppelte Handschuhe bei Operationen mit starker Beanspruchung vom gesamten OP-Team getragen?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Werden die Handschuhe vor der Vorbereitung und Implantation von Gelenkendoprothesen gewechselt?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"}>
                  Finden während der Operation keine Routinereinigungsarbeiten statt?
                </Typography>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Verhalten / Disziplin",
    link: {
      text: "HYG 285",
      hyperlink: "https://google.com",
    },
    sections: [
      {
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Aufbereitung / Transport von Instrumentarium",
    link: {
      text: "HYG 285",
      hyperlink: "https://google.com",
    },
    sections: [
      {
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Weitere Beobachtungen",
    sections: [
      {
        checklistItems: [
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
            critical: true,
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
            critical: true,
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
          {
            title: (
              <>
                <Typography fontSize={"smaller"} fontWeight={"bold"}>
                  Hygienische Händedesinfektion:
                </Typography>
                <Typography fontSize={"smaller"}>
                  Werden die Indikationen gemäss WHO oder bei Einsatz des Berner 3-Zonen-Modells eingehalten?
                </Typography>
              </>
            ),
          },
        ],
      },
    ],
  },
]
