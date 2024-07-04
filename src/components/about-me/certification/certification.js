import { Typography, Box } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import Link from "../../common/link/link";

const Certification = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <WorkspacePremiumIcon sx={{ marginRight: "4px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>
          AWS Certified Developer - Associate
        </Typography>
        <Link
          href="https://www.credly.com/badges/602f8887-82dd-4c3f-9bf9-0f5c7a563af2/public_url"
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
