import { Box } from "@mui/material";

import { AboutMe } from "./about-me";
import { Education } from "./education";
import { Certifications } from "./certifications";
import { Skills } from "./skills";

export const Home = () => {
  return (
    <Box sx={{ paddingLeft: "4vw", paddingRight: "4vw" }}>
      <AboutMe />
      <Education />
      <Certifications />
      <Skills />
    </Box>
  );
};
