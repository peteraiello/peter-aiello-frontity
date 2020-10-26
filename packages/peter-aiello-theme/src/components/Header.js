import React from "react";
import Link from "./Link";
import { connect } from "frontity";
import Logo from "../assets/logo-light-vers.svg";
import MobileMenu from "./MobileMenu";
import { styled } from "frontity";
import Image from "@frontity/components/image";

const Header = () => {
    return (
        <Container>
            <Background>
                <MenuBar>
                    <LogoContainer>
                        <Link link="/">
                            <LogoClass
                                loading="lazy" 
                                src={ Logo } 
                                alt="Peter Aiello - Coding Experience"
                            />
                        </Link>
                    </LogoContainer>
                    <MobileMenu />
                </MenuBar>
            </Background>
        </Container>
    )
}

const MenuBar = styled.div`
    display: flex;
    background-color: #00000090;
    @media (min-width: 768px){
        background-color: transparent;
    }
`

const Container = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
`

const Background = styled.div`
    position: relative;
    height: auto;
    background: var(--dark-grey)80;
    z-index: 9999;
    @media (min-width: 768px){
        background: transparent;
    }
`

const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    @media (min-width: 1200px){
        width: 1200px;
    }
`

const LogoClass = styled(Image)`
    height: 76px;
    @media (min-width: 768px) {
        height: 121px; 
    }
`

export default connect(Header);