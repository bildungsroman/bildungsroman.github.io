import { useState } from "react";
import styled from "styled-components";

const Frame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--surface-2);
  iframe,
  button,
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  img {
    object-fit: cover;
    transition: transform 400ms ease;
  }
`;

const PlayButton = styled.button`
  display: grid;
  place-items: center;
  padding: 0;
  background: none;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgb(0 0 0 / 45%), transparent 60%);
  }
  &:hover img {
    transform: scale(1.04);
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover img {
      transform: none;
    }
  }
`;

const PlayIcon = styled.span`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: var(--button-gradient);
  box-shadow: 0 8px 24px rgb(0 0 0 / 35%);
  transition: transform 200ms ease;
  &::before {
    content: "";
    margin-left: 0.3rem;
    border-style: solid;
    border-width: 0.8rem 0 0.8rem 1.3rem;
    border-color: transparent transparent transparent var(--on-button);
  }
  ${PlayButton}:hover & {
    transform: scale(1.1);
  }
`;

// Shows a thumbnail and only loads the YouTube player once clicked, so a page
// with several videos doesn't pull in several heavy iframes up front.
const YouTubeEmbed = ({ youtubeId, title }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <Frame>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <PlayButton
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            width="480"
            height="360"
          />
          <PlayIcon aria-hidden="true" />
        </PlayButton>
      )}
    </Frame>
  );
};

export default YouTubeEmbed;
