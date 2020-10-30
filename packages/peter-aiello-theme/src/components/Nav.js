import React from "react";
import Link from "./Link";
import { connect, styled } from "frontity";

const Nav = ({ state }) => {
    return (
        <>
            <Anchor link="/about">About</Anchor>
            <Anchor link="/blog">Blog</Anchor>
            <Anchor link="/contact">Contact</Anchor>
        </>
    );
}

const Anchor = styled(Link)`
    color: white;
    text-decoration: none;
    text-align: center;
    width: 100%;
    border-radius: 0.25rem;
    text-transform: lowercase; 
`

export default connect(Nav);