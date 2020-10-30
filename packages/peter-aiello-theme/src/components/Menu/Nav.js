import React from "react";
import Link from "../Link";
import { connect, styled } from "frontity";

const Nav = ({ state }) => {
    return (
        <>
            <Link link="/about">About</Link>
            <Link link="/blog">Blog</Link>
            <Link link="/contact">Contact</Link>
        </>
    );
}

export default connect(Nav);