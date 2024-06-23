import { Box, Typography } from "@mui/material";
import AboutMeEducation from "../../components/about-me-education/about-me-education";

const AboutMeSectionContent = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          minHeight: "50vh"
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6">
            Hello! I'm Arunam Gupta, a full-stack Software Engineer with years
            of experience building end-to-end websites and solving complex
            problems. Proficient in Java, JavaScript, TypeScript and frameworks
            like Spring Boot, React and Angular, I've developed scalable
            solutions for clients such as Walmart and Heubach. I hold a B.S. in
            Computer Science from the University of Maryland and am an AWS
            Certified Developer.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "30vh",
          display: "flex"
        }}
      >
        <Box sx={{ width: "50%", border: "solid green" }}>
          <AboutMeEducation />
        </Box>
        <Box sx={{ border: "solid red" }}>Certification</Box>
        <Box sx={{ border: "solid red" }}>Contact me</Box>
      </Box>
    </Box>
  );
};
export default AboutMeSectionContent;
