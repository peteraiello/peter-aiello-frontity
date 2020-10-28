import React from "react";
import Link from "./Link";
import { Global, css, connect } from "frontity";
import Logo from "../assets/logo-light-vers.svg";
import MobileMenu from "./MobileMenu";
import { styled } from "frontity";
import Image from "@frontity/components/image";
import { useInView } from 'react-intersection-observer';


const Header = ({ state }) => {
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
`

const Container = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    box-sizing: border-box;
    background-color: #00000080;
`

const Background = styled.div`
    position: relative;
    height: auto;
    z-index: 9999;
`

const LogoContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
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