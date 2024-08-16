import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
  Drawer,
  Link,
  ThemeProvider,
  styled,
  alpha,
  InputBase,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import LogoutIcon from "@mui/icons-material/Logout"
import SearchIcon from "@mui/icons-material/Search"
import { useState, type MouseEvent, cloneElement, type ReactElement, type ChangeEvent } from "react"
import logo from "../../assets/2019-Infektiologie-H-Neg.png"
import { Link as RouterLink } from "react-router-dom"
import NavigationDrawer from "./NavigationDrawer.tsx"
import type { PageItem } from "../../@types/menuItems.tsx"
import { backgroundTheme } from "../../utils/themes.ts"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

interface ScrollProps {
  children: ReactElement
}

function ElevationScroll(props: ScrollProps) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

interface AppBarProps {
  drawerWidth: number
  withSearch?: boolean
  pages: PageItem[]
}

function ResponsiveAppBar(props: AppBarProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [searchValue, setSearchValue] = useState<string>("")

  const settings = ["Abmelden"]

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  // TODO: Implement search functionality
  const handleSearch = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${props.drawerWidth}px)` },
            ml: { sm: `${props.drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {props.withSearch ? (
              <>
                <Box sx={{ height: 64, flexGrow: 1, display: { xs: "none", md: "block" } }}>
                  <Link component={RouterLink} to={"/"}>
                    <Box component={"img"} src={logo} sx={{ height: "100%" }} />
                  </Link>
                </Box>
                <Box component={"div"} sx={{ flexGrow: 1 }} />
                <Search sx={{ mr: "16px" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Suchen…"
                    value={searchValue}
                    onChange={(input) => handleSearch(input)}
                  />
                </Search>
              </>
            ) : (
              <Box sx={{ height: 64, flexGrow: 1 }}>
                <Link component={RouterLink} to={"/"}>
                  <Box component={"img"} src={logo} sx={{ height: "100%" }} />
                </Link>
              </Box>
            )}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Einstellungen öffnen">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar">CA</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <LogoutIcon />
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ThemeProvider theme={backgroundTheme}>
        <Box
          component="nav"
          sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: props.drawerWidth },
            }}
          >
            <NavigationDrawer pages={props.pages} setMobileOpen={setMobileOpen} withSearch={props.withSearch} />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: props.drawerWidth },
            }}
            open
          >
            <NavigationDrawer pages={props.pages} withSearch={props.withSearch} />
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default ResponsiveAppBar
