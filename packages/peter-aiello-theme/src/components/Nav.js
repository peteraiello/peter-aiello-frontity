import React from "react";
import Link from "./Link";
import { styled } from "frontity";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);

const drkColor = "#212224";

const Nav = () => {
    return (
        <>
            <Navigation>
                <Anchor href="/">Home</Anchor>
                <Anchor href="/about">About</Anchor>
                <Anchor href="/blog">Blog</Anchor>
                <Anchor href="/work">Work</Anchor>
                <Anchor href="/contact">Contact</Anchor>
            </Navigation>
        </>
    );
}

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    z-index: 9999;
    display: none;
    ${mq[1]}{
        display: flex;
    }
`

const Anchor = styled(Link)`
    color: white;
    text-decoration: none;
    text-align: center;
    width: 100%;
    padding: 0.25rem 1rem;
    margin-bottom: 2rem;
    background: ${drkColor}90;
    border-radius: 0.25rem;
    text-transform: lowercase; 
`

export default Nav;