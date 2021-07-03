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
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  iframe {
    width: 100%;
    margin: 2rem auto;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    iframe {
      margin: .5rem auto;
      max-height: 400px;
    }
  }
`