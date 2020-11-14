import React from "react";
import { connect, styled, keyframes, Global, css } from "frontity";
import BackgroundDefault from "../../assets/background-images/buildings-dark.jpg";
import FooterCopyright from "../Footer/FooterCopyright";
import ContentCss from "../../library/content.css";


const BackgroundHome = ({ state, title, id, postContent, libraries }) => {

    const Html2React = libraries.html2react.Component;

    const FeaturedMedia = state.source.attachment[id];
    const BackgroundUrl = (!FeaturedMedia ? BackgroundDefault : FeaturedMedia.source_url);

    const Background = styled.div`
        position: relative;
        background-image: url(${BackgroundUrl});
        background-size: cover;
        background-position: 50% 50%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        /* add tint */
        background-color: rgba(0,0,0,0.20);
        background-blend-mode: overlay;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        @media (min-width: 1200px) {
            background-size: 110%;
        }
    `

    const BackgroundClip = styled.div`
        clip-path: polygon(100% 0, 100% 25%, 0 45%, 0 20%);
        position: absolute;
        background-image: url(${BackgroundUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: 50% -150%;
        /* add tint */
        background-color: rgba(0,0,0,0.20);
        background-blend-mode: overlay;
        width: 100%;
        height: 100%;
        overflow: hidden;
        animation: ${myTransitionMob};
        animation-duration: 5s;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        @media (min-width: 768px) {
            animation: ${myTransition};
            animation-duration: 15s;
            animation-timing-function: ease-in-out;
            animation-delay: 0s;
            animation-iteration-count: infinite;
        }
        @media (min-width: 1200px) {
            background-size: 110%;
        }
    `

    const BackgroundClip2 = styled.div`
        clip-path: polygon(100% 50%, 100% 75%, 0 100%, 0 75%);
        position: absolute;
        background-image: url(${BackgroundUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: 50% -150%;
        /* add tint */
        background-color: rgba(0,0,0,0.20);
        background-blend-mode: overlay;
        width: 100%;
        height: 100%;
        overflow: hidden;
        animation: ${myTransitionMobAlt};
        animation-duration: 5s;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        @media (min-width: 768px) {
            animation: ${myTransitionAlt};
            animation-duration: 15s;
            animation-timing-function: ease-in-out;
            animation-delay: 0s;
            animation-iteration-count: infinite;
        }
        @media (min-width: 1200px) {
            background-size: 110%;
        }
    `

    return (
        <>
        <Global styles={css(ContentCss)} />
            <Background>
                <BackgroundClip />
                <BackgroundClip2 />
                <ContentWrapper>
                    <Content className="main-content">
                        <Html2React html={ postContent } />
                    </Content>
                </ContentWrapper>
                <CopyrightWrapper>
                    <FooterCopyright />
                </CopyrightWrapper>
            </ Background>
        </>
    )
}

const myTransitionMob = keyframes`
    0% {
        background-position: 50% 50%;
    }
    40%, 60% {
        background-position: 55% 50%;
    }
    80%, 100% {
        background-position: 50% 50%;
    }
`;

const myTransitionMobAlt = keyframes`
    0% {
        background-position: 50% 50%;
    }
    40%, 60% {
        background-position: 45% 50%;
    }
    80%, 100% {
        background-position: 50% 50%;
    }
`;

const myTransition = keyframes`
    0% {
        background-position: 50% 50%;
    }
    40%, 60% {
        background-position: 100% 50%;
    }
    80%, 100% {
        background-position: 50% 50%;
    }
`;

const myTransitionAlt = keyframes`
    0% {
        background-position: 50% 50%;
    }
    40%, 60% {
        background-position: 0% 50%;
    }
    80%, 100% {
        background-position: 50% 50%;
    }
`;

const CopyrightWrapper = styled.div` 
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

const ContentWrapper = styled.div`
    background: var(--dark-grey);
    position: absolute;
    background: transparent;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .main-content {
        width: 100%;
    }
`

const Content = styled.div`    
    h1,
    p {
        color: var(--custom-white) !important;
    }
    h1 {
        font-size: 4.25rem;
        line-height: 4.25rem;
        margin: 0rem 0px 1rem;
    }
    p {
        font-size: 1.25rem;
        line-height: 2rem;
        margin: 0rem 0px 1rem;
    }
`

export default connect(BackgroundHome);
