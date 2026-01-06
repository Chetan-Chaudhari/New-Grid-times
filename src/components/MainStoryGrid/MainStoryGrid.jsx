import React from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../../constants";
import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>
      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>
      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>
      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  margin-bottom: 48px;
  width: 100%;

  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 600fr 500fr 325fr;
    grid-template-rows: auto auto;
    gap: 16px;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    padding: 16px 8px;
  }

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 550fr 220fr;
    gap: 16px;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }
  padding: 16px 8px;
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
  }
  @media ${QUERIES.tabletOnly} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    a:last-child article {
      border-bottom: none;
    }
    a:first-child article {
      padding-top: 0px;
    }
  }
  @media ${QUERIES.tabletOnly} {
    a:last-child article {
      border-bottom: none;
    }
    a:first-child article {
      padding-top: 0px;
    }
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.laptopAndUp} {
    a:last-child article {
      border-bottom: none;
    }
    a:first-child article {
      padding-top: 0px;
    }
  }

  @media ${QUERIES.tabletOnly} {
    ${StoryList} {
      flex-direction: row;
      gap: 16px;
    }
`;

const AdvertisementSection = styled.section`
  display: block;
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
  }
  @media${QUERIES.tabletOnly} {
    padding: 0;
  }
`;

export default MainStoryGrid;
