import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="header-tabs">
        <Tab label="About Me" />
        <Tab label="Skills" />
        <Tab label="Certifications" />
        <Tab label="Work Experience" />
        <Tab label="Education" />
        <Tab label="Contact Me" />
      </Tabs>
      <Box>
        {value === 0 && <Box>1</Box>}
        {value === 1 && <Box>2</Box>}
        {value === 2 && <Box>3</Box>}
        {value === 3 && <Box>4</Box>}
        {value === 4 && <Box>5</Box>}
        {value === 5 && <Box>6</Box>}
      </Box>
    </Box>
  );
};

export default Home;
