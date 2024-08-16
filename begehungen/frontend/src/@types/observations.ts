import type { ReactNode } from "react"

export interface ObservationType {
  img: string
  text: ObservationName
  link: string
}

export interface Link {
  text: string
  hyperlink: string
}

export interface ChecklistItem {
  title: ReactNode
  link?: Link
  critical?: boolean
  disabledFor?: Jobs[]
}

export interface Section {
  title?: string
  link?: Link
  checklistItems: ChecklistItem[]
}

export interface Topic {
  title: string
  sections: Section[]
  link?: Link
}

export enum ObservationName {
  OPS_INFRA = "Ops Infrastruktur",
  OPS_INTERVENTIONELL = "Ops Interventionell",
  AMBULANT = "Station Ambulant",
  INTERVENTIONELL = "Interventionell",
}

export enum Jobs {
  KAS = "KAS",
  OP_PFLEGE = "OP-Pflege",
  CHIRURGISCHES_PERSONAL = "Chirurgisches Personal",
  LAGERUNGS_PFLEGE = "Lagerungs-Pflege",
  ANDERE = "Andere",
}

export const allJobs = [Jobs.KAS, Jobs.OP_PFLEGE, Jobs.CHIRURGISCHES_PERSONAL, Jobs.LAGERUNGS_PFLEGE, Jobs.ANDERE]

export interface ObservationTab {
  label: string
  content: ReactNode
}
