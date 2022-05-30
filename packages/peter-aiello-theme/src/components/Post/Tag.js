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
    font-size: 1rem;
    display: inline-block;
    width: auto;
    text-align: center;
    color: var(--dark-grey);
    border: 1px solid var(--orange-highlight);
    padding: 0.5rem 1rem;
    margin: 0 1rem 1rem 0;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    border-radius: 0.25rem;
    background-color: var(--orange-highlight);
`

export default connect(Tags);