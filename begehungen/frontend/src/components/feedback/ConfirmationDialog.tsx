import Button from "@mui/material/Button"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Dialog from "@mui/material/Dialog"
import RadioGroup from "@mui/material/RadioGroup"
import { type ChangeEvent, useEffect, useRef, useState } from "react"
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, TextField } from "@mui/material"
import EditNoteIcon from "@mui/icons-material/EditNote"
import MultipleSelectChip from "../inputs/MultipleSelectChip.tsx"
import { allJobs, type ChecklistItem, Jobs } from "../../@types/observations.ts"

interface ConfirmationDialogRawProps {
  keepMounted: boolean
  value: string
  open: boolean
  onClose: (value?: string) => void
  jobs: Jobs[]
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, ...other } = props
  const [criteriaValue, setCriteriaValue] = useState(valueProp)
  const radioGroupRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) {
      setCriteriaValue(valueProp)
    }
  }, [valueProp, open])

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onClose(criteriaValue)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCriteriaValue((event.target as HTMLInputElement).value)
  }

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%", minHeight: "350px" } }}
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>Beurteilung</DialogTitle>
      <DialogContent dividers>
        <Grid container>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Erfüllt?</FormLabel>
              <RadioGroup value={criteriaValue} ref={radioGroupRef} name={"criteria-met"} onChange={handleChange}>
                <FormControlLabel value="yes" control={<Radio />} label="Ja" />
                <FormControlLabel value="no" control={<Radio color={"error"} />} label="Nein" />
                <FormControlLabel value="na" control={<Radio />} label="Nicht Anwendbar" />
                <FormControlLabel value={""} control={<Radio />} label="Leer" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {criteriaValue === "no" && (
            <Grid item xs={12}>
              <MultipleSelectChip jobs={props.jobs} />
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField sx={{ mt: 3, mb: 1, width: "100%" }} label="Bemerkungen" multiline />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color={"error"} autoFocus onClick={handleCancel}>
          Abbrechen
        </Button>
        <Button onClick={handleOk}>Übernehmen</Button>
      </DialogActions>
    </Dialog>
  )
}

interface ConfirmationDialogProps {
  checkListItem: ChecklistItem
}

export default function ConfirmationDialog(props: ConfirmationDialogProps) {
  const [open, setOpen] = useState(false)
  const [criteriaValue, setCriteriaValue] = useState("")
  const [filteredJobs, setFilteredJobs] = useState<Jobs[]>(allJobs)

  useEffect(() => {
    if (props.checkListItem.disabledFor !== undefined) {
      setFilteredJobs(allJobs.filter((job) => !props.checkListItem.disabledFor!.includes(job)))
    }
  }, [props.checkListItem.disabledFor])

  const handleClickListItem = () => {
    setOpen(true)
  }

  const handleClose = (newValue?: string) => {
    setOpen(false)

    if (newValue !== undefined) {
      setCriteriaValue(newValue)
    }
  }

  return (
    <>
      <Grid container justifyContent={"end"}>
        <Grid xs={12} sm={8} md={4} lg={2} item>
          <Button startIcon={<EditNoteIcon />} variant={"contained"} fullWidth onClick={handleClickListItem}>
            Beurteilen
          </Button>
        </Grid>
      </Grid>
      <ConfirmationDialogRaw keepMounted open={open} onClose={handleClose} value={criteriaValue} jobs={filteredJobs} />
    </>
  )
}
