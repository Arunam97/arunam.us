import React from "react";
import { Box, Link as MuiLink } from "@mui/material";

const LogoLink = ({ href, alt, image }) => {
  return (
    <MuiLink
      href={href}
      target="_blank"
      sx={{ display: "inline-flex", alignItems: "center" }}
    >
      <Box
        component="img"
        src={image}
        alt={alt}
        sx={{ width: 40, height: 40 }}
      />
    </MuiLink>
  );
};

export default LogoLink;
