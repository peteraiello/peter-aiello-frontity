import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";
import MenuIcon from "../assets/mobile-menu.svg";

const MobileMenu = ({ state, actions }) => {
    return (
        <Nav>
            <Link link="/">Home</Link>
            <Link link="/about">About</Link>
            <Link link="/blog">Blog</Link>
            <Link link="/work">Work</Link>
            <Link link="/contact">Contact</Link>
        </Nav>
    )
}

const Nav = styled.div`
    width: 100%;
    position: relative;
    background: var(--dark-grey);
    padding: 2rem;
    box-sizing: border-box;
    a {
        color: white;
        text-decoration: none;
        text-transform: lowercase;
        text-align: right;
        font-size: 1.85rem;
        padding: 1rem 0;
        display: block;
    }
    @media (min-width: 768px) {
        display: none;
    }
`

export default connect(MobileMenu);