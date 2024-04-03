import { Typography, Card, Link, Box, Avatar } from "@mui/material";
import linkedIn from "../images/linkedIn.png";
import leetcode from "../images/leetcode.png";
import github from "../images/github.png";

export const ContactMe = () => {
  return (
    <Card>
      <Typography variant="h1">Contact Me</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <Link
          href="mailto:arunamgupta@proton.me"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ margin: "0.5rem", padding: "1rem" }}
        >
          <Typography variant="body1">arunamgupta@proton.me</Typography>
        </Link>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Link
            href="https://www.linkedin.com/in/arunamgupta/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ margin: "0.5rem", padding: "1rem" }}
          >
            <Avatar
              alt="LinkedIn Logo"
              src={linkedIn}
              sx={{
                height: "2rem",
                width: "2rem",
                borderRadius: "0rem"
              }}
            />
          </Link>
          <Link
            href="https://github.com/Arunam97"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ margin: "0.5rem", padding: "1rem" }}
          >
            <Avatar
              alt="GitHub Logo"
              src={github}
              sx={{
                height: "2rem",
                width: "2rem",
                borderRadius: "0rem"
              }}
            />
          </Link>
          <Link
            href="https://leetcode.com/arunam/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ margin: "0.5rem", padding: "1rem" }}
          >
            <Avatar
              alt="LeetCode Logo"
              src={leetcode}
              sx={{
                height: "2rem",
                width: "2rem",
                borderRadius: "0rem"
              }}
            />
          </Link>
        </Box>
      </Box>
    </Card>
  );
};
