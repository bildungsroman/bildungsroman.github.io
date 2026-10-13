import styled from "styled-components";
import variables from "../../data/variables";
import { CardGrid } from "../common";

export const RepoGrid = styled(CardGrid)`
  margin-top: 2rem;
`;

export const Intro = styled.p`
  max-width: ${variables.readableWidth};
  font-size: 1.2rem;
  line-height: 1.9;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 1.05rem;
  }
`;
