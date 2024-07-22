import React from "react";
import { Link as MuiLink, Avatar } from "@mui/material";

const ImageLink = ({ href, src, alt = "", ...props }) => {
  return (
    <MuiLink
      href={href}
      target="_blank"
      sx={{ display: "inline-flex", alignItems: "center" }}
    >
      <Avatar alt={alt} src={src} {...props} />
    </MuiLink>
  );
};

export default ImageLink;
