import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif"
        }
      }
    }
  }
});
