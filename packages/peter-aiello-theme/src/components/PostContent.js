import React from "react";
import { styled, connect } from "frontity";

const lightGrey = "#E0E0E0";
const lightOrange = "#DFBD85";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);


const PostContent = (state, libraries) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <>
            <h1>hello</h1>
        </>
    )
}

const ContainerInner = styled.div`
    padding: 0 2rem;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    ${mq[3]} {
        padding: 0;
        max-width: 1200px;
    }
`

const Content = styled.div`    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        color: ${lightGrey}
    }

    p {
        line-height: 2rem;
    }

    .lead {
        font-size: 120%;
    }

    h3 {
        font-size: 3.7rem;
    }

    a {
        color: ${lightOrange}
    }
`

export default connect(PostContent);