import React from 'react';
import styled from 'styled-components'

const HeroContent = styled.div`
  font-weight:600;
  line-height: 3rem;
  font-size:2rem;

  @media screen and (max-width: 600px){
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

const Hero = () => (
  <div style={{fontSize:'1.5rem'}}>
    <div style={{color:'#CE90C8', fontStyle:'italic'}}>{`import {`}</div>
    <HeroContent>{`. . . Front-end Developer,`}</HeroContent>
    <HeroContent>{`. . . UX/UI,`}</HeroContent>
    <HeroContent>{`. . . Coffee,`}</HeroContent>
    <HeroContent>{`. . . Trip`}</HeroContent>
    <div style={{color:'#CE90C8', fontStyle:'italic'}}>{`} from  `}<span style={{color:'#86B987',fontStyle:'italic' }}>'walli'</span></div>
  </div>
)



export default Hero