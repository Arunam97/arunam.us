import { Box } from "@mui/material";

import Section from "../../components/common/section/section";
import AboutMe from "../about-me/about-me";
import Skills from "../skills/skills";
import WorkExperience from "../work-experience/work-experience";
import Projects from "../projects/projects";

import { labels } from "../../constants/labels";

export const Home = () => {
  const { ABOUT_ME, SKILLS, WORK_EXPERIENCE, PROJECTS } = labels;

  return (
    <Box>
      <Section title={ABOUT_ME} Content={AboutMe} />
      <Section title={SKILLS} Content={Skills} />
      <Section title={WORK_EXPERIENCE} Content={WorkExperience} />
      <Section title={PROJECTS} Content={Projects} />
    </Box>
  );
};
