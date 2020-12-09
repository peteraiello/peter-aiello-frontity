import React from "react";
import { styled, keyframes} from "frontity";
import Logo from "../assets/logo-no-name-light.svg";
import Image from "@frontity/components/image";

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

export default Loading;