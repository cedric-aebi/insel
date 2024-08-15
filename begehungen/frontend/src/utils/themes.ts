import { createTheme } from "@mui/material/styles"

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#009870",
    },
    secondary: {
      main: "#677078",
    },
    background: {
      default: "#f4f6f8",
    },
  },
})

export const backgroundTheme = createTheme({
  palette: {
    mode: "dark",
    background: { paper: "#677078" },
  },
})
