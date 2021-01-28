import React from "react";
import { styled, connect } from "frontity";
import Link from "../Link";
import Tags from "./Tags";
import Image from "@frontity/components/image";


const PostMargin = "0 0 1rem 0";

const List = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    return (
            <>
                { data.items.map(({ id }) => {

                    const post = state.source.post[id];
                    const Html2React=libraries.html2react.Component;
                    const date = new Date(post.date);
                    const PostTags = post.tags; 
                    /* returns the data for the id for featured media */
                    const FeauturedMediaId = post.featured_media; 
                    /* returns the featured media object */
                    const FeaturedMedia = state.source.attachment[FeauturedMediaId];  
                    
                    return (
                        <PostLink link={post.link}>
                            <PostItem key={id}>
                                <ThumbnailWrapper>
                                    <Thumbnail 
                                        src={ FeaturedMedia.source_url }
                                        alt={ FeaturedMedia.alt_text }
                                        loading="lazy" 
                                    />
                                </ThumbnailWrapper>
                        
                                <PostDescWrapper>
                                    <Title>
                                        <Html2React html={ post.title.rendered } />
                                    </Title>

                                    <PostMeta>                                
                                        { PostTags ? <Tags tags={PostTags}/> : null }
                                        <PostDate>
                                            {date.toDateString()}
                                        </PostDate>
                                    </PostMeta>

                                    <ButtonWrapper>
                                        <Button link={post.link}>read now</Button>
                                    </ButtonWrapper>

                                </PostDescWrapper>
                            </PostItem>
                        </PostLink>
                    )
                }) }
        </>
    )
}

const PostMeta = styled.div`
    display: flex;
`

const ThumbnailWrapper = styled.div`
    width: 100%;
    padding: 0 1rem 0 0;
    @media (min-width: 768px) {
        flex-direction: column;
        width: 35%
    }
`

const Thumbnail = styled(Image)`
    width: 100%;
`

const PostDate = styled.span`
    display: inline-block;
    text-transform: uppercase;
    color: var(--light-grey);
    font-size: 1.5rem;
    margin: ${PostMargin};
`

const Title = styled.h1`
    font-weight: bold;
    text-transform: uppercase;
    color: var(--light-grey);
    margin: ${PostMargin};
`

const Excerpt = styled.div`
    margin: ${PostMargin};
    p {
        color: var(--light-grey);
        font-size: 1.25rem;
        line-height: 2rem;
        display: inline;
    }    
    span.read-more {
        color: var(--light-grey);
        display: inline-block;
        margin-left: 0.33rem;
        font-size: inherit;
    }
`

const PostDescWrapper = styled.div`
    display: block;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: column;
        width: 65%;
        margin: -1.3rem 0 0 0;
    }
`

const PostItem = styled.div`
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Button = styled(Link)`
    display: block;
    width: auto;
    text-align: center;
    color: var(--orange-highlight);
    border: 1px solid var(--orange-highlight);
    padding: 1rem 3rem;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-family: 'Open Sans',sans-serif;
    font-weight: Bold;
    border-radius: 0;
    background-color: transparent;
`

const ButtonWrapper = styled.div`
    display: inline-block;
    margin-bottom: 8px;
    :last-of-type {
        margin-bottom: 0px;
    }
`

const PostLink = styled(Link)`
    text-decoration: none;
    border-bottom: 1px solid var(--orange-highlight);
    display: block;
    &:last-of-type {
        border: none;
    }
`

export default connect(List);