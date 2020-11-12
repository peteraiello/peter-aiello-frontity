import React, { useRef } from "react";
import { connect, css, styled, keyframes, Global } from "frontity";
import Placeholder from "../../assets/background-images/buildings-dark.jpg";
import LogoBackground from "../Paths/LogoBackground";
import ContentCss from "../../library/content.css";
import Link from "@frontity/components/link";

const Background = ({ state, title, id, postContent, libraries }) => {

    const Html2React = libraries.html2react.Component;

    /* return null if no post content */
    if(!postContent) return null;

    /* get the background image url */
    const FeaturedMedia = state.source.attachment[id];
    
    const BackgroundUrl = (!FeaturedMedia ? Placeholder : FeaturedMedia.source_url);
    
    const BackgroundImage = styled.div`
        position: relative;
        background-image: url(${BackgroundUrl});
        background-size: auto;
        background-position: top center;
        background-attachment: scroll;
        background-repeat: no-repeat;
        /* add tint */
        background-color: rgba(0,0,0,0.20);
        background-blend-mode: overlay;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        overflow: hidden;
        @media (min-width: 768px ) {
            background-attachment: fixed;
            background-size: cover;
            background-position: 50% 50%;
        }
    `

    const BackgroundClip = styled.div`
        -webkit-clip-path: url(#path-2);
        clip-path: url(#path-2);
        position: fixed;
        background-image: url(${BackgroundUrl});
        width: auto;
        height: auto;
        background-size: auto;
        background-position: 50% 50%;
        /* add tint */
        background-color: rgba(0,0,0,0.20);
        background-blend-mode: overlay;
        animation: ${myTransition};
        animation-duration: 12s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        transform: scale(0.375);
        @media (min-width: 768px){
            transform: scale(0.75);
        }
    `

    const mainRef = useRef();

    const scrollMethod = () => {
        console.log('scroll clicked!');
        mainRef.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <>
        <Global styles={css(ContentCss)} />
            <BackgroundImage>
                <IconWrapper>
                    <BackgroundClip>
                        <LogoBackground />
                        <ClipIcon src={ BackgroundUrl } alt="branding-icon"/>
                    </BackgroundClip>
                    <TitleWrapper>
                        <Title>{ title }</Title>
                    </TitleWrapper>
                </IconWrapper>
                <ArrowWrapper>
                    <Link link={ state.router.link } onClick={ scrollMethod }>scroll</Link>
                </ArrowWrapper>
                {/* the markup for page content */}
                <ContentWrapper ref={mainRef}>
                    <Content className="main-content">
                        <Html2React html={ postContent } />
                    </Content>
                </ContentWrapper>
            </BackgroundImage>
        </>
    )
}

const ArrowAnimation = keyframes`
    0% {
        color: var(--light-grey);
    }
    50% {
        color: var(--custom-white);
    }
    100% {
        color: var(--light-grey);
    }
`;

const ArrowWrapper = styled.div` 
    position: fixed;
    bottom: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    width: 100%;
    .my-arrow {
        width: 46px;
        height: 46px;
        margin: 2rem;
        animation: ${ArrowAnimation};
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        /* background: rgba(0,0,0,0.5); */
        border-radius: 0.25rem;
    }
    a {
        text-decoration: none;
        margin: 2rem;
        animation: ${ArrowAnimation};
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
    }
`

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
    0% {
        background-position: 50% 50%;
    }
    100% {
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

const RotateAlt = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
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
    justify-content: center;
    align-items: center;
    position: fixed;
`

const Title = styled.h1`
    text-transform: uppercase;
    position: relative;
    color: var(--custom-white);
    text-align: center;
`;

const ContentWrapper = styled.div`
    background: var(--dark-grey);
    position: relative;
`

const Content = styled.div`    
    
`

export default connect(Background);
