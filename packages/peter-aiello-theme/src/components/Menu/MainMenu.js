import React from "react";
import Nav from "./Nav";
import Link from "@frontity/components/link";
import { connect, styled } from "frontity";
import Logo from "../../assets/logo-light-name-side.svg";
import LogoMobile from "../../assets/logo-no-name-light.svg";
import Image from "@frontity/components/image";
import MenuIcon from "../../assets/mobile-menu.svg";
 
const MainMenu = ({ logoSize, state, actions }) => {

    const LogoDesktop = styled(Image)`
        display: none;
        @media (min-width: 1200px) {
            display: block;
            height: ${logoSize}; 
        }
    `

    const ResponsiveLogo = styled(Image)`
        display: block;
        height: 72px;
        @media (min-width: 1200px) {
            display: none;
        }
    `

    return (
        <>
        <MenuBar>
            <LogoContainer> 
                <Link link="/" onClick={() => actions.theme.closeMenu()}> 
                    <ResponsiveLogo
                        loading="lazy" 
                        src={ LogoMobile } 
                        alt="Peter Aiello - Coding Experience"
                    />
                    <LogoDesktop
                        loading="lazy" 
                        src={ Logo } 
                        alt="Peter Aiello - Coding Experience"
                    />
                </Link>

                <LaptopWrapper>
                    <Nav />
                </LaptopWrapper>
        
                {
                    state.theme.isMenuOpen &&
                    <Button onClick={actions.theme.closeMenu} aria-label="close-menu">
                        <Toggle/>
                    </Button>
                }
                {
                    !state.theme.isMenuOpen &&
                    <Button onClick={actions.theme.openMenu} aria-label="open-menu">
                        <Toggle/>
                    </Button>
                }
            </LogoContainer>
        </MenuBar>
            {
            state.theme.isMenuOpen &&
                <MobileWrapper>
                    <Nav />
                </MobileWrapper>
            }            
        </>
    )
}

const LaptopWrapper = styled.nav`
    display: none;
    @media (min-width: 1200px) {
        display: flex;
        height: auto;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
    @media (min-width: 1600px) {
        display: none;
    }
    a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        text-align: center;
        border-radius: 0.25rem;
        text-transform: lowercase; 
        color: var(--custom-white);
        margin-right: 1rem;
    }
`

const MobileWrapper = styled.div`
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
    @media (min-width: 1200px) {
        display: none;
    }
`

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

const Button = styled.button`
    background-color: transparent;
    border: none;
    display: block;
    @media (min-width: 1200px) {
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

