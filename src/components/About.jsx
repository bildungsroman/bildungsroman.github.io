import styled from "styled-components";
import variables from "../data/variables";
import { ButtonLink } from "./common";
import { GradientText } from "./common/global";
import profileImage from "../assets/img/profile-text.png";

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0 3rem;
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 0 1rem;
    text-align: center;
  }
`;

const Eyebrow = styled.p`
  display: inline-block;
  margin: 0 0 1.25rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--primary);
  font-size: 0.95rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.75rem, 6.5vw, 4.75rem);
  letter-spacing: -0.02em;
`;

const Lead = styled.p`
  margin: 1.5rem 0 2rem;
  font-size: 1.3rem;
  color: var(--text-muted);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: ${variables.breakpointPhone}) {
    justify-content: center;
  }
`;

const ResumeLink = styled.a`
  font-weight: 900;
`;

const Portrait = styled.figure`
  position: relative;
  margin: 0;
  aspect-ratio: 1;
  border-radius: 2.5rem;
  background: var(--gradient);
  box-shadow: var(--shadow-lift);
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 25%);
    pointer-events: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
  @media (max-width: ${variables.breakpointPhone}) {
    max-width: 22rem;
    margin: 0 auto;
    order: -1;
  }
`;

const AboutSection = styled.section`
  max-width: ${variables.readableWidth};
  h2 {
    margin-top: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.9;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 1.05rem;
  }
`;

const About = () => {
  return (
    <>
      <Hero>
        <div>
          <Eyebrow>Developer Advocate at Stripe</Eyebrow>
          <Title>
            Full-stack human, <GradientText>serverless fangirl</GradientText>
          </Title>
          <Lead>
            Writer turned software engineer who loves React, TypeScript,
            serverless, and making developer tools feel delightful.
          </Lead>
          <Actions>
            <ButtonLink to="/apps">See my apps</ButtonLink>
            <ResumeLink
              className="lined-link"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download my resume
            </ResumeLink>
          </Actions>
        </div>
        <Portrait>
          <img
            src={profileImage}
            alt="Anna Spysz smiling and holding a sign that says Hi, I'm Anna"
            width="1000"
            height="1000"
            fetchPriority="high"
          />
        </Portrait>
      </Hero>
      <AboutSection id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">About me</h2>
        <Text>
          Hi! My name is Anna Spysz and I used to just write, edit, and
          translate things for a living—now I also code them (✨ feature upgrade
          ✨). Sometimes I also{" "}
          <a
            className="lined-link"
            href="https://www.flickr.com/people/fakeplasticgirl/"
            target="_blank"
            rel="noreferrer"
          >
            take pictures
          </a>
          , and other times I{" "}
          <a
            className="lined-link"
            href="https://newcenturyclassics.bandcamp.com"
            target="_blank"
            rel="noreferrer"
          >
            make
          </a>{" "}
          <a
            className="lined-link"
            href="https://open.spotify.com/artist/5VEKmbZzSLVfWP6NrN4hRN"
            target="_blank"
            rel="noreferrer"
          >
            music
          </a>
          . Mostly, though, I love to read, learn, and travel.
        </Text>
        <Text>
          I was born in Poland 🇵🇱 but spent most of my childhood in Texas 🤠.
          After repatriating back to Poland for my MA, I came back to the U.S.
          in 2017 and now live in Portland, Oregon 🌲, where I started making
          building serverless apps more delightful (and visual) at{" "}
          <a
            className="lined-link"
            href="https://www.stackery.io/"
            target="_blank"
            rel="noreferrer"
          >
            Stackery
          </a>{" "}
          and then at{" "}
          <a
            className="lined-link"
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            AWS
          </a>
          .
        </Text>
        <Text>
          In 2026 I started a new adventure as a Developer Advocate at{" "}
          <a
            className="lined-link"
            href="https://stripe.com/"
            target="_blank"
            rel="noreferrer"
          >
            Stripe
          </a>
          , where I hope to help Stripe developers level up their payment
          integrations. I'm really into React, TypeScript, NextJS, and AWS
          serverless, but above all, I'm obsessed with providing good
          documentation and making software accessible to users at all stages of
          their careers.
        </Text>
        <Text>
          When I'm not coding, presenting, or writing, I can be found
          button-mashing my Xbox controller, sampling local brews and food
          carts, snowboarding on Mt. Hood, or kung fu fighting at my local{" "}
          <a
            className="lined-link"
            href="https://www.wingchunpdx.com/"
            target="_blank"
            rel="noreferrer"
          >
            Wing Chun academy
          </a>
          . In the past I{" "}
          <a
            className="lined-link"
            href="https://www.amazon.com/gp/product/0985062304/"
            target="_blank"
            rel="noreferrer"
          >
            wrote a book
          </a>{" "}
          (ok, technically half) and used to write a lot about tech and startups
          before joining one myself.
        </Text>
        <Text>
          Want to learn more? Find my social media links below, or{" "}
          <a
            className="lined-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            download my resume
          </a>
          .
        </Text>
      </AboutSection>
    </>
  );
};

export default About;
