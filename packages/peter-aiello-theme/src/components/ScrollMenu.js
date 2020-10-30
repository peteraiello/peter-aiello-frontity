import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "./Link";
import { connect, styled } from "frontity";
import ScrollLogo from "../assets/A-logo-lt.svg";
import Image from "@frontity/components/image";
import MenuIcon from "../assets/mobile-menu.svg";
import Nav from "./Nav";

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
                        src={ ScrollLogo } 
                        alt="Peter Aiello - Coding Experience"
                    />
                </Link>

                {   
                    state.theme.headerIsScrolling &&
                    <NavWrapper>
                        <Nav />
                    </NavWrapper>
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
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1200px){
        padding: 1rem 0;
        max-width: 1200px;
    }
`

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    a {
        margin-right: 2rem;
        &:last-of-type {
            margin-right: 0;
        }
    }
`

export default connect(MainMenu);

