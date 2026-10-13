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
  margin-top: 7rem;
  padding: 4rem 0 2rem;
  background: var(--surface);
  border-top: 1px solid var(--border);
`;

const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Heading = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const Quote = styled.p`
  margin: 0 0 1.5rem;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 900;
  line-height: 1.1;
`;

const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: ${variables.breakpointPhone}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg);
  color: var(--text);
  font-size: 0.95rem;
  &:hover {
    color: var(--on-primary);
    background: var(--primary);
    border-color: var(--primary);
  }
`;

const CopyRight = styled.p`
  margin: 3rem 0 0;
  font-size: 0.85rem;
  color: var(--text-muted);
`;

const iconMap = {
  bluesky: faBluesky,
  linkedin: faLinkedin,
  github: faGithub,
  "stack-overflow": faStackOverflow,
  dev: faDev,
};

const Footer = () => (
  <FooterStyle>
    <ContainerLayout>
      <FooterBody>
        <div>
          <Heading>Elsewhere</Heading>
          <SocialList>
            {socialMedia.map(({ id, name, url }) => (
              <li key={id}>
                <SocialLink
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`Follow me on ${name}`}
                >
                  <FontAwesomeIcon icon={iconMap[id]} />
                  {name}
                </SocialLink>
              </li>
            ))}
          </SocialList>
        </div>
        <div>
          <Quote>Want to say hi?</Quote>
          <ButtonDefault href={`mailto:${data.SiteContact.email}`}>
            Contact me
          </ButtonDefault>
        </div>
      </FooterBody>
      <CopyRight>
        © {new Date().getFullYear()} {data.SiteAuthor}. Built with{" "}
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          Vite
        </a>{" "}
        and{" "}
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          React
        </a>
        .
      </CopyRight>
    </ContainerLayout>
  </FooterStyle>
);

export default Footer;
