import React from "react";
import Link from "../Link";
import SocialIcons from "../Social/SocialIcons";
import { styled, connect } from "frontity";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {

    return (
        <>
        <Background>
            <Container>
                <Column>
                    <Anchor 
                        link="https://frontity.org/" 
                        target="_blank"
                    >
                            made using Frontity
                    </Anchor>
                </Column>
                <Column>
                    <SocialIcons />
                </Column>
                <Column>
                    <Accreditations link="/accreditations">
                        accreditations
                    </Accreditations>
                 </Column>
            </Container>
            <FooterCopyright />
        </Background>
        </>
    );
}

const Background = styled.div`
    background: var(--dark-grey);
    position: relative;
`

const Accreditations = styled(Link) `
    display: block;
    text-align: right;
    text-decoration: none;
    color: var(--orange-highlight);
    font-size: 1.25rem;
    font-weight: bold;
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