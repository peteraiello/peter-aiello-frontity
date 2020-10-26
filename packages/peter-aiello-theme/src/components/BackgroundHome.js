import React from "react";
import { connect, styled, keyframes } from "frontity";
import BackgroundDefault from "../assets/background-images/buildings-dark.jpg";
import BuildingsBackground from "./Paths/BuildingsBackground";
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
        -webkit-clip-path: url(#path-2);
        clip-path: url(#path-2);
        background-image: url(${BackgroundUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: 50% -150%;
        margin: 12rem 0;
        width: 100%;
        height: 100%;
        transform: scale(2) translate(20%, 0);
        overflow: hidden;
        animation: ${myTransition};
        animation-duration: 8s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        @media (min-width: 768px) {
            -webkit-clip-path: url(#path-1);
            clip-path: url(#path-1); 
            transform: scale(1.25);
            background-size: 110%;
        }
        `

    return (
        <Background>
            <BuildingsBackground />
            <BackgroundClip />
            <TitleWrapper>
                <Title>{ title }</Title>
                <ButtonWrapper>
                    <Button href='/about'>about</Button>
                    <Button href='/blog'>blog</Button>
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
    color: var(--light-grey);
    margin: 0.5rem 0;
    border: 1px solid var(--light-grey);
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
    height: 200px;
    width: 500px;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    margin-top: -100px;
`

const Title = styled.h1`
    text-transform: uppercase;
    position: relative;
    font-size: 4rem;
    color: var(--light-grey);
    text-align: center;
    line-height: 50px;
`;

export default connect(BackgroundHome);
