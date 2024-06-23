import { Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const AboutMeEducation = () => {
  return (
    <Box sx={{ display: "flex", border: "solid red", width: "100%" }}>
      <SchoolIcon sx={{ marginRight: "4px" }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>
            University of Maryland
          </Typography>
          <Typography variant="subtitle2" color="grey">
            College Park, MD, USA
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: "500" }}>
            B.S. in Computer Science
          </Typography>
          <Typography variant="subtitle2" color="grey">
            Graduated: May, 2022
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMeEducation;
