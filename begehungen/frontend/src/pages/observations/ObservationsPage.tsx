import { Grid, Typography } from "@mui/material"
import ImageCard from "../../components/surfaces/ImageCard.tsx"
import { ObservationName, type ObservationType } from "../../@types/observations.ts"
import OpInfraImage from "../../assets/op infrastruktur.jpg"
import OPInterventionellImage from "../../assets/op interventionell.jpg"
import AmbulantImage from "../../assets/ambulant.jpg"
import InterventionellImage from "../../assets/interventionell.png"

function ObservationsPage() {
  const observationTypes: ObservationType[] = [
    {
      img: OpInfraImage,
      text: ObservationName.OPS_INFRA,
      link: "Neu/OpsInfra",
    },
    {
      img: OPInterventionellImage,
      text: ObservationName.OPS_INTERVENTIONELL,
      link: "Neu/OpsInterventionell",
    },
    {
      img: AmbulantImage,
      text: ObservationName.AMBULANT,
      link: "Neu/Ambulant",
    },
    {
      img: InterventionellImage,
      text: ObservationName.INTERVENTIONELL,
      link: "Neu/Interventionell",
    },
  ]

  return (
    <>
      <Grid container spacing={4} sx={{ mb: "16px" }}>
        <Grid xs={12} item={true}>
          <Typography display="inline" variant={"h4"} component={"h1"}>
            Neue Beobachtung erfassen
          </Typography>
        </Grid>
        {observationTypes.map((observationType) => {
          return (
            <Grid key={observationType.text} xs={12} md={6} item={true}>
              <ImageCard img={observationType.img} link={observationType.link}>
                <Typography variant={"h5"} component={"h2"}>
                  {observationType.text}
                </Typography>
              </ImageCard>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ObservationsPage
