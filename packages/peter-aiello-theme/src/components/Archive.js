import React from "react";
import { connect, styled } from "frontity";
import BgImage from "../assets/background-images/buildings-dark.jpg";
import BgClip from "./Paths/BlogCutout";
import List from "./List";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);

const Archive = ({ state }) => {
    return (
        <>
            <BackgroundImage>
                <BgClip />        
            </BackgroundImage>
            <Container>
                <ContainerInner>
                    <Content>
                        <List />
                    </Content>
                </ContainerInner>
            </Container>
        </>
    )
};

const BackgroundImage = styled.div`
    min-height: 100vh;
    height: 1250px;
    width: 100%;
    background-image: url("${BgImage}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    -webkit-clip-path: url(#path-1);
    clip-path: url(#path-1);
    overflow: hidden;
    position: absolute;
    top: 0;
    transform: translate(0, -20%);
`

const Container = styled.div`
    width: 100%;
    margin: 12rem auto;
`

const ContainerInner = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;  
    ${mq[1]} {
        max-width: 1200px;
    }
`

const Content = styled.div`

`

export default connect(Archive);