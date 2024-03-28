import { Typography, Card, Avatar, Box, Link } from "@mui/material";
import arunam from "../images/arunam.jpg";

export const AboutMe = () => {
  return (
    <Card sx={{ margin: "2rem", padding: "2rem" }}>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        About Me
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flexWrap: "wrap-reverse"
          }}
        >
          <Box sx={{ maxWidth: "50rem" }}>
            <Typography variant="body1">
              Hi! My name is Arunam Gupta, and I currently work as a{" "}
              <Typography variant="highlight" color={"red"}>
                Full Stack Developer at Walmart
              </Typography>
              , in Bentonville, Arkansas. With a comprehensive skill set
              spanning both front-end and back-end development, I excel in
              creating dynamic and responsive applications. My expertise in
              front-end technologies includes advanced proficiency in{" "}
              <Typography variant="highlight">React and Angular</Typography>,
              enabling me to construct intuitive user interfaces that enhance
              user experience. On the back-end, I am skilled in{" "}
              <Typography variant="highlight">Java</Typography> and have
              extensive experience with{" "}
              <Typography variant="highlight">
                SQL-based databases and BigQuery
              </Typography>
              , which allows me to develop robust and scalable solutions.
              Furthermore, my specialization extends to cloud technologies, with
              a particular focus on{" "}
              <Typography variant="highlight">
                Amazon Web Services (AWS)
              </Typography>
              . This expertise is complemented by my proficiency in deploying
              containerized applications using{" "}
              <Typography variant="highlight">Docker and Kubernetes</Typography>
              . I am also adept at implementing{" "}
              <Typography variant="highlight">
                CI/CD pipelines with Jenkins and AWS CodePipeline
              </Typography>
              , ensuring seamless and efficient deployment processes. My role at
              Walmart involves leveraging these skills to contribute to
              innovative projects, enhancing the company's technological
              infrastructure and delivering value to our customers.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "1rem" }}>
              I'm currently working on a personal project where I'm{" "}
              <Typography variant="highlight">
                fine-tuning an OpenAI model
              </Typography>{" "}
              to specifically answer questions about me. The goal is to
              integrate the tailored AI directly into this website, creating a
              unique, interactive experience for visitors.
            </Typography>
          </Box>
          <Avatar
            alt="Photo of Arunam Gupta"
            src={arunam}
            sx={{
              width: "min(15rem, 40vw)",
              height: "min(15rem, 40vw)",
              border: "solid black",
              margin: "2rem"
            }}
          />
        </Box>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "solid black",
            borderRadius: "2rem",
            padding: "1rem",
            marginTop: "1rem"
          }}
          href="https://drive.google.com/file/d/1Jb3RCmwxwsWuuBvdw38_TJDJXSWkwMUl/view"
          target="_blank"
        >
          <Typography variant="resume">View my Resume</Typography>
        </Link>
      </Box>
    </Card>
  );
};
