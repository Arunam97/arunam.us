import { Box, Typography } from "@mui/material";

const Section = ({
  title = "Default Header",
  Content = () => {},
  startingColor = "white",
  endingColor = "white"
}) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${startingColor} 75%, ${endingColor} 100%)`,
        border: "solid black 1px",
        padding: "1rem",
        minHeight: "100vh"
      }}
    >
      <Typography variant="h2">{title}</Typography>
      <Content />
    </Box>
  );
};

export default Section;
