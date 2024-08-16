import ResponsiveAppBar from "../components/navigation/ResponsiveAppBar.tsx"
import { Outlet, useLocation } from "react-router-dom"
import { Box, Breadcrumbs, Container, CssBaseline, Link, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import type { PageItem } from "../@types/menuItems.tsx"
import { Link as RouterLink } from "react-router-dom"
import { useEffect } from "react"

interface LayoutProps {
  pages: PageItem[]
  breadcrumbs: string[]
  withSearch?: boolean
}

function MainLayout(props: LayoutProps) {
  const drawerWidth = 240

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ResponsiveAppBar drawerWidth={drawerWidth} pages={props.pages} withSearch={props.withSearch} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: "64px" }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: "32px" }}>
          <Link sx={{ display: "flex", alignItems: "center" }} component={RouterLink} to={"/"}>
            <HomeIcon fontSize="inherit" />
          </Link>
          {props.breadcrumbs.slice(0, -1).map((breadcrumb) => {
            return (
              <Link
                key={breadcrumb}
                component={RouterLink}
                underline="hover"
                color="inherit"
                to={breadcrumb.toLowerCase()}
              >
                {breadcrumb}
              </Link>
            )
          })}
          <Typography color="text.primary">{props.breadcrumbs.at(-1)}</Typography>
        </Breadcrumbs>
        <Container fixed sx={{ wordBreak: "break-word", overflowX: "hidden" }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}

export default MainLayout
