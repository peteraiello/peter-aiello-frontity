import React from "react";
import Link from "../Link";
import { connect, styled } from "frontity";
import ScrollLogo from "../../assets/A-logo-lt.svg";
import Image from "@frontity/components/image";
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
                <NavWrapper>
                    <Nav />
                </NavWrapper>
            </LogoContainer>
        </MenuBar>        
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
        color: white;
        text-decoration: none;
        text-align: center;
        width: 100%;
        border-radius: 0.25rem;
        text-transform: lowercase; 
        margin-right: 2rem;
        display: block;
    }
`

export default connect(MainMenu);

