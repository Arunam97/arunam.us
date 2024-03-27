import React from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./config/theme";

import { Home } from "./views/home";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
