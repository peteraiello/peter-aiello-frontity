import React from "react";
import Link from "./Link";
import { Global, css, connect } from "frontity";
import Logo from "../assets/logo-light-vers.svg";
import MobileMenu from "./MobileMenu";
import { styled } from "frontity";
import Image from "@frontity/components/image";

const Header = ({ state }) => {
    const data = state.source.get(state.router.link);
    console.log(data.isHome);



    return (
        <Container>
            <Background>
                { /* is homepage ? then background else no background */}
                { data.isHome ? (<Global styles={css`.menu-bar { background: #00000090}`} />) 
                : <Global styles={css`.menu-bar {background: transparent}`} /> }
                <div className="menu-bar">
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
                </div>
            </Background>
        </Container>
    )
}

const MenuBar = styled.div`
    display: flex;
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
    z-index: 9999;
`

const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 2rem;
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