import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AboutSection, Avatar, Text, Title } from './style';
import { ContainerLayout } from '../common';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-text.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <ContainerLayout>
        <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
        <AboutSection id='about'>
          <Title>Full-stack human, serverless fangirl</Title>
          <Text>
            Hi! My name is Anna Spysz and I used to just write, edit, and translate things for a living—now I also code them (✨ feature upgrade ✨). Sometimes I also <a className="text-primary lined-link" href="http://www.flickr.com/photos/fakeplasticgirl/" target="_blank" rel="noreferrer">take pictures</a>, and other times I <a className="text-primary lined-link" href="https://newcenturyclassics.bandcamp.com/" target="_blank" rel="noreferrer">make music</a>. Mostly, though, I love to read, learn, and travel.
          </Text>
          <Text>
            I was born in Poland 🇵🇱 but spent most of my childhood in Texas 🤠. After repatriating back to Poland for my MA, I came back to the U.S. in 2017 and now live in Portland, Oregon 🌲, where I make building serverless apps more delightful (and visual) at <a className="text-primary lined-link" href="https://www.stackery.io/" target="_blank" rel="noreferrer">Stackery</a>. I'm really into React, NodeJS, and AWS serverless, but above all, I'm obsessed with providing good documentation and making developer software accessible to users at all stages of their careers.</Text>
          <Text>
            When I'm not coding or writing, I can be found button-mashing my Xbox controller, sampling local brews and food carts, or kung fu fighting at my local <a className="text-primary lined-link" href="https://www.wingchunpdx.com/" target="_blank" rel="noreferrer">Wing Chun academy</a>. In the past I <a className="text-primary lined-link" href="https://www.amazon.com/gp/product/0985062304/" target="_blank" rel="noreferrer">wrote a book</a> (ok, technically half) and used to write a lot about tech and startups before joining one myself.
          </Text>
          <Text>
            Want to learn more? Find my social media links below, or <a className="text-primary lined-link" href="resume.pdf" target="_blank" rel="noreferrer">download my resume</a>.
          </Text>
        </AboutSection>
      </ContainerLayout>
    </>
  )
};

export default About;
