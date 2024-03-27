import { Typography, Card, Box } from "@mui/material";

export const Education = () => {
  return (
    <Card sx={{ margin: "2rem", padding: "2rem" }}>
      <Typography variant="h1">Education</Typography>
      <Typography variant="university">
        University of Maryland, College Park
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <Typography variant="degree">
          Bachelor of Science in Computer Science
        </Typography>
        <Typography variant="gradDate">Graduated: May 2022</Typography>
      </Box>
    </Card>
  );
};
