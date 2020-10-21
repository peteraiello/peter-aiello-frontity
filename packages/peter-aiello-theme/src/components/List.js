import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";
import Tags from "./Post/Tags";

const lightGrey = "#E0E0E0";
const lightOrange = "#DFBD85";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);

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
    color: ${lightGrey};
    font-size: 2rem;
`

const Title = styled.h2`
    font-size: 3.75rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${lightGrey};
    margin: 2rem 0;
`

const Excerpt = styled.div`
    p {
        color: ${lightGrey};
        font-size: 2.5rem;
        line-height: 4rem;
    }    
`

const PostItem = styled.div`
    border-bottom: 2px solid ${lightOrange};
    padding-bottom: 2rem;
    &:last-of-type {
        border: none;
    }
`

const Button = styled(Link)`
    display: block;
    width: 300px;
    text-align: center;
    color: ${lightGrey};
    margin: 2rem 0;
    border: 1px solid ${lightGrey};
    padding: 1rem;
    text-decoration: none;
    font-size: 2.65rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: Bold;
`

export default connect(List);