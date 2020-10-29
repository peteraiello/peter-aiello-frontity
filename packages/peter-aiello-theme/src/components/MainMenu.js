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
    padding: 1rem 2rem;
    width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px){
        padding: 0rem;
    }
    @media (min-width: 1200px){
        width: 1200px;
    }
`

const Button = styled.button`
    background-color: transparent;
    border: none;
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

export default connect(MainMenu);

