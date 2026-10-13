import styled from "styled-components";
import { FiCalendar, FiHeadphones } from "react-icons/fi";
import SectionIntro from "../components/SectionIntro";
import VideoCard from "../components/VideoCard";
import { Intro } from "../components/styled/repository";
import {
  upcomingTalks,
  talks,
  interviews,
  audioInterviews,
  blogPosts,
} from "../data/speaking";
import speakingImage from "../assets/img/speaking-banner.webp";
import { usePageMeta } from "../hooks/usePageMeta";

const Banner = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto 3rem;
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

const TalkTitle = styled.span`
  font-weight: 900;
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
  usePageMeta({
    title: "Speaking",
    description:
      "Upcoming talks, past talks, interviews, podcasts, and blog posts by Anna Spysz on agentic commerce, developer tools, and payments.",
    path: "/speaking",
  });
  return (
    <>
      <SectionIntro
        title="Speaking"
        subtitle="Occasional Serverless Thought-Haver™"
      />
      <Banner
        src={speakingImage}
        alt="Anna speaking on stage at a Stripe Developer Meetup in San Francisco"
        width="961"
        height="347"
      />
      <Intro>
        I'm passionate about making modern application development accessible to
        users at all levels, particularly beginners and those from
        non-traditional backgrounds. At AWS, I had the privilege of speaking at
        internal conferences such as WebDevCon, as well as making guest
        appearances on several AWS On Air segments. Now at Stripe, speaking is
        literally my job, so expect to see me at a{" "}
        <a
          className="lined-link"
          href="https://www.meetup.com/pro/stripe/"
          target="_blank"
          rel="noreferrer"
        >
          Stripe meetup
        </a>{" "}
        or conference near you!
      </Intro>

      <section id="upcoming" aria-labelledby="upcoming-heading">
        <SectionHeading id="upcoming-heading">
          Upcoming talks <span>Where I'll be next</span>
        </SectionHeading>
        {upcomingTalks.length > 0 ? (
          <LinkList>
            {upcomingTalks.map(({ title, event, date, location, url }) => (
              <li key={`${date}-${title}`}>
                <FiCalendar aria-hidden="true" />
                <div>
                  {url ? (
                    <a href={url} target="_blank" rel="noreferrer">
                      {title}
                    </a>
                  ) : (
                    <TalkTitle>{title}</TalkTitle>
                  )}
                  <small>
                    {[date, event, location].filter(Boolean).join(" · ")}
                  </small>
                </div>
              </li>
            ))}
          </LinkList>
        ) : (
          <Intro>Nothing on the calendar yet.</Intro>
        )}
      </section>

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
          In addition to speaking, I love developing and writing tutorials and
          blog posts, the sillier the better. You can see a lot of my work on{" "}
          <a
            className="lined-link"
            href="https://www.stripe.dev/blog/"
            target="_blank"
            rel="noreferrer"
          >
            Stripe Dot Dev
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
