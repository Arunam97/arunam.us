import React from "react";
import { Link as MuiLink, Avatar } from "@mui/material";

const ImageLink = ({ href, src, alt = "", ...sx }) => {
  return (
    <MuiLink
      href={href}
      target="_blank"
      sx={{ display: "inline-flex", alignItems: "center" }}
    >
      <Avatar alt={alt} src={src} {...sx} />
    </MuiLink>
  );
};

export default ImageLink;
