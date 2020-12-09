import React from "react";
import SocialIcon from './SocialIcon';
import {connect} from "frontity";
import {styled} from "frontity";
import Medium from '../../assets/social/medium.svg';
import GitHub from '../../assets/social/github.svg';
import LinkedIn from '../../assets/social/linkedin.svg';

const SocialIcons = () => {
    const Icons = [
        {name: 'Medium', src: Medium, url: 'https://medium.com/@peter_aiello'},
        {name: 'GitHub', src: GitHub, url: 'https://github.com/peteraiello'},
        {name: 'LinkedIn', src: LinkedIn, url: 'https://www.linkedin.com/in/peter-aiello/'}
    ];

    return (
        <>  
            <IconWrapper>
                {
                    Icons.map(
                        (icon) =>
                        <SocialIcon 
                            key={ icon.name }
                            name={ icon.name }
                            src={ icon.src }
                            url={ icon.url }
                        />
                    )
                }
            </IconWrapper>
        </>
    )
}

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default connect(SocialIcons);