import { Box } from "@mui/material";

import Section from "../../components/common/section/section";
import AboutMeSectionContent from "../about-me/about-me";
import SkillsSectionContent from "../skills/skills";
import WorkExperienceSectionContent from "../work-experience/work-experience";
import ProjectsSectionContent from "../projects/projects";

import { labels } from "../../constants/labels";
import { constants } from "../../constants/constants";

export const Home = () => {
  const { ARUNAM_GUPTA, SKILLS, WORK_EXPERIENCE, PROJECTS } = labels;
  const {
    COLORS: {
      LIGHT_MODE: { BACKGROUND1, BACKGROUND2, BACKGROUND3, BACKGROUND4 }
    }
  } = constants;

  return (
    <Box>
      <Section
        title={ARUNAM_GUPTA}
        Content={AboutMeSectionContent}
        startingColor={BACKGROUND1}
        endingColor={BACKGROUND2}
      />
      <Section
        title={SKILLS}
        Content={SkillsSectionContent}
        startingColor={BACKGROUND2}
        endingColor={BACKGROUND3}
      />
      <Section
        title={WORK_EXPERIENCE}
        Content={WorkExperienceSectionContent}
        startingColor={BACKGROUND3}
        endingColor={BACKGROUND4}
      />
      <Section
        title={PROJECTS}
        Content={ProjectsSectionContent}
        startingColor={BACKGROUND4}
        endingColor={BACKGROUND4}
      />
    </Box>
  );
};
