import { Box } from "@mui/material";

import IntroductionParagraph from "../../components/about-me/introduction-paragraph/introduction-paragraph";
import SummaryBox from "../../components/about-me/summary-box/summary-box";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10vh"
      }}
    >
      <IntroductionParagraph />
      <SummaryBox />
    </Box>
  );
};
export default AboutMe;
