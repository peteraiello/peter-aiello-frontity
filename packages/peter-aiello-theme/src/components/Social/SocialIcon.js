import React from "react";
import { styled } from "frontity";
import Link from "../Link";
import Image from "@frontity/components/image";

const SocialIcon = ({name, src, url}) => {
    return (
        <>  
            <Link href={ url } target="_blank">
                <Icon src={ src } alt={ name.toLowerCase() + '-icon'} />
            </Link>
        </>
    )
}

const Icon = styled(Image)`
    width: 50px;
    margin-right: 0.5rem;
    &::last-of-type{
        margin-right: 0;
    }
`

export default SocialIcon;