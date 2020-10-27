import React from "react";
import { connect, styled, keyframes } from "frontity";
import BackgroundDefault from "../assets/background-images/buildings-dark.jpg";
import Link from "./Link";

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
        animation-duration: 8s;
        animation-timing-function: linear;
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
        animation: ${myTransition};
        animation-duration: 8s;
        animation-timing-function: linear;
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
                <Title>{ title }</Title>
                <ButtonWrapper>
                    <Button link='/about'>about</Button>
                    <Button link='/blog'>blog</Button>
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
    color: var(--dark-grey);
    margin: 0.5rem 0;
    border: 1px solid var(--dark-grey);
    padding: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: Bold;
    @media (min-width: 768px){
        margin: 0 0.5rem;
    }
`

const myTransition = keyframes`
    from {
        background-position: 50% 50%;
    }
    to {
        background-position: 100% 50%;
    }
`;

const TitleWrapper = styled.div`
    width: 100%;
    position: absolute;
    margin-left: 0;
    left: 0;
    top: 50%;
    margin-top: -100px;
    padding: 0 0 3rem 0;
    @media (min-width: 768px) {
        left: 50%;
        margin-left: -250px;
        width: 500px;
    }
`

const Title = styled.h1`
    text-transform: uppercase;
    position: relative;
    font-size: 4rem;
    color: var(--dark-grey);
    text-align: center;
    line-height: 50px;
`;

export default connect(BackgroundHome);
