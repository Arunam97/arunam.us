import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "4rem",
          border: "1px solid black",
          margin: "2rem",
          padding: "2rem"
        }
      }
    }
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: "500",
      marginBottom: "1rem",
      textAlign: "center"
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: "400"
    },
    highlight: {
      fontFamily: "Roboto, Arial, sans-serif",
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
    lightItalic: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1rem",
      fontStyle: "italic",
      color: "gray"
    },
    certificationTitle: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "500"
    },
    certificationCredlyLink: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.1rem",
      textDecoration: "underline"
    },
    skillHeading: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "500"
    },
    companyName: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.5rem",
      fontWeight: "500"
    },
    projectName: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.25rem",
      color: "gray"
    },
    projectCompanyName: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.2rem",
      color: "red"
    },
    projectRole: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.1rem",
      fontStyle: "italic",
      color: "gray"
    },
    projectRoleName: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1.1rem",
      color: "blue"
    },
    projectTechStack: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1rem"
    }
  }
});
