import React from "react";
import { styled, connect} from "frontity";

const Tags = ({name}) => {
    return (
        <>  
            <Tag>{name}</Tag>
        </>
    );
}

const Tag = styled.span`
    display: inline-block;
    width: auto;
    text-align: center;
    color: var(--dark-grey);
    border: 1px solid var(--orange-highlight);
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: Bold;
    border-radius: 0.25rem;
    background-color: var(--orange-highlight);
    &:last-of-type {
        margin-right: 0;
    }
    @media (min-width: 768px){

    }
`

export default connect(Tags);