import { Box } from "@mui/material";

import Section from "../../components/section/section";
import AboutMeSectionContent from "../about-me-section-content/about-me-section-content";
import SkillsSectionContent from "../skills-section-content/skills-section-content";
import WorkExperienceSectionContent from "../work-experience-section-content/work-experience-section-content";
import ProjectsSectionContent from "../projects-section-content/projects-section-content";

import { labels } from "../../constants/labels";
import { constants } from "../../constants/constants";

export const Home = () => {
  const { ARUNAM_GUPTA, SKILLS, WORK_EXPERIENCE, PROJECTS } = labels;
  const {
    COLORS: {
      LIGHT_MODE: { LIGHT_CYAN, PLATINUM, PERIWINKLE, CELESTE }
    }
  } = constants;

  return (
    <Box>
      <Section
        title={ARUNAM_GUPTA}
        Content={AboutMeSectionContent}
        startingColor={LIGHT_CYAN}
        endingColor={PLATINUM}
      />
      <Section
        title={SKILLS}
        Content={SkillsSectionContent}
        startingColor={PLATINUM}
        endingColor={PERIWINKLE}
      />
      <Section
        title={WORK_EXPERIENCE}
        Content={WorkExperienceSectionContent}
        startingColor={PERIWINKLE}
        endingColor={CELESTE}
      />
      <Section
        title={PROJECTS}
        Content={ProjectsSectionContent}
        startingColor={CELESTE}
        endingColor={CELESTE}
      />
    </Box>
  );
};
