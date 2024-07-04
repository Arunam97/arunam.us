import { Box } from "@mui/material";

import Education from "../education/education";
import Certification from "../certification/certification";
import ContactMe from "../contact-me/contact-me";

const SummaryBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2rem"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        <Education />
        <Certification />
      </Box>
      <Box>
        <ContactMe />
      </Box>
    </Box>
  );
};

export default SummaryBox;
