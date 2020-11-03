import React from "react";
import { connect, css, styled, keyframes } from "frontity";
import Placeholder from "../assets/background-images/buildings-dark.jpg";
import LogoBackground from "./Paths/LogoBackground";
import ArrowIcon from "./ArrowIcon";

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
                    <Title>{ title }</Title>
                </TitleWrapper>
                <ArrowWrapper>
                    <ArrowIcon MyClass={ MyArrow } MyFill={ ArrowFill }></ArrowIcon>
                </ArrowWrapper>
            </IconWrapper>
            {/* the markup for page content */}
            <ContentWrapper>
                <Content>
                    <Html2React html={ postContent } />
                </Content>
            </ContentWrapper>
        </BackgroundImage>
        </>
    )
}

const MyArrow = "my-arrow";

const ArrowFill = 'white';

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

const ArrowWrapper = styled.div`
    position: fixed;
    height: 75px;
    width: 32px;
    left: 50%;
    margin-left: calc(-32px / 2);
    bottom: 5%;
    margin-top: calc(-75px / 2);    
    .my-arrow {
        width: 32px;
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
    height: 100px;
    width: 500px;
    position: fixed;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    overflow: hidden;
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    justify-cotent: center;
`

const Title = styled.h1`
    text-transform: uppercase;
    position: relative;
    font-size: 4rem;
    color: var(--dark-grey);
    text-align: center;
    margin: 0;
`;

const ContentWrapper = styled.div`
    background: var(--dark-grey);
    position: relative;
`

const Content = styled.div`    
    /* gutenberg overrides */
    .wp-block-group__inner-container {
        max-width: 1200px;
        margin: 0 auto;   
    }

    .is-sticky {
        position: sticky;
        top: 0;
    }

    .full-height {
        width: 100%;
        min-height: 100vh;
    }

    .background-dark {
        background-color: var(--dark-grey);
    }

    .section-1,
    .section-2,
    .section-3 {
        padding: 10rem 30px;
    }

    .section-1 img.portrait {
        border-radius: 50%;
    }

    .section-2 h3, 
    .section-2 p {
        color: var(--dark-grey);
    }
`

export default connect(Background);
