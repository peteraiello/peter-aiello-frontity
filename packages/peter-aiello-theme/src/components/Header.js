import React from "react";
import Link from "./Link";
import { connect } from "frontity";
import Logo from "../assets/logo-light-vers.svg";
import MobileMenu from "./MobileMenu";
import { styled } from "frontity";
import Image from "@frontity/components/image";

const drkColor = "#212224";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);

const Header = () => {
    return (
        <Container>
            <Background>
                <MenuBar>
                    <LogoContainer>
                        <Link href="/">
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
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
`

const Background = styled.div`
    position: relative;
    height: auto;
    background: ${drkColor}80;
    z-index: 9999;
    ${mq[1]} {
        background: transparent;
    }
`

const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    ${mq[3]} {
        padding: 1rem 0;
        width: 1200px;
    }
`

const LogoClass = styled(Image)`
    height: 76px;
    ${mq[1]} {
        height: 121px; 
    }
`

export default connect(Header);