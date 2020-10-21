import React from "react";
import { styled, connect} from "frontity";
import Link from "../Link";

const lightGrey = "#E0E0E0";
const lightOrange = "#DFBD85";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);

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
    color: ${lightOrange};
    margin: 0 2rem 2rem 0;
    border: 3px solid ${lightOrange};
    padding: 1rem 3rem;
    text-decoration: none;
    font-size: 1rem !important;
    font-family: 'Open Sans', sans-serif;
    font-weight: Bold;
    text-transform: uppercase;
    ${mq[1]}{
        font-size: 2rem !important;
        margin-bottom: 0 1.75rem 0 0;
    }
`

export default connect(Tags);