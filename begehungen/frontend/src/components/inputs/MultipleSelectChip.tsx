import { type Theme, useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { type SelectChangeEvent } from "@mui/material/Select"
import Chip from "@mui/material/Chip"
import { useState } from "react"
import type { Jobs } from "../../@types/observations.ts"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

function getStyles(name: string, jobName: readonly string[], theme: Theme) {
  return {
    fontWeight: !jobName.includes(name) ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  }
}

interface MultipleSelectChipProps {
  jobs: Jobs[]
}

export default function MultipleSelectChip(props: MultipleSelectChipProps) {
  const theme = useTheme()
  const [jobName, setJobName] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof jobName>) => {
    const {
      target: { value },
    } = event
    setJobName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    )
  }

  return (
    <>
      <FormControl sx={{ mt: 3, mb: 1, width: "100%" }}>
        <InputLabel>Berufsgruppen</InputLabel>
        <Select
          multiple
          value={jobName}
          onChange={handleChange}
          input={<OutlinedInput label="Berufsgruppen" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.jobs.map((job) => (
            <MenuItem key={job} value={job} style={getStyles(job, jobName, theme)}>
              {job}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
