import React from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: row-reverse;
    padding: 16px 0px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }
  @media ${QUERIES.tabletOnly} {
    display: flex;
    flex-direction: column;
    padding: 16px 0px;
    word-wrap: break-word;
    flex: 1;
    padding: 16px 0px;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  align-self: flex-start;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
