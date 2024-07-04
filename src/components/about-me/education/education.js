import { Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SchoolIcon sx={{ marginRight: "4px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>
          University of Maryland
        </Typography>
        <Typography variant="subtitle2">B.Sc. in Computer Science</Typography>
      </Box>
    </Box>
  );
};

export default Education;
