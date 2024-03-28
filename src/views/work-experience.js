import { Typography, Card, Box } from "@mui/material";

export const WorkExperience = () => {
  return (
    <Card sx={{ margin: "2rem", padding: "2rem" }}>
      <Typography variant="h1">Work Experience</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="companyName">
          Miracle Software Systems, Inc.
        </Typography>
        <Typography variant="companyDuration">July 2022 - Present</Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="projectName">
            Project:{" "}
            <Typography variant="projectCompanyName">
              Walmart Global Governance
            </Typography>{" "}
            - Bentonville, Arkansas, USA
          </Typography>
          <Typography variant="projectDuration">
            December 2023 - Present
          </Typography>
        </Box>
        <Typography variant="projectRole">
          Role:{" "}
          <Typography variant="projectRoleName">
            Lead Full Stack Developer
          </Typography>
        </Typography>
        <Box>
          <Typography variant="body1">
            <ul>
              <li>
                Led and managed a team of 4 developers, coordinating efforts
                across the full technology stack, enhancing team productivity
                and project delivery through effective leadership and agile
                practices.
              </li>
              <li>
                Implemented the front-end interface using React and MUI,
                integrating AmCharts5 for dynamic data visualization and
                employing Recoil for efficient state management, all based on
                detailed Figma prototypes.
              </li>
              <li>
                Developed a robust Spring Boot API for comprehensive data
                management, leveraging BigQuery and MySQL, and focused on
                optimizing backend processes and data flow efficiency.
              </li>
              <li>
                Streamlined deployment workflows by setting up CI/CD pipelines,
                ensuring automated and efficient code deployment through GitHub
                branches.
              </li>
            </ul>
          </Typography>
          <Typography variant="projectTechStack">
            Tech Stack: <Typography variant="highlight">React</Typography> (MUI,
            Recoil, jest), <Typography variant="highlight">Java</Typography>{" "}
            (Spring Boot), <Typography variant="highlight">BigQuery</Typography>
            , <Typography variant="highlight">SQL</Typography>{" "}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
