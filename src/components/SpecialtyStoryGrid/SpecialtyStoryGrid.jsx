import React from "react";
import styled from "styled-components";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { COLORS, QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportStoriesWrapper>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </SportStoriesWrapper>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 585fr 583fr;
    gap: 16px;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const MarketCards = styled.div`
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
`;

const SportsSection = styled.section`
  display: grid;
`;

const SportsStories = styled.div`
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 16px;
  }
`;

const SportStoriesWrapper = styled.section`
  overflow: auto;
`;

export default SpecialtyStoryGrid;
