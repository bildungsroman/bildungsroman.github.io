import styled from "styled-components";
import variables from "../../../data/variables";

export const ContainerLayout = styled.div`
  width: ${variables.width};
  max-width: ${variables.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

export const ListSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 1.75rem;
`;
