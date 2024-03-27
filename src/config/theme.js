import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: "500",
      marginBottom: "1rem"
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: "400"
    },
    highlight: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontWeight: "400",
      color: "blue"
    },
    resume: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "500"
    },
    university: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "500"
    },
    degree: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.1rem"
    },
    gradDate: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1rem",
      fontStyle: "italic"
    },
    certificationTitle: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.25rem"
    },
    certificationCredlyLink: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.1rem",
      textDecoration: "underline"
    },
    certificationExpiry: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1rem",
      fontStyle: "italic"
    },
    skillHeading: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontWeight: "500",
      color: "red"
    }
  }
});
