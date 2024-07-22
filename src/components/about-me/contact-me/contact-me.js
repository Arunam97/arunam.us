import { Avatar, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import Link from "../../common/link/link";

import linkedin from "../../../images/linkedin.png";
import github from "../../../images/github.png";
import leetcode from "../../../images/leetcode.png";

const ContactMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}
    >
      <Box
        sx={{
          display: "flex"
        }}
      >
        <EmailIcon sx={{ marginRight: "4px" }} />
        <Link
          href="mailto:arunamgupta97@gmail.com"
          text="arunamgupta97@gmail.com"
          variant="body2"
          textStyle={{ fontWeight: "600" }}
          iconStyle={{ display: "none" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex"
        }}
      >
        <Avatar
          alt="LinkedIn"
          src={linkedin}
          sx={{ width: "1.5rem", height: "1.5rem", marginRight: "4px" }}
        />
        <Link
          href="https://www.linkedin.com/in/arunamgupta/"
          text="LinkedIn"
          variant="body2"
          textStyle={{ fontWeight: "600" }}
          iconStyle={{ fontSize: "16px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex"
        }}
      >
        <Avatar
          alt="GitHub"
          src={github}
          sx={{ width: "1.5rem", height: "1.5rem", marginRight: "4px" }}
        />
        <Link
          href="https://github.com/Arunam97"
          text="GitHub"
          variant="body2"
          textStyle={{ fontWeight: "600" }}
          iconStyle={{ fontSize: "16px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex"
        }}
      >
        <Avatar
          alt="LeetCode"
          src={leetcode}
          sx={{ width: "1.5rem", height: "1.5rem", marginRight: "4px" }}
        />
        <Link
          href="https://leetcode.com/u/arunam/"
          text="LeetCode"
          variant="body2"
          textStyle={{ fontWeight: "600" }}
          iconStyle={{ fontSize: "16px" }}
        />
      </Box>
    </Box>
  );
};

export default ContactMe;
