import React from "react";
import { styled, keyframes, css} from "frontity";
import Logo from "../assets/A-logo-lt.svg";
import Image from "@frontity/components/image";


const scale = keyframes`
  0% {transform: scaley(1.0)}
50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;


const Loading = () => {
  return (
    <>
      <LogoWrapper>
        <AnimatedLogo
            loading="lazy" 
            src={ Logo } 
            alt="Peter Aiello - Coding Experience"
        />
      </LogoWrapper>
    </>
  )
}

const Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const AnimatedLogo = styled(Image)`
  height: 76px;
  animation: ${Animation};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  @media (min-width: 768px) {
      height: 120px; 
  }
`

const LogoWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
    margin-top: 12rem;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: transparent;
    background-image: linear-gradient(to bottom,#21222400,#212224 50%)
`

const ContainerInner = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 2rem 2rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px){
        max-width: 1200px;
    }
`

const bar = index => css`
  background-color: rgba(255, 255, 255, 0.3);
  width: 4px;
  height: 24px;
  margin: 3px;
  border-radius: 0;
  display: inline-block;
  animation: ${scale} 1s ${index * 0.1}s infinite
  cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;

export default Loading;