import React from "react";
import Link from "./Link";
import { connect, styled, keyframes } from "frontity";

const Nav = ({ state }) => {
    return (
        <>
        {
        !state.theme.headerIsScrolling &&

            <Navigation>
                <Anchor link="/about">About</Anchor>
                <Anchor link="/blog">Blog</Anchor>
                <Anchor link="/contact">Contact</Anchor>
            </Navigation>
            }
        </>
    );
}

const myTransition = keyframes`
    from {
        opacity: 0; 
    }
    to {
        opacity: 1;  
    }
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    z-index: 9999;
    display: none;
    animation: ${myTransition};
    animation-duration: 1s;
    @media (min-width: 1024px) {
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
    background: #21222490;
    border-radius: 0.25rem;
    text-transform: lowercase; 
`

export default connect(Nav);