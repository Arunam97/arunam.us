import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif"
        },
        h1: {
          fontSize: "3rem",
          marginBottom: "2rem"
        },
        introductionParagraph: {
          fontSize: "1.25rem",
          lineHeight: "1.5"
        }
      }
    }
  }
});
