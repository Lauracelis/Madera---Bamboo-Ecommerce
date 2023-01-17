
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import brownTheme from "./brownTheme"


 export const AppTheme = ({ children }) => {
      return (
          <ThemeProvider theme={brownTheme}>
              <CssBaseline />
              {children}
          </ThemeProvider>
      )
  }