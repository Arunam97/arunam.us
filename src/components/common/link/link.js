import { Typography, Link as MuiLink } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const Link = ({ href, text, sx, iconStyle, ...props }) => {
  return (
    <MuiLink
      href={href}
      target="_blank"
      sx={{
        display: "inline-flex",
        alignItems: "flex-start",
        textDecoration: "none",
        margin: "0 6px 0 6px"
      }}
    >
      <Typography {...sx} {...props}>
        {text}
      </Typography>
      <LaunchIcon sx={{ fontSize: "12px", ...iconStyle }} />
    </MuiLink>
  );
};

export default Link;
