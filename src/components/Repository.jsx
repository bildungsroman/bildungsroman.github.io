import React from "react";
import GitHubButton from "react-github-btn";
import { FiStar, FiKey } from "react-icons/fi";
import styled from "styled-components";
import variables from "../data/variables";

// Styled components for Repository
const RepoContent = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #e1e4e8;
  margin-bottom: 2rem;
  padding: 1rem;
  font-size: 16;
  transition: all 200ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 36px 25px rgb(0 0 0 / 3%);
    h2 a {
      color: ${variables.primary};
    }
  }
`;

const RepoHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.4rem;
  font-style: italic;
  font-family: "Lato";
  font-weight: 100;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  margin-bottom: 1rem;
  margin-top: 0.25rem;
  font-size: 1rem;
  text-transform: capitalize;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 0.9rem;
  }
`;

const FooterItem = styled.span`
  margin-right: 0.89rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-family: "Lato";
  vertical-align: middle;
  display: inline-block;
  > * {
    vertical-align: middle;
  }
  > svg {
    width: 16px;
    height: 16px;
    &.star {
      fill: #fbc02d;
      stroke: #ffc107;
    }
  }
  @media (max-width: ${variables.breakpointPhone}) {
    margin-right: 0.49rem;
    font-size: 0.7rem;
    > svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const Circle = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  position: relative;
  vertical-align: initial;
`;

// Repository Header Component
const RepositoryHeader = ({ repo }) => {
  return (
    <RepoHead>
      <Title>
        <a
          href={`https://github.com${repo.resourcePath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </Title>
      <GitHubButton
        href={`https://github.com${repo.resourcePath}`}
        data-icon="Star"
        data-size="large"
        aria-label="Star repo on GitHub"
      >
        Star
      </GitHubButton>
    </RepoHead>
  );
};

// Repository Description Component
const RepositoryDescription = ({ repo }) => (
  <div>
    <Text>
      {repo.description || "This repo does not have a description"}

      {repo.homepageUrl && (
        <>
          {" -"} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </Text>
  </div>
);

// Repository Footer Component
const RepositoryFooter = ({ repo }) => {
  const language = repo.languages.edges[0];
  const timeAgo = new Date(repo.updatedAt) - new Date(); // Fixed typo: updatedA -> updatedAt
  const daysAgo = Math.floor(timeAgo / (1000 * 60 * 60 * 24)); // ms to days
  let updatedAt = repo.updatedAt.slice(0, 10);

  if (daysAgo > -21) {
    updatedAt = new Intl.RelativeTimeFormat("en", { style: "narrow" }).format(
      daysAgo,
      "day"
    );
  }

  return (
    <div style={{ color: `#586069`, fontSize: 12 }}>
      <FooterItem>
        <Circle
          style={{
            backgroundColor: language ? language.node.color : "#000",
          }}
        />{" "}
        {language ? language.node.name : "undefined"}{" "}
        {/* Fixed typo: undifined -> undefined */}
      </FooterItem>
      <FooterItem>
        <FiStar className="star" />
        <span> {repo.stargazers.totalCount} </span>
      </FooterItem>
      {repo.licenseInfo && (
        <FooterItem>
          <FiKey />
          <span> {repo.licenseInfo.name} </span>
        </FooterItem>
      )}
      <FooterItem>Updated: {updatedAt}</FooterItem>
      {repo.homepageUrl && <FooterItem />}{" "}
    </div>
  );
};

// Main Repository Component
const Repository = ({ repo }) => {
  return (
    <RepoContent>
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </RepoContent>
  );
};

export default Repository;
