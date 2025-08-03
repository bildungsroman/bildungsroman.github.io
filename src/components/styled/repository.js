import styled from "styled-components";
import variables from "../../data/variables";

export const RepoGrid = styled.div`
  @media (min-width: ${variables.breakpointPhone}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;

export const Intro = styled.p`
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
