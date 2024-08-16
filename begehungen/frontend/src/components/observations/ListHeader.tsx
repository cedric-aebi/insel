import { Divider, Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import type { Link as LinkType } from "../../@types/observations.ts"

interface Props {
  title?: string
  link?: LinkType
}

function ListHeader(props: Props) {
  return (
    <>
      {props.title && (
        <Typography component={"h2"} variant={"h6"} sx={{ mb: "16px" }}>
          {props.title}
        </Typography>
      )}
      {props.link && (
        <>
          <Typography>
            Referenz:{" "}
            <Link component={RouterLink} to={props.link.hyperlink} target={"_blank"}>
              {props.link.text}
            </Link>
          </Typography>
          <Divider sx={{ mb: "8px", mt: "8px" }} />
        </>
      )}
    </>
  )
}

export default ListHeader
