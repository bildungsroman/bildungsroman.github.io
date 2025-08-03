import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBluesky,
  faLinkedin,
  faGithub,
  faStackOverflow,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import socialMedia from "../data/socialMedia.json";
import data from "../data/data";
import variables from "../data/variables";
import { ContainerLayout, ButtonDefault } from "./common";

const FooterStyle = styled.footer`
  margin-top: 6rem;
  padding: 1rem;
  z-index: 0;
  position: relative;
  text-align: left;
  @media (max-width: ${variables.breakpointPhone}) {
    padding-bottom: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
  }
  .quote {
    margin: 0;
    font-size: 4rem;
    font-family: "Lato";
    font-weight: 400;
    line-height: 1.2;
    color: ${variables.primary};
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 2rem;
    }
  }
`;

const SubRight = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 2px;
  text-transform: capitalize;
  margin-bottom: 20px;
  font-family: "Lato";
`;

const CopyRight = styled.p`
  font-size: 11px;
  line-height: 1.8;
  letter-spacing: 1px;
  a,
  a:visited {
    color: ${variables.primary};
  }
`;

const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  h3 {
    color: ${variables.primary};
    font-weight: 400;
  }
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
  }
`;

const FooterSocialMedia = styled.ul`
  list-style: none;
  padding-left: 0;
  @media (max-width: ${variables.breakpointPhone}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;

const MediaLink = styled.a`
  padding: 0.5rem;
  line-height: 1;
  font-size: 1rem;
  font-weight: 100;
  text-transform: capitalize;
  font-family: "Lato";
  color: ${variables.primary};
  svg {
    margin-right: 0.5rem;
  }
`;

// Icon mapping for social media platforms
const iconMap = {
  bluesky: faBluesky,
  linkedin: faLinkedin,
  github: faGithub,
  "stack-overflow": faStackOverflow,
  dev: faDev,
};

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <ContainerLayout>
          <FooterBody>
            <div>
              <h3>Elsewhere</h3>
              <FooterSocialMedia>
                {socialMedia.map(({ id, name, url }) => (
                  <li key={id}>
                    <MediaLink
                      className="lined-link"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`follow me on ${name}`}
                    >
                      <FontAwesomeIcon icon={iconMap[name] || faGithub} />
                      {name}
                    </MediaLink>
                  </li>
                ))}
              </FooterSocialMedia>
            </div>
            <div>
              <p className="text-primary quote">Want to say hi?</p>
              <ButtonDefault href={`mailto:${data.SiteContact.email}`}>
                Contact me
              </ButtonDefault>
            </div>
          </FooterBody>
          <div className="box">
            <SubRight></SubRight>
            <CopyRight>
              ©
              <span>
                {" "}
                {new Date().getFullYear()} {data.SiteAuthor}. Built with{" "}
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                  Vite
                </a>
                {" and "}
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                  React
                </a>
                {"."}
              </span>
            </CopyRight>
          </div>
        </ContainerLayout>
      </FooterStyle>
    </>
  );
};

export default Footer;
