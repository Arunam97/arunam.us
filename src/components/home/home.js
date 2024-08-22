import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Box, Tabs, Tab, tabsClasses } from "@mui/material";

import { isMobileState } from "../../recoil/screenState";

const Home = () => {
  const [value, setValue] = useState(0);
  const isMobile = useRecoilValue(isMobileState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation-tabs"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile="auto"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 }
            }
          }}
        >
          <Tab label="About Me" />
          <Tab label="Skills" />
          <Tab label="Certifications" />
          <Tab label="Work Experience" />
          <Tab label="Projects" />
          <Tab label="Education" />
          <Tab label="Contact Me" />
        </Tabs>
      </Box>
      <Box>
        {value === 0 && <Box>About Me</Box>}
        {value === 1 && <Box>Skills</Box>}
        {value === 2 && <Box>Certifications</Box>}
        {value === 3 && <Box>Work Experience</Box>}
        {value === 4 && <Box>Projects</Box>}
        {value === 5 && <Box>Education</Box>}
        {value === 6 && <Box>Contact Me</Box>}
      </Box>
    </Box>
  );
};

export default Home;
