import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { Card } from "./common";

const AppCardStyle = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Snapshot = styled.a`
  display: block;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 400ms ease;
  }
  &:hover img {
    transform: scale(1.03);
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover img {
      transform: none;
    }
  }
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.5rem;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.4rem;
`;

const Description = styled.p`
  flex: 1;
  margin: 0;
  font-size: 1rem;
  color: var(--text-muted);
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    background: var(--surface-2);
    color: var(--secondary);
    font-size: 0.85rem;
    font-weight: 900;
  }
`;

const Visit = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 900;
`;

const AppCard = ({ app }) => {
  const { theme } = useTheme();
  const host = app.url.replace(/^https?:\/\//, "");

  return (
    <AppCardStyle as="article">
      <Snapshot
        href={app.url}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={app.images[theme]}
          alt=""
          width="1280"
          height="800"
          loading="lazy"
        />
      </Snapshot>
      <Body>
        <Name>{app.name}</Name>
        <Description>{app.description}</Description>
        <Tags aria-label="Built with">
          {app.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </Tags>
        <Visit href={app.url} target="_blank" rel="noreferrer">
          Visit {host} <FiArrowUpRight aria-hidden="true" />
        </Visit>
      </Body>
    </AppCardStyle>
  );
};

export default AppCard;
