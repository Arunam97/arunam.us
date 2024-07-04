import { Typography, Box } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import Link from "../../common/link/link";

const Certification = () => {
  return (
    <Box sx={{ display: "flex", border: "solid green" }}>
      <WorkspacePremiumIcon sx={{ marginRight: "4px" }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>
          AWS Certified Developer - Associate
        </Typography>
        <Link
          href="https://www.youracclaim.com/badges/8b0e2e5f-0a2a-4b5e-8b1d-8b6b1f5c1d4b/public_url"
          text="View Credential"
          variant="subtitle2"
          textStyle={{ fontWeight: "600" }}
          iconStyle={{ fontSize: "16px" }}
        />
      </Box>
    </Box>
  );
};

export default Certification;
