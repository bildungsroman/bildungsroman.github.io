import React from 'react';
import { Wrapper, Title, Subtitle } from './style';

const SectionIntro = ({ title, subtitle }) => {
  return (
    <>
      <Wrapper> 
        {title &&
          <Title>{title}</Title>
        }
        {subtitle &&
          <Subtitle>{subtitle}</Subtitle>
        }
      </Wrapper>
    </>
  )
};

export default SectionIntro;
