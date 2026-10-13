import styled from "styled-components";
import variables from "../data/variables";

const Wrapper = styled.header`
  padding: 6rem 0 3rem;
  text-align: center;
  @media (max-width: ${variables.breakpointPhone}) {
    padding: 3.5rem 0 2rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  margin: 1rem auto 0;
  max-width: ${variables.readableWidth};
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-style: italic;
  color: var(--text-muted);
`;

const SectionIntro = ({ title, subtitle }) => (
  <Wrapper>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Wrapper>
);

export default SectionIntro;
