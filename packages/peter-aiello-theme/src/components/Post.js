import React, { useEffect } from "react";
import { styled, connect, Head, Global, css } from "frontity";
import Placeholder from "../assets/background-images/buildings-dark.jpg";
import BgClip from "./Paths/BlogCutout";
import Tags from "./Post/Tags";
import ContentCss from "../library/content.css";


const Post = ({ state, actions, libraries }) => {

    const Html2React = libraries.html2react.Component;

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

    /* get the head tags object */
    const headTags = state.headTags.get(post.link);
    /* get the canonical link */
    const canonicalRef = headTags[6].attributes.content ? headTags[6].attributes.content : null;

    /**
     * preload all the essential pages and blogs
     * so that when the user is on the homepage 
     * and clicks on another page, it's already loaded
     */
    useEffect(() => {
        actions.source.fetch("/");
        actions.source.fetch("/about");
        actions.source.fetch("/blog");
        actions.source.fetch("/contact");
    }, []);

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

    return data.isReady ? (
        <>  
        <Global styles={css(ContentCss)} />
            <Head>
                <title>{ post.title.rendered }</title>
                <link rel="canonical" href={ canonicalRef } />
            </Head>
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
                        <Content className="main-content">
                            <Html2React html={ post.content.rendered }/>
                        </Content>
                    </ContentContainer>
                </ContainerInner>
            </Container>
        </>
    ) : null;
};

const BackgroundWrapper = styled.div`
    background-color: #00000080;
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 100vh;
    height: 1250px;
`

const PostInfo = styled.div`
    margin: 0 0 2rem 0; 
    padding: 0 2rem;
    @media (min-width: 768px) {
        padding: 0;
    }
`

const PostDate = styled.span`
    display: block;
    text-transform: uppercase;
    color: var(--light-grey);
    font-size: 1.5rem;
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`

const Title = styled.h1`
    font-weight: bold;
    text-transform: uppercase;
    color: var(--light-grey);
    margin: 0 0 1rem;
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
    @media (min-width: 768px) {
        max-width: 1200px;
        padding: 0 2rem;
    }
`

const ContentContainer = styled.div`
    background-color: var(--custom-white);
    padding: 2rem;
    border-radius: 0;
    @media (min-width: 768px) {
        border-radius: 0.5rem;
    }
`

const Content = styled.div`
  
`

export default connect(Post);