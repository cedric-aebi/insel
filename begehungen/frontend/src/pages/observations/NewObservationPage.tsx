import { ObservationName, type ObservationTab } from "../../@types/observations.ts"
import { Box, Typography } from "@mui/material"
import BasicTabs from "../../components/navigation/BasicTabs.tsx"
import NewObservationList from "../../components/observations/NewObservationList.tsx"
import Deviations from "../../components/observations/Deviations.tsx"

interface Props {
  which: ObservationName
}

function NewObservationPage(props: Props) {
  const tabs: ObservationTab[] = [
    {
      label: "Beobachten",
      content: <NewObservationList />,
    },
    {
      label: "Abweichungen",
      content: <Deviations deviations={[""]} />,
    },
  ]

  return (
    <>
      <Typography component={"h1"} variant={"h4"} sx={{ mb: "32px" }}>
        {props.which}
      </Typography>
      <Box sx={{ mb: 4 }}>
        <BasicTabs tabs={tabs} />
      </Box>
    </>
  )
}

export default NewObservationPage
