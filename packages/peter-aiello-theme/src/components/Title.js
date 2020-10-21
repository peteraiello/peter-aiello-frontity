import React from "react";
import { styled, css, connect } from "frontity";
const Title = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <PostTitle
            
        >{state.frontity.title}
        </PostTitle>
    );
}

const PostTitle = styled.h1`
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
`;


export default connect(Title);

