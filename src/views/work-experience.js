import { Typography, Card, Box } from "@mui/material";

export const WorkExperience = () => {
  return (
    <Card>
      <Typography variant="h1">Work Experience</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <Typography variant="companyName">
          Miracle Software Systems, Inc.
        </Typography>
        <Typography variant="dateRange">July 2022 - Present</Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <Typography variant="projectName">
            Project:{" "}
            <Typography variant="projectCompanyName">
              Walmart Global Governance
            </Typography>{" "}
            - Bentonville, Arkansas, USA
          </Typography>
          <Typography variant="dateRange">December 2023 - Present</Typography>
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

      <Box sx={{ marginTop: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <Typography variant="projectName">
            Project:{" "}
            <Typography variant="projectCompanyName">
              Warehouse Management Application
            </Typography>{" "}
            - Novi, Michigan, USA
          </Typography>
          <Typography variant="dateRange">
            March 2022 - December 2023
          </Typography>
        </Box>
        <Typography variant="projectRole">
          Role:{" "}
          <Typography variant="projectRoleName">Back-End Developer</Typography>
        </Typography>
        <Box>
          <Typography variant="body1">
            <ul>
              <li>
                Developed a Spring Boot API utilizing WebFlux for a warehouse
                management application, incorporating Spring Security for robust
                authentication and authoring comprehensive test cases with
                Spring Test.
              </li>
              <li>
                Engineered and deployed the application's database on Cloud SQL,
                meticulously crafting JPQL queries or using JPA functions to
                ensure efficient data management and retrieval.
              </li>
            </ul>
          </Typography>
          <Typography variant="projectTechStack">
            Tech Stack: <Typography variant="highlight">Java</Typography>{" "}
            (Spring Boot, Spring JPA, JPQL, WebFlux),{" "}
            <Typography variant="highlight">GCP CloudSQL</Typography>,{" "}
            <Typography variant="highlight">MySQL</Typography>{" "}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <Typography variant="projectName">
            Project:{" "}
            <Typography variant="projectCompanyName">
              Heubach Cloud Migration
            </Typography>{" "}
            - Novi, Michigan, USA
          </Typography>
          <Typography variant="dateRange">July 2022 - March 2023</Typography>
        </Box>
        <Typography variant="projectRole">
          Role:{" "}
          <Typography variant="projectRoleName">Cloud Developer</Typography>
        </Typography>
        <Box>
          <Typography variant="body1">
            <ul>
              <li>
                Collaborated with German vendors on the migration of legacy and
                cloud applications to new cloud services, coordinating across
                three time zones to ensure seamless transition and integration.
              </li>
              <li>
                Designed cloud architecture diagrams and documentation;
                requisitioned EC2 instances tailored to specific application
                requirements, optimizing resource utilization and performance.
              </li>
            </ul>
          </Typography>
          <Typography variant="projectTechStack">
            Tech Stack: <Typography variant="highlight">AWS</Typography> (EC2,
            RDS, S3),{" "}
            <Typography variant="highlight">Google Cloud Platform</Typography>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
