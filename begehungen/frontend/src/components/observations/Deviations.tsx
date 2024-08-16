import { Typography } from "@mui/material"

interface DeviationsProps {
  deviations: string[]
}

/* TODO: Implement Deviations
 * Iterate over the Haupt- und Nebenabweichungen und display them in a proper way.
 */
function Deviations(props: DeviationsProps) {
  return (
    <>
      <Typography sx={{ mb: 4 }} variant={"h5"} component={"h2"}>
        Folgende Abweichungen konnten festgestellt werden:
      </Typography>
      <Typography sx={{ mb: 4 }} variant={"h6"} component={"h3"}>
        Hauptabweichungen:
      </Typography>
      {props.deviations.map((deviation) => {
        return <div key={deviation}>{deviation}</div>
      })}
      <Typography sx={{ mb: 4 }} variant={"h6"} component={"h3"}>
        Nebenabweichungen:
      </Typography>
    </>
  )
}

export default Deviations
