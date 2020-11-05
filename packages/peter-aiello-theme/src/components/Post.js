import React, {useEffect} from "react";
import { styled, connect, Head } from "frontity";
import Placeholder from "../assets/background-images/buildings-dark.jpg";
import BgClip from "./Paths/BlogCutout";
import Tags from "./Post/Tags";
import List from "./List";


const Post = ({ actions, state, id }) => {

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

    return data.isReady ? (
        <>  

            <Head>
                <title>{ post.title.rendered }</title>
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
                        <Content dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
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
    p,
    ul,
    li
    {
        font-size: 1.25rem;
        line-height: 2rem;
    }

    ul {
        list-style: none;
        padding: 0px;
    }

    ul li :before {
        content: '>';
        margin-right: 1rem;
        font-weight: bold;
    }

    a {
        color: var(--orange-highlight)
    }

    .lead {
        font-size: 120%;
    }

    pre code {
        display: block;
        line-height: 1.75;
        padding: 1rem 1.5rem;
        overflow-x: auto;
    }

    code {
        background: var(--light-grey) none repeat scroll 0% 0%;
        border-radius: 4px;
        font-family: "Courier New", monospace;
        font-size: 0.9rem;
        margin: 0px 0.25rem;
        padding: 0.25rem 0.65rem;
    }

    hr {
        border-color: var(--orange-highlight);
        border-style: none none solid;
        border-width: 0px 0px 1px;
        border-image: none 100% / 1 / 0 stretch;
        margin: 2rem 0px;
    }

    .wp-block-table table tbody tr:nth-of-type(odd) {
        background: var(--dark-grey);
    }

    .wp-block-table table tbody tr:nth-of-type(odd) td {
        color: var(--light-grey);
    }

    .wp-block-table table tbody tr td {
        border: 0;
    }
`

export default connect(Post);