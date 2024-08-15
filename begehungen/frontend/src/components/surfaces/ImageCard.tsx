import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material"
import type { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  img: string
  link: string
}

function ImageCard(props: PropsWithChildren<Props>) {
  const navigate = useNavigate()

  return (
    <Card>
      <CardActionArea onClick={() => navigate(props.link.toLowerCase())}>
        <CardMedia
          component="img"
          image={props.img}
          alt="Image"
          sx={{ height: { xs: "150px", sm: "200px", md: "250px" } }}
        />
        <CardContent>{props.children}</CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ImageCard
