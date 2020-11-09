import React from "react";
import { connect, styled, keyframes } from "frontity";
import BackgroundDefault from "../../assets/background-images/buildings-dark.jpg";
import Link from "../Link";

const BackgroundHome = ({ state, title, id }) => {

    const FeaturedMedia = state.source.attachment[id];
    const BackgroundUrl = (!FeaturedMedia ? BackgroundDefault : FeaturedMedia.source_url);

    const Background = styled.div`
        position: relative;
        background-image: url(${BackgroundUrl});
        background-size: cover;
        background-position: 50% 50%;
        background-attachment: fixed;
        background-repeat: no-repeat;
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
        width: 100%;
        height: 100%;
        overflow: hidden;
        animation: ${myTransition};
        animation-duration: 15s;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: infinite;
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
        width: 100%;
        height: 100%;
        overflow: hidden;
        animation: ${myTransitionAlt};
        animation-duration: 15s;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        @media (min-width: 1200px) {
            background-size: 110%;
        }
    `

    return (
        <Background>
            <BackgroundClip />
            <BackgroundClip2 />
            <TitleWrapper>
                <Title>Peter Aiello</Title>
                    <SubTitle>Front-End Developer</SubTitle>
                <ButtonWrapper>
                    <Button link='/about'>about</Button>
                    <Button link='/contact'>contact</Button>
                </ButtonWrapper>
            </TitleWrapper>
        </ Background>
    )
}

const ButtonWrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Button = styled(Link)`
    min-width: 200px;
    text-align: center;
    color: var(--custom-white);
    margin: 0.25rem;
    border: 1px solid var(--custom-white);
    padding: 1rem;
    text-decoration: none;
    font-size: 1.25rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: Bold;
    @media (min-width: 1024px){
        font-size: 1.5rem;
        color: var(--dark-grey);
        border: 1px solid var(--dark-grey);
        margin: 0 0.5rem;
    }
`

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

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
    position: relative;
    background: #00000090;
    @media (min-width: 1024px) {
        background: transparent;
    }
`

const Title = styled.h1`
    text-transform: uppercase;
    position: relative;
    text-align: center;
    margin: 0;
    color: var(--custom-white);
    @media (min-width: 1024px) {
        color: var(--dark-grey);
    }
`;

const SubTitle = styled.h2`
    text-transform: uppercase;
    position: relative;
    font-size: 1.75rem;
    line-height: 1.75rem;
    margin: 1.25rem 0 0.75rem 0;
    color: var(--dark-grey);
    text-align: center;
    line-height: 50px;
    color: var(--custom-white);
    @media (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2rem;
        margin: 1.25rem 0 2.75rem 0;
        color: var(--dark-grey);
    }
`;


export default connect(BackgroundHome);
