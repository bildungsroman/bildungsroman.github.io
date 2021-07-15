import Img from 'gatsby-image';
import styled from 'styled-components';
import variables from '../../data/variables';

export const AboutSection = styled.section`
  text-align: left;
`
export const Avatar = styled(Img)`
  width: 100%;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: 'Lato';
  font-weight: 400;
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2;
  a {
    color: ${variables.primary};
    font-weight: 400;
    padding: 0;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1rem;
  }
`
