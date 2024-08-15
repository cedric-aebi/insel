import type { ReactNode } from "react"

export interface PageItem {
  page: ReactNode
  icon?: ReactNode
  link: string
  breadcrumbs: string[]
  withSearch?: boolean
  showInNavigation: boolean
  children?: PageItem[]
}
