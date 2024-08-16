import { Box, Divider, Link, Stack } from "@mui/material"
import type { ChecklistItem } from "../../@types/observations.ts"
import { Link as RouterLink } from "react-router-dom"
import ConfirmationDialog from "../feedback/ConfirmationDialog.tsx"

interface Props {
  checkListItem: ChecklistItem
}

function CheckListItem(props: Props) {
  return (
    <div>
      <Stack
        color={"warning"}
        spacing={2}
        sx={{ bgcolor: props.checkListItem.critical ? "warning.main" : "" }}
        padding={"16px"}
      >
        <Box>{props.checkListItem.title}</Box>
        {props.checkListItem.link && (
          <Link component={RouterLink} to={props.checkListItem.link.hyperlink} target={"_blank"} fontSize={"smaller"}>
            Referenz: {props.checkListItem.link.text}
          </Link>
        )}
        <ConfirmationDialog checkListItem={props.checkListItem} />
      </Stack>
      <Divider />
    </div>
  )
}

export default CheckListItem
