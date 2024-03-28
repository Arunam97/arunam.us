import { Box } from "@mui/material";

import { AboutMe } from "./about-me";
import { Education } from "./education";
import { Certifications } from "./certifications";
import { Skills } from "./skills";
import { WorkExperience } from "./work-experience";
import { ContactMe } from "./contact-me";

export const Home = () => {
  return (
    <Box>
      <AboutMe />
      <Education />
      <Certifications />
      <Skills />
      <WorkExperience />
      <ContactMe />
    </Box>
  );
};
