import React from "react";
import Link from "@frontity/components/link";
import { connect, styled } from "frontity";
import ScrollLogo from "../../assets/logo-light-name-bottom-2.svg";
import Image from "@frontity/components/image";
import Nav from "./Nav";

const MainMenu = ({ actions }) => {

    return (
        <>
            <MenuBar>
                <LogoContainer> 
                    <Link link="/" onClick={() => actions.theme.closeMenu()}>
                        <Image
                            loading="lazy" 
                            src={ ScrollLogo } 
                            alt="Peter Aiello - Coding Experience"
                            height="76"
                        />
                    </Link>
                    <LaptopWrapper>
                        <Nav />
                    </LaptopWrapper>
                </LogoContainer>
            </MenuBar>        
        </>
    )
}

const MenuBar = styled.div`
    display: flex;
`

const LogoContainer = styled.div`
    padding: 1rem 0;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
    @media (min-width: 1600px){
        padding: 1.2rem;
        justify-content: flex-end;  
        max-width: 100%;
    }
`
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
export default connect(MainMenu);

