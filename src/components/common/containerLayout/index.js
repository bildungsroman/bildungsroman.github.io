import styled from 'styled-components';
import variables from "../../../data/variables";

export const ContainerLayout = styled.div`
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
  
`
export const ListSection = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  grid-column-gap: 1rem !important;
  iframe {
    width: 100%;
    margin: 2rem auto;
  }
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    grid-template-columns: 1fr;
  }
  
`