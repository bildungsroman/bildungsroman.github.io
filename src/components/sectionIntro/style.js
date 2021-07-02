import styled from 'styled-components';
import variables from '../../data/variables';

export const Wrapper = styled.div`
  padding: 8rem 0 4rem 0;
  @media(max-width: ${variables.breakpointPhone}) {
    padding: 4rem 0 4rem 0;
  }
`
export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: 'Lato';
  font-weight: 400;
  color: ${variables.grey}
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Subtitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-family: 'Lato';
  font-style: italic;
  font-weight: 100;
  color: ${variables.grey};
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1rem;
  }
`
