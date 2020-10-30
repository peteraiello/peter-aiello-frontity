import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "./Link";
import { connect, styled } from "frontity";
import Logo from "../assets/logo-light-vers.svg";
import Image from "@frontity/components/image";
import MenuIcon from "../assets/mobile-menu.svg";

const MainMenu = ({ logoSize, state, actions }) => {

    const LogoClass = styled(Image)`
        height: 76px;
        @media (min-width: 768px) {
            height: ${logoSize}; 
        }
    `

    return (
        <>
        <MenuBar>
            <LogoContainer> 
                <Link link="/">
                    <LogoClass
                        loading="lazy" 
                        src={ Logo } 
                        alt="Peter Aiello - Coding Experience"
                    />
                </Link>

                     
                {   
                    state.theme.headerIsScrolling &&
                    <div>
                    <Anchor link="/about">About</Anchor>
                    <Anchor link="/blog">Blog</Anchor>
                    <Anchor link="/contact">Contact</Anchor>
                    </div>
                }
        
                {
                    state.theme.isMenuOpen &&
                    <Button onClick={actions.theme.closeMenu}>
                        <Toggle/>
                    </Button>
                }
                {
                    !state.theme.isMenuOpen &&
                    <Button onClick={actions.theme.openMenu}>
                        <Toggle/>
                    </Button>
                }
            </LogoContainer>
        </MenuBar>
            {
            state.theme.isMenuOpen &&
                <MobileMenu />
            }            
        </>
    )
}

const MenuBar = styled.div`
    display: flex;
`

const LogoContainer = styled.div`
    padding: 1rem;
    max-width: 1200px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1200px){
        padding: 1rem 0;
        width: 1200px;
    }
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    display: block;
    @media (min-width: 1024px) {
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

const Anchor = styled(Link)`
    color: white;
    text-decoration: none;
    text-align: center;
    width: 100%;
    padding: 0.25rem 1rem;
    margin-bottom: 2rem;
    border-radius: 0.25rem;
    text-transform: lowercase; 
`

export default connect(MainMenu);

