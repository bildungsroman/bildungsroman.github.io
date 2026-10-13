import styled from "styled-components";
import { FiHeadphones } from "react-icons/fi";
import SectionIntro from "../components/SectionIntro";
import VideoCard from "../components/VideoCard";
import { Intro } from "../components/styled/repository";
import {
  talks,
  interviews,
  audioInterviews,
  blogPosts,
} from "../data/speaking";
import speakingImage from "../assets/img/speaking-banner.png";

const Banner = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto 3rem;
  border-radius: 2rem;
  box-shadow: var(--shadow-lift);
`;

const SectionHeading = styled.h2`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-muted);
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 26rem), 1fr));
  gap: 1.75rem;
`;

const SubHeading = styled.h3`
  margin: 2.5rem 0 1rem;
  font-size: 1.3rem;
`;

const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
    padding: 1rem 1.25rem;
    border: 1px solid var(--border);
    border-radius: 1rem;
    background: var(--surface);
  }
  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: var(--accent);
  }
  a {
    font-weight: 900;
  }
  small {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.9rem;
    color: var(--text-muted);
  }
`;

const Speaking = () => {
  return (
    <>
      <SectionIntro
        title="Speaking"
        subtitle="Occasional Serverless Thought-Haver™"
      />
      <Banner
        src={speakingImage}
        alt="Anna on stage holding a beer while giving a talk"
        width="1705"
        height="546"
      />
      <Intro>
        I'm passionate about making modern application development accessible to
        users at all levels, particularly beginners and those from
        non-traditional backgrounds. At AWS, I had the privilege of speaking at
        internal conferences such as WebDevCon in 2022, 2023, 2024, and 2025, as
        well as making guest appearances on several AWS On Air segments. Now at
        Stripe, speaking is literally my job, so expect to see me at a{" "}
        <a
          className="lined-link"
          href="https://www.meetup.com/pro/stripe/"
          target="_blank"
          rel="noreferrer"
        >
          Stripe meetup
        </a>{" "}
        near you!
      </Intro>

      <section aria-labelledby="talks-heading">
        <SectionHeading id="talks-heading">
          Talks <span>Conferences, meetups, and demos</span>
        </SectionHeading>
        <VideoGrid>
          {talks.map((video) => (
            <VideoCard key={video.youtubeId} video={video} />
          ))}
        </VideoGrid>
      </section>

      <section aria-labelledby="interviews-heading">
        <SectionHeading id="interviews-heading">
          Interviews <span>Livestreams, shows, and podcasts</span>
        </SectionHeading>
        <VideoGrid>
          {interviews.map((video) => (
            <VideoCard key={video.youtubeId} video={video} />
          ))}
        </VideoGrid>
        <SubHeading>Podcasts</SubHeading>
        <LinkList>
          {audioInterviews.map(({ title, url, show }) => (
            <li key={url}>
              <FiHeadphones aria-hidden="true" />
              <div>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
                <small>{show}</small>
              </div>
            </li>
          ))}
        </LinkList>
      </section>

      <section aria-labelledby="blog-heading">
        <SectionHeading id="blog-heading">Selected blog posts</SectionHeading>
        <Intro>
          In addition to speaking, I love developing and writing tutorials, the
          sillier the better. You can see a lot of my work on the{" "}
          <a
            className="lined-link"
            href="https://www.stackery.io/blog/"
            target="_blank"
            rel="noreferrer"
          >
            Stackery Blog
          </a>
          , and here are a few select posts:
        </Intro>
        <LinkList>
          {blogPosts.map(({ title, url, publication }) => (
            <li key={url}>
              <div>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
                <small>{publication}</small>
              </div>
            </li>
          ))}
        </LinkList>
      </section>
    </>
  );
};

export default Speaking;
