import { Typography, Link as MuiLink } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const Link = ({ href, text, textStyle, iconStyle, ...props }) => {
  return (
    <MuiLink
      href={href}
      target="_blank"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        margin: "0 4px 0 4px"
      }}
    >
      <Typography sx={{ marginRight: "4px", ...textStyle }} {...props}>
        {text}
      </Typography>
      <LaunchIcon fontSize="small" sx={{ ...iconStyle }} />
    </MuiLink>
  );
};

export default Link;
