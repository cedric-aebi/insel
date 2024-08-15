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
