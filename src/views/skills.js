import { Typography, Card } from "@mui/material";

export const Skills = () => {
  return (
    <Card sx={{ margin: "2rem", padding: "2rem" }}>
      <Typography variant="h1">Skills</Typography>
      <Typography variant="body1">
        <Typography variant="skillHeading">Front-End Development:</Typography>{" "}
        <Typography variant="highlight">React</Typography> (Redux, Recoil, jest,
        amCharts5, MUI), <Typography variant="highlight">Angular</Typography>{" "}
        (PrimeNG, NgRx), <Typography variant="highlight">HTML/CSS</Typography>,{" "}
        <Typography variant="highlight">JavaScript/TypeScript</Typography>
      </Typography>
      <Typography variant="body1">
        <Typography variant="skillHeading">Back-End Development:</Typography>{" "}
        <Typography variant="highlight">Java</Typography> (Spring Framework,
        Spring Boot, JDBC, JPA, JPQL, Hibernate), Maven
      </Typography>
      <Typography variant="body1">
        <Typography variant="skillHeading">Databases:</Typography>{" "}
        <Typography variant="highlight">SQL</Typography> (MySQL, PostgreSQL,
        SQLite, Microsoft SQL Server)
      </Typography>
      <Typography variant="body1">
        <Typography variant="skillHeading">Cloud Technologies:</Typography>{" "}
        <Typography variant="highlight">AWS</Typography> (EC2, S3, RDS,
        CodePipeline, CloudFront),{" "}
        <Typography variant="highlight">GCP</Typography> (BigQuery, Cloud SQL)
      </Typography>
      <Typography variant="body1">
        <Typography variant="skillHeading">Development Tools:</Typography>{" "}
        <Typography variant="highlight">Docker, Kubernetes, Jenkins</Typography>
        , CI/CD Pipelines, Jira, GitHub
      </Typography>
    </Card>
  );
};
