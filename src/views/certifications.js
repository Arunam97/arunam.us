import { Typography, Card, Box, Link } from "@mui/material";

export const Certifications = () => {
  return (
    <Card sx={{ margin: "2rem", padding: "2rem" }}>
      <Typography variant="h1">Certifications</Typography>
      <Typography variant="certificationTitle">
        AWS Certified Developer - Associate
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <Link
          href="https://www.credly.com/badges/602f8887-82dd-4c3f-9bf9-0f5c7a563af2"
          target="_blank"
        >
          <Typography variant="certificationCredlyLink">Credly Link</Typography>
        </Link>
        <Typography variant="certificationExpiry">
          Earned: November 2023 | Expires: November 2026
        </Typography>
      </Box>
    </Card>
  );
};
