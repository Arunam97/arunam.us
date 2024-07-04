import { Box, Typography } from "@mui/material";
import Education from "../../components/about-me/education/education";
import Certification from "../../components/about-me/certification/certification";
import Link from "../../components/common/link/link";
import ContactMe from "../../components/about-me/contact-me/contact-me";

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
            problems. Proficient in Java, JavaScript/TypeScript and frameworks
            such as Spring Boot, React and Angular, I've developed scalable
            solutions for Walmart and Heubach. I hold a B.Sc. in Computer
            Science from the University of Maryland and am an AWS Certified
            Developer. Click
            <Link
              href="https://drive.google.com/file/d/1Jb3RCmwxwsWuuBvdw38_TJDJXSWkwMUl/view?usp=drive_link"
              text="here"
              variant="h6"
            />
            for my resume.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          border: "solid red"
        }}
      >
        <Box sx={{ width: "30%", border: "solid blue" }}>
          <Education />
        </Box>
        <Box sx={{ width: "30%", border: "solid blue" }}>
          <Certification />
        </Box>
        <Box sx={{ width: "30%", border: "solid blue" }}>
          <ContactMe />
        </Box>
      </Box>
    </Box>
  );
};
export default AboutMeSectionContent;
