import { Box, Typography } from "@mui/material";

const Section = ({
  title = "Default Header",
  Content = () => {},
  startingColor = "white",
  endingColor = "white",
  ...sx
}) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${startingColor} 75%, ${endingColor} 100%)`,
        border: "solid black 1px",
        padding: "2rem",
        minHeight: "97vh",
        display: "flex",
        flexDirection: "column",
        judtifyContent: "center",
        alignItems: "center",
        ...sx
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        {title}
      </Typography>
      <Content />
    </Box>
  );
};

export default Section;
