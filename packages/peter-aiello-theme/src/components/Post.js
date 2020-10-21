import React from "react";
import { styled, connect } from "frontity";
import Placeholder from "../assets/background-images/buildings-dark.jpg";
import BgClip from "./Paths/BlogCutout";
import Tags from "./Post/Tags";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);

/* the css */
const customWht = "#ffffff";
const drkColor = "#212224";
const lightGrey = "#E0E0E0";
const lightOrange = "#DFBD85";

const Post = ({ state, id }) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    /* code for tags */
    const PostTags = post.tags; // returns array
    /* returns the data for the id for featured media */
    const FeauturedMediaId = post.featured_media; 
    const FeaturedMedia = state.source.attachment[FeauturedMediaId];    
    /* returns the source url OR a placeholder if empty */
    const BgImage = (!FeaturedMedia ? Placeholder : FeaturedMedia.source_url);

    /* post id */
    const date = new Date(post.date);

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
        filter: blur(1px);
    `

    return (
        <>  
            <BackgroundImage>
                <BackgroundWrapper>
                    <BgClip />
                </BackgroundWrapper>
            </BackgroundImage>
            <Container>
                <ContainerInner>
                    <PostInfo>
                        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }}  />
                        <Tags tags={PostTags} />
                        <PostDate>{date.toDateString()}</PostDate>
                    </PostInfo>
                    <ContentContainer>
                        <Content dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </ContentContainer>
                </ContainerInner>
            </Container>
        </>
    )
};

const BackgroundWrapper = styled.div`
    background-color: ${drkColor}E6;
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 100vh;
    height: 1250px;
`

const PostInfo = styled.div`
    margin: 0 0 2rem 0; 
    padding: 0 2rem;
    ${mq[1]}{
        padding: 0;
    }
`

const PostDate = styled.span`
    display: block;
    text-transform: uppercase;
    color: ${lightGrey};
    font-size: 1.5rem;
    ${mq[1]}{
        font-size: 2rem;
    }
`

const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${lightGrey};
    margin: 2rem 0;
    ${mq[1]}{
        font-size: 3.75rem;
    }
`;

const Container = styled.div`
    width: 100%;
    margin: 12rem 0 2rem 0;
`

const ContainerInner = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    box-sizing: border-box;  
    ${mq[1]} {
        max-width: 1200px;
        padding: 0 2rem;
    }
`

const ContentContainer = styled.div`
    background-color: ${customWht};
    padding: 2rem;
    border-radius: 0;
    ${mq[1]}{
        border-radius: 0.5rem;
    }
`

const Content = styled.div`
    code {
        font-family: 'Open Sans', sans-serif;
        background-color: ${drkColor}20;
        padding: 2rem;
        box-sizing: border-box;
        display: block;
        white-space: pre-wrap;
    }   
`

export default connect(Post);