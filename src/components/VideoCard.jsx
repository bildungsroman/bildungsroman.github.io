import styled from "styled-components";
import { Card } from "./common";
import YouTubeEmbed from "./YouTubeEmbed";

const VideoCardStyle = styled(Card)`
  overflow: hidden;
`;

const Body = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
`;

const Event = styled.p`
  margin: 0 0 0.35rem;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--secondary);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const Description = styled.p`
  margin: 0.6rem 0 0;
  font-size: 1rem;
  color: var(--text-muted);
`;

const VideoCard = ({ video }) => (
  <VideoCardStyle as="article">
    <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
    <Body>
      <Event>
        {video.event}
        {video.date && ` · ${video.date}`}
      </Event>
      <Title>
        <a
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noreferrer"
        >
          {video.title}
        </a>
      </Title>
      {video.description && <Description>{video.description}</Description>}
    </Body>
  </VideoCardStyle>
);

export default VideoCard;
