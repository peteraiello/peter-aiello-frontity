import React from "react";
import { connect, styled } from "frontity";
import BgImage from "../assets/background-images/buildings-dark.jpg";
import BgClip from "./Paths/BlogCutout";
import List from "./List";

const Archive = ({ state }) => {
    return (
        <>
            <BackgroundImage>
                <BgClip />        
            </BackgroundImage>
            <Container>
                <ContainerInner>
                    <List />
                </ContainerInner>
            </Container>
        </>
    )
};

const BackgroundImage = styled.div`
    -webkit-clip-path: url(#path-1);
    min-height: 100vh;
    height: 1250px;
    width: 100%;
    background-image: url("${BgImage}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    clip-path: url(#path-1);
    overflow: hidden;
    position: absolute;
    top: 0;
    transform: translate(0, -20%);
`

const Container = styled.div`
    width: 100%;
    margin: 12rem auto 0;
`

const ContainerInner = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;  
    @media (min-width: 768px) {
        max-width: 1200px;
    }
`

export default connect(Archive);