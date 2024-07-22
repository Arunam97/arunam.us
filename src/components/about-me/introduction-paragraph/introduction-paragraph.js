import { Box, Typography } from "@mui/material";

import Link from "../../common/link/link";

const IntroductionParagraph = () => {
  return (
    <Box sx={{ width: "70%", textAlign: "center" }}>
      <Typography variant="introductionParagraph">
        Hi! I'm Arunam Gupta, a Software Engineer based in Bentonville,
        Arkansas. At my core I am a Full Stack Developer, specializing in
        various front-end, back-end, and cloud technologies. This involves
        creating robust, tested and scalable APIs on the back-end and designing
        enterprise quality front-end UI using modern frameworks. As part of full
        stack development, I also am experienced in deploying and managing
        solutions on the cloud, including creating CI/CD pipelines, deploying
        Docker images in containers on the cloud and managing Kubernetes
        clusters. Feel free to check out my
        <Link
          href="https://drive.google.com/file/d/1Jb3RCmwxwsWuuBvdw38_TJDJXSWkwMUl/view?usp=drive_link"
          text="resume"
          sx={{ fontSize: "1.25rem", lineHeight: "1.5" }}
        />
        .
      </Typography>
    </Box>
  );
};

export default IntroductionParagraph;
