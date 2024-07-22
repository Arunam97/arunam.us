import { Box, Typography } from "@mui/material";

const Section = ({
  title,
  Content = () => {},
  startingColor = "white",
  endingColor = "white",
  ...sx
}) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${startingColor} 75%, ${endingColor} 100%)`,
        border: "solid lightgrey 1px",
        padding: "5vh",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        judtifyContent: "center",
        alignItems: "center",
        ...sx
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <Content />
    </Box>
  );
};

export default Section;
