import React from "react";
import Link from "@frontity/components/link";
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
                <Link link="/" onClick={() => actions.theme.closeMenu()}>
                    <LogoClass
                        loading="lazy" 
                        src={ ScrollLogo } 
                        alt="Peter Aiello - Coding Experience"
                    />
                </Link>
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
    flex-direction: row;
    justify-content: space-between;  
    @media (min-width: 1200px){
        padding: 1.2rem;
        justify-content: end;  
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

