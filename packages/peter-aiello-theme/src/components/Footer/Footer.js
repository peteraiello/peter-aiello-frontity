import React from "react";
import Link from "../Link";
import SocialIcons from "../Social/SocialIcons";
import { styled, connect } from "frontity";
import FooterCopyright from "./FooterCopyright";

const lightGrey = "#E0E0E0";
const drkColor = "#212224";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);

const Footer = () => {

    return (
        <>
            <Container>
                <Column>
                    <Anchor 
                        href="https://frontity.org/" 
                        target="_blank"
                    >
                            made using Frontity
                    </Anchor>
                </Column>
                <Column>
                    <SocialIcons />
                </Column>
                <Column>
                    <Accreditations href="/accreditations">
                        accreditations
                    </Accreditations>
                 </Column>
            </Container>
            <FooterCopyright />
        </>
    );
}

const Accreditations = styled(Link) `
    display: block;
    text-align: right;
    text-decoration: none;
    color: ${lightGrey};
    font-size: 1.25rem;
    font-weight: bold;
`

const Column = styled.div`
    flex: 1;
    margin: 2rem 0;
`

const Anchor = styled(Link)`
    color: ${drkColor};
    background-color: ${lightGrey};
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
    ${mq[1]}{
        flex-direction: row;
    }
    ${mq[3]}{
        max-width: 1200px;
    }
`

export default Footer; 