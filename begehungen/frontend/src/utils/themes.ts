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
    error: {
      main: "#ea8698",
    },
    info: {
      main: "#6ca5da",
    },
    warning: {
      main: "#f8cf3b",
    },
  },
})

export const backgroundTheme = createTheme({
  palette: {
    mode: "dark",
    background: { paper: "#677078" },
  },
})
