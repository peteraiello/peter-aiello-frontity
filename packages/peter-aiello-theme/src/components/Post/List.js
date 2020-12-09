import React from "react";
import { styled, connect } from "frontity";
import Link from "../Link";
import Tags from "./Tags";
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
                    return (
                        <PostItem key={id}>
                            <Title>
                                <Html2React html={ post.title.rendered } />
                            </Title>
                                { PostTags ? <Tags tags={PostTags}/> : null }
                                <PostDate>{date.toDateString()}</PostDate>
                            <Excerpt>  
                                <Html2React html={ post.excerpt.rendered} />
                            </Excerpt>
                            <ButtonWrapper>
                                <Button link={post.link}>read now</Button>
                            </ButtonWrapper>
                        </PostItem>
                    )
                }) }
        </>
    )
}

const PostDate = styled.span`
    display: block;
    text-transform: uppercase;
    color: var(--light-grey);
    font-size: 1.5rem;
    margin: ${PostMargin};
    @media (min-width: 768px) {
        font-size: 2rem;
    }
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

const PostItem = styled.div`
    border-bottom: 2px solid var(--orange-highlight);
    padding: 3rem 0;
    &:last-of-type {
        border: none;
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

export default connect(List);