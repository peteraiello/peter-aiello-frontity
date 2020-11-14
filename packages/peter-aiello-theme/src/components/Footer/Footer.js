import React from "react";
import Link from "../Link";
import SocialIcons from "../Social/SocialIcons";
import { styled, connect } from "frontity";
import FooterCopyright from "./FooterCopyright";
import FooterNav from "./FooterNav";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {

    return (
        <>
        <Background>
            <Container>
                <Column>
                    <Anchor 
                        link="https://frontity.org/" 
                        target="_blank"
                        rel="noreferrer noopener"
                    >made using Frontity
                    </Anchor>
                </Column>
                <Column>
                    <SocialIcons />
                </Column>
                <Column>
                    <NavWrapper>
                        <FooterNav />
                        <PrivacyPolicy />
                    </NavWrapper>
                 </Column>
            </Container>
            <FooterCopyright />
        </Background>
        </>
    );
}

const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
        justify-content: end;
    }
    a {
        margin-right: 1rem;
        color: var(--orange-highlight);
        text-decoration: none;
        font-weight: bold;
        display: block;
        text-transform: lowercase;
    }
`

const Background = styled.div`
    background: var(--dark-grey);
    position: relative;
`

const Column = styled.div`
    flex: 1;
    margin: 2rem 0;
`

const Anchor = styled(Link)`
    color: var(--dark-grey);
    background-color: var(--light-grey);
    padding: 0.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
`

const Container = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    backgrond: black;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`

export default Footer; 