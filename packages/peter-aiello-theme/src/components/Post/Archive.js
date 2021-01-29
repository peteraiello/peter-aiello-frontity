import React from "react";
import { connect, styled, Head } from "frontity";
import BgImage from "../../assets/background-images/buildings-dark.jpg";
import BgClip from "../Paths/BlogCutout";
import List from "./List";
import Pagination from "./Pagination";

const Archive = ({ state }) => {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Keep up to date with my latest posts." />
                <link rel="canonical" href={state.frontity.url + '/blog/'} />
            </Head>
            <BackgroundImage>
                <BgClip />        
            </BackgroundImage>
            <Container>
                <ContainerInner>
                    <FlexWrapper>
                        <List />
                        <Pagination/>   
                    </FlexWrapper>
                </ContainerInner>
            </Container>
        </>
    )
};

const FlexWrapper = styled.div`
    display: block;
    @media (min-width: 768px) {
        display: flex;
    }
    @media (min-width: 1200px) {
        display: block;
    }
`

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
    margin: 8rem auto 0;
    @media (min-width: 768px) {
        margin: 12rem auto 0;
    }
`

const ContainerInner = styled.div`
    margin: 0 auto;
    position: relative;
    padding: 0 30px;
    width: 100%;
    box-sizing: border-box;  
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`

export default connect(Archive);