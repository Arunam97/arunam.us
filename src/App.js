import React from "react";
import { ThemeProvider } from "@mui/material";

import { Home } from "./views/home/home";

import { lightTheme } from "./config/theme";
import "./styles.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
