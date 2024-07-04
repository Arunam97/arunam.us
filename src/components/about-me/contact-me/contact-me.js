import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Link from "../../common/link/link";
import LogoLink from "../../common/logo-link/logo-link";
import linkedIn from "../../../images/linkedIn.png";

const ContactMe = () => {
  return (
    <Box
      sx={{
        border: "solid green",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center"
        }}
      >
        <EmailIcon sx={{ marginRight: "4px" }} />
        <Link
          href="mailto:https://www.youracclaim.com/badges/8b0e2e5f-0a2a-4b5e-8b1d-8b6b1f5c1d4b/public_url"
          text="arunamgupta97@gmail.com"
          textStyle={{ fontWeight: "600" }}
          iconStyle={{ display: "none" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }}
      >
        <EmailIcon sx={{ marginRight: "4px" }} />
        <EmailIcon sx={{ marginRight: "4px" }} />
        <EmailIcon sx={{ marginRight: "4px" }} />
      </Box>
    </Box>
  );
};

export default ContactMe;
