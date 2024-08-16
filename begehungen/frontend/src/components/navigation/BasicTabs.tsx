import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { type ReactNode, type SyntheticEvent, useState } from "react"
import type { ObservationTab } from "../../@types/observations.ts"

interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  )
}

interface BasicTabsProps {
  tabs: ObservationTab[]
}

export default function BasicTabs(props: BasicTabsProps) {
  const [value, setValue] = useState(0)

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {props.tabs.map((tab) => {
            return <Tab key={tab.label} label={tab.label} />
          })}
        </Tabs>
      </Box>
      {props.tabs.map((tab, index) => {
        return (
          <CustomTabPanel key={index} value={value} index={index}>
            {tab.content}
          </CustomTabPanel>
        )
      })}
    </Box>
  )
}
