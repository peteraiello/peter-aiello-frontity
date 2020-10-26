import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";
import Tags from "./Post/Tags";

const List = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    return (
            <>
                { data.items.map(({ id }) => {

                    const post = state.source.post[id];
                    const Html2React=libraries.html2react.Component;
                    const date = new Date(post.date);

                    const PostTags = post.tags; 
                    // console.log(PostTags); // returns array

                    return (
                        <PostItem key={id}>
                            <Title>
                                <Html2React html={ post.title.rendered } />
                            </Title>
                                <Tags tags={PostTags} />
                                <PostDate>{date.toDateString()}</PostDate>
                            <Excerpt>  
                                <Html2React html={ post.excerpt.rendered } />
                            </Excerpt>
                            <Button href={post.link}>read now</Button>
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
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`

const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--light-grey);
    margin: 2rem 0;
    @media (min-width: 768px) {
        font-size: 3.75rem;
    }
`

const Excerpt = styled.div`
    p {
        color: var(--light-grey);
        font-size: 2rem;
        line-height: 3rem;
        @media (min-width: 768px) {
            font-size: 2.5rem;
            line-height: 4rem;
        }
    }    

`

const PostItem = styled.div`
    border-bottom: 2px solid var(--orange-highlight);
    padding-bottom: 2rem;
    &:last-of-type {
        border: none;
    }
`

const Button = styled(Link)`
    display: block;
    width: auto;
    max-width: 250px;
    text-align: center;
    color: var(--light-grey);
    margin: 2rem 0;
    border: 1px solid var(--light-grey);
    padding: 1rem;
    text-decoration: none;
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: Bold;
    @media (min-width: 768px) {
        font-size: 2.65rem;
    }
`

export default connect(List);