import React from "react";
import { connect, css, styled, keyframes } from "frontity";

import Placeholder from "../assets/background-images/buildings-dark.jpg";
import LogoBackground from "./Paths/LogoBackground";

const Page404 = () => {
    
    const BackgroundUrl = Placeholder;

    const BackgroundImage = styled.div`
        position: relative;
        background-image: url(${BackgroundUrl});
        background-size: cover;
        background-position: 50% 50%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        overflow: hidden;
    `

    const BackgroundClip = styled.div`
        -webkit-clip-path: url(#path-2);
        position: fixed;
        top: 50%;
        clip-path: url(#path-2);
        background-image: url(${BackgroundUrl});
        width: 800px;
        height: 800px;
        margin-top: -400px;
        background-size: cover;
        background-position: 50% 50%;
        animation: ${myTransition};
        animation-duration: 8s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        transform: scale(0.5);
        @media (min-width: 768px){
            transform: scale(0.75);
        }
    `

    return (
        <>
            <BackgroundImage>
                <IconWrapper>
                    <BackgroundClip>
                        <LogoBackground />
                        <ClipIcon src={ BackgroundUrl } alt="branding-icon"/>
                    </BackgroundClip>
                    <TitleWrapper>
                        <Title>Lost...</Title>
                    </TitleWrapper>
                </IconWrapper>
            </BackgroundImage>
        </>
    )
}


const ArrowAnimation = keyframes`
    0% {
        fill: var(--light-grey);
        transform: translate(0px, 0px);
    }
    10% {
        transform: translate(0px, 5px);
    }
    20% {
        transform: translate(0px, 0px);
    }
    30% {
        transform: translate(0px, 5px);
    }
    40% {
        transform: translate(0px, 0px);
    }
    50% {
        fill: var(--light-grey);
    }
`;

const IconWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
`

const myTransition = keyframes`
    from {
        background-position: 50% 50%;
    }
    to {
        background-position: 100% 50%;
    }
`;

const Rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ClipIcon = styled.img`
    -webkit-clip-path: url(#path-1);
    clip-path: url(#path-1);
    width: 796px;
    height: 796px;
    animation: ${Rotate};
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    text-transform: uppercase;
    color: var(--light-grey);
    text-align: center;
    position: fixed;
`;


export default connect(Page404);