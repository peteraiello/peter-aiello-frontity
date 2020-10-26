import React from "react";
import { styled, connect} from "frontity";
import Link from "../Link";

const Tags = ({link, name}) => {
    return (
        <>
            <Button href={link}>{name}</Button>
        </>
    );
}

const Button = styled(Link)`
    border-radius: 0.25rem;
    display: inline-block;
    width: auto;
    text-align: center;
    color: var(--orange-highlight);
    margin: 0 2rem 2rem 0;
    border: 1px solid var(--orange-highlight);
    padding: 1rem 3rem;
    text-decoration: none;
    font-size: 1rem !important;
    font-family: 'Open Sans', sans-serif;
    font-weight: Bold;
    text-transform: uppercase;
    @media (min-width: 768px){
        font-size: 2rem !important;
        margin-bottom: 0 1.75rem 0 0;
    }
`

export default connect(Tags);