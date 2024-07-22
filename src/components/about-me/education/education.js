import { Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SchoolIcon sx={{ marginRight: "6px", fontSize: "20px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography variant="subtitle1">University of Maryland</Typography>
        <Typography variant="subtitle2">B.Sc. in Computer Science</Typography>
      </Box>
    </Box>
  );
};

export default Education;
