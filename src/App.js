import React from "react";
import { ThemeProvider } from "@mui/material";

import Home from "./components/home/home";

import { theme } from "./config/theme";
import "./styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
