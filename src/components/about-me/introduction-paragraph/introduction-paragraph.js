import { Box, Typography } from "@mui/material";

import Link from "../../common/link/link";

const IntroductionParagraph = () => {
  return (
    <Box sx={{ width: "70%" }}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        I am a Full Stack Software Engineer specializing in developing
        large-scale enterprise applications. My core strengths include building
        scalable and maintainable solutions with Java and React, and I also have
        professional expertise in Node.js and Angular. I am well-versed in
        deploying applications on Docker containers and managing Kubernetes
        clusters. I am constantly seeking new challenges and opportunities to
        learn and grow. Feel free to check out my
        <Link
          href="https://drive.google.com/file/d/1Jb3RCmwxwsWuuBvdw38_TJDJXSWkwMUl/view?usp=drive_link"
          text="resume"
          variant="h6"
        />
        .
      </Typography>
    </Box>
  );
};

export default IntroductionParagraph;
