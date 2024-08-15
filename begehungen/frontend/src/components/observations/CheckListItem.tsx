import { Box, Button, Divider, Grid, Link, Stack } from "@mui/material"
import EditNoteIcon from "@mui/icons-material/EditNote"
import type { ChecklistItem } from "../../@types/Observations.ts"
import { Link as RouterLink } from "react-router-dom"

interface Props {
  checkListItem: ChecklistItem
}

function CheckListItem(props: Props) {
  return (
    <div>
      <Stack spacing={2} sx={{ backgroundColor: props.checkListItem.critical ? "#f8cf3b" : "" }} padding={"16px"}>
        <Box>{props.checkListItem.title}</Box>
        {props.checkListItem.link && (
          <Link component={RouterLink} to={props.checkListItem.link.hyperlink} target={"_blank"} fontSize={"smaller"}>
            Referenz: {props.checkListItem.link.text}
          </Link>
        )}
        <Grid container justifyContent={"end"}>
          <Grid xs={12} sm={8} md={4} lg={2} item>
            <Button startIcon={<EditNoteIcon />} variant={"contained"} fullWidth>
              Beurteilen
            </Button>
          </Grid>
        </Grid>
      </Stack>
      <Divider />
    </div>
  )
}

export default CheckListItem
