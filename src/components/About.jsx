import React from "react";
import styled from "styled-components";
import variables from "../data/variables";
import profileImage from "../assets/img/profile-text.png";

const ContainerLayout = styled.div`
  width: ${variables.width};
  margin-left: auto;
  margin-right: auto;

  &.wrapper {
    max-width: ${variables.wrapperWidth};
    margin: auto;
  }
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    max-width: 75rem;
  }
`;

const AboutSection = styled.section`
  text-align: left;
`;

const Avatar = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto 2rem auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: "Lato";
  font-weight: 400;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2;
  a {
    color: ${variables.primary};
    font-weight: 400;
    padding: 0;
  }
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <ContainerLayout>
      <Avatar src={profileImage} alt="user photo" />
      <AboutSection id="about">
        <Title>Full-stack human, serverless fangirl</Title>
        <Text>
          Hi! My name is Anna Spysz and I used to just write, edit, and
          translate things for a living—now I also code them (✨ feature upgrade
          ✨). Sometimes I also{" "}
          <a
            className="text-primary lined-link"
            href="https://www.flickr.com/people/fakeplasticgirl/"
            target="_blank"
            rel="noreferrer"
          >
            take pictures
          </a>
          , and other times I{" "}
          <a
            className="text-primary lined-link"
            href="https://newcenturyclassics.bandcamp.com"
            target="_blank"
            rel="noreferrer"
          >
            make
          </a>{" "}
          <a
            className="text-primary lined-link"
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
            className="text-primary lined-link"
            href="https://www.stackery.io/"
            target="_blank"
            rel="noreferrer"
          >
            Stackery
          </a>{" "}
          and now do the same at{" "}
          <a
            className="text-primary lined-link"
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            AWS
          </a>
          . I'm really into React, TypeScript, NodeJS, NextJS, and AWS
          serverless, but above all, I'm obsessed with providing good
          documentation and making developer software accessible to users at all
          stages of their careers.
        </Text>
        <Text>
          When I'm not coding or writing, I can be found button-mashing my Xbox
          controller, sampling local brews and food carts, snowboarding on Mt.
          Hood, or kung fu fighting at my local{" "}
          <a
            className="text-primary lined-link"
            href="https://www.wingchunpdx.com/"
            target="_blank"
            rel="noreferrer"
          >
            Wing Chun academy
          </a>
          . In the past I{" "}
          <a
            className="text-primary lined-link"
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
            className="text-primary lined-link"
            href="resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            download my resume
          </a>
          .
        </Text>
      </AboutSection>
    </ContainerLayout>
  );
};

export default About;
