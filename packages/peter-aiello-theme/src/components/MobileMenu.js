import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";
import MenuIcon from "../assets/mobile-menu.svg";

const MobileMenu = ({ state, actions }) => {
    return (
        state.theme.isMenuOpen ? (
        <>
            <Button onClick={actions.theme.closeMenu}> 
                <Toggle />
            </Button>
            <Container>
                <ContainerInner>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/work">Work</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </ContainerInner>
            </Container>
        </>
        ) : (
            <Button onClick={actions.theme.openMenu}>
                <Toggle></Toggle>
            </Button>
        )
    )
}

const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: .75rem;
    margin-right: 2rem;
    @media (min-width: 768px) {
        display: none;
    }
`

const Toggle = styled.span`
    background-image: url(${MenuIcon});
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-size: 100% 100%;
    border: none;
`

const Container = styled.div`
    width: 100%;
    position: absolute;
    background: var(--dark-grey);
    top: 113px;
    display: block;
    @media (min-width: 768px) {
        display: none;
    }
`

const ContainerInner = styled.div`
    padding: 2rem;
    a {
        color: white;
        text-decoration: none;
        text-transform: lowercase;
        text-align: right;
        font-size: 1.85rem;
        padding: 1rem 0;
        display: block;
    }
`

export default connect(MobileMenu);