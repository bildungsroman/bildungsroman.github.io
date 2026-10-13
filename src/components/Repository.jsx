import { FiStar, FiGitBranch, FiKey, FiExternalLink } from "react-icons/fi";
import styled from "styled-components";
import { Card } from "./common";

const RepoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 900;
  a {
    color: var(--heading);
  }
  a:hover {
    color: var(--primary);
  }
`;

const Description = styled.p`
  margin: 0;
  flex: 1;
  font-size: 1rem;
  color: var(--text-muted);
`;

const Meta = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.9rem;
  color: var(--text-muted);
  li {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }
  .star {
    color: var(--accent);
  }
`;

const LanguageDot = styled.span`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

const HomepageLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.95rem;
  font-weight: 700;
`;

const formatUpdated = (updatedAt) => {
  const daysAgo = Math.round(
    (new Date(updatedAt) - new Date()) / (1000 * 60 * 60 * 24)
  );
  if (daysAgo > -30) {
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      daysAgo,
      "day"
    );
  }
  return new Date(updatedAt).toLocaleDateString("en", {
    month: "short",
    year: "numeric",
  });
};

const Repository = ({ repo }) => (
  <RepoCard as="article">
    <Title>
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </a>
    </Title>
    <Description>
      {repo.description || "This repo does not have a description."}
    </Description>
    {repo.homepageUrl && (
      <HomepageLink
        href={repo.homepageUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink aria-hidden="true" />
        {repo.homepageUrl.replace(/^https?:\/\/(www\.)?/, "")}
      </HomepageLink>
    )}
    <Meta>
      {repo.primaryLanguage && (
        <li>
          <LanguageDot $color={repo.primaryLanguage.color} />
          {repo.primaryLanguage.name}
        </li>
      )}
      <li aria-label={`${repo.stargazerCount} stars`}>
        <FiStar className="star" aria-hidden="true" />
        {repo.stargazerCount}
      </li>
      <li aria-label={`${repo.forkCount} forks`}>
        <FiGitBranch aria-hidden="true" />
        {repo.forkCount}
      </li>
      {repo.licenseInfo && (
        <li>
          <FiKey aria-hidden="true" />
          {repo.licenseInfo.name}
        </li>
      )}
      <li>Updated {formatUpdated(repo.updatedAt)}</li>
    </Meta>
  </RepoCard>
);

export default Repository;
