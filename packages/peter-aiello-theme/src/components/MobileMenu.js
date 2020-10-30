import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";

const MobileMenu = ({ state, actions }) => {
    return (
        <Nav>
                <Link link="/about">About</Link>
                <Link link="/blog">Blog</Link>
                <Link link="/contact">Contact</Link>
        </Nav>
    )
}

const Nav = styled.div`
    width: 100%;
    /* height is 100 version height minus height of the header */
    height: calc(100vh - 113px);
    position: relative;
    background: #212224E6;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
        color: white;
        text-decoration: none;
        text-transform: lowercase;
        text-align: right;
        font-size: 1.85rem;
        padding: 1rem 0;
        display: block;
    }
    @media (min-width: 1024px) {
        display: none;
    }
`

export default connect(MobileMenu);