import { Box, Divider, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import type { PageItem } from "../../@types/menuItems.tsx"
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../../assets/2019-Infektiologie-H-Neg.png"

interface Props {
  setMobileOpen?: (arg1: boolean) => void
  pages: PageItem[]
  withSearch?: boolean
}

function NavigationDrawer(props: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  function handleNavigate(to: string) {
    navigate(to)
    if (props.setMobileOpen) {
      props.setMobileOpen(false)
    }
  }

  return (
    <>
      {props.withSearch ? (
        <Toolbar sx={{ padding: "0 !important" }}>
          <Box sx={{ height: 64, width: "100%", display: { xs: "block", md: "none" } }}>
            <Link component={RouterLink} to={"/"}>
              <Box component={"img"} src={logo} sx={{ height: "100%" }} />
            </Link>
          </Box>
        </Toolbar>
      ) : (
        <Toolbar />
      )}
      <Divider />
      <List>
        {props.pages.map((item) => {
          if (item.showInNavigation) {
            return (
              <ListItem key={item.link} disablePadding>
                <ListItemButton
                  selected={location.pathname.includes(item.link.toLowerCase())}
                  onClick={() => handleNavigate("/" + item.link.toLowerCase())}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.link} />
                </ListItemButton>
              </ListItem>
            )
          }
        })}
      </List>
    </>
  )
}

export default NavigationDrawer
