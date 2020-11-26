import React from "react";
import { styled } from "frontity";
import Link from "../Link";
import Image from "@frontity/components/image";

const SocialIcon = ({name, src, url}) => {
    return (
        <>  
            <Anchor link={ url } target="_blank" rel={ "noreferrer noopener" }> { name }
                <Icon src={ src } alt={ name.toLowerCase() + '-icon'} loading="lazy" /> 
            </Anchor>
        </>
    )
}

const Anchor = styled(Link)`
    color: transparent;
    font-size: 0;
    line-height: 0;
`

const Icon = styled(Image)`
    width: 50px;
    margin-right: 0.5rem;
    &::last-of-type{
        margin-right: 0;
    }
`

export default SocialIcon;