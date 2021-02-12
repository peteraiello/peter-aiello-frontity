import React from "react";
import { styled, connect } from "frontity";
import Link from "../Link";
import Tags from "./Tags";
import Image from "@frontity/components/image";
import Placeholder from "../../assets/placeholder-thumbnail.png";


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
                        <PostLink key={id} link={post.link} >
                            <PostItem>

                                <Thumbnail className="post-thumbnail"
                                    src={ FeaturedMedia ? FeaturedMedia.source_url : Placeholder }
                                    alt={ FeaturedMedia ? FeaturedMedia.alt_text : 'thumbnail placeholder'}
                                    loading="lazy" 
                                />
                            
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

                                    <Excerpt>
                                        <Html2React html={ post.excerpt.rendered } />
                                    </Excerpt>

                                    <ButtonWrapper>
                                        <Button>
                                            read now
                                        </Button>
                                    </ButtonWrapper>

                                </PostDescWrapper>
                            </PostItem>
                        </PostLink>
                    )
                })}
        </>
    )
}


const PostMeta = styled.div`
    display: flex;
    @media (min-width: 1200px) {
        display: block;
    }
`

const Thumbnail = styled(Image)`
    width: 100%;
    object-fit: cover;
    margin-right: 2rem;
    transition: clip-path 1s;
    @media (min-width: 1200px) {
        flex-direction: column;
        width: 35%;
        height: 100%;
        min-height: 445px;
        clip-path: polygon(0 0,100% 0%,50% 100%,0% 100%);
    }
`

const PostDate = styled.span`
    display: inline-block;
    text-transform: uppercase;
    color: var(--light-grey);
    font-size: 1.5rem;
    margin: ${PostMargin};
`

const Title = styled.h4`
    font-weight: bold;
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
    box-sizing: border-box;
    padding: 1rem;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }
    @media (min-width: 1200px) {
        flex-direction: column;
        width: 65%;
    }
`

const Button = styled.div`
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
    display: flex;
    margin-bottom: 8px;
    :last-of-type {
        margin-bottom: 0px;
    }
`

const PostItem = styled.div`
    text-decoration: none;
    border-radius: 1.25rem;
    margin: 0 0.5rem 2rem 0.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: var(--dark-blue);
    overflow: hidden;
    height: 100%;
    @media (min-width: 1200px) {
        &:hover {
            .post-thumbnail {
                clip-path: polygon(0 0,90% 0%,60% 100%,0% 100%);
            }
        }
    }
    @media (min-width: 1200px) {
        flex-direction: row;
    }
`

const PostLink = styled(Link)`
    text-decoration: none;
    @media (min-width: 768px) {
        display: block;
        max-width: 50%;
        &:last-of-type {
            margin-top: 1rem;
        }
    }
    @media (min-width: 1200px) {
        display: flex;
        flex: 1;
        max-width: 100%;
    }
`

export default connect(List);