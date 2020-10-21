import React from "react";
import { styled } from "frontity";

const lightGrey = "#E0E0E0";

const FooterCopyright = () => {

    const Year = new Date().getFullYear();
    // console.log(Year);
    
    return (
        <>
            <Container>
                <Text>&#169;{Year} Peter Aiello</Text>
            </Container>
        </>
    )
}

const Text = styled.p`
    color: ${lightGrey};
    text-align: center;
`

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
    padding: 0 2rem;
    box-sizing: border-box;
`

export default FooterCopyright;