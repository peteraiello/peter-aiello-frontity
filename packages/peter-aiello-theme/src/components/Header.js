import React, {useRef} from "react";
import Link from "./Link";
import { Global, css, connect, keyframes } from "frontity";
import Logo from "../assets/logo-light-vers.svg";
import MobileMenu from "./MobileMenu";
import MainMenu from "./MainMenu";

import { styled } from "frontity";
import Image from "@frontity/components/image";
import { useInView } from 'react-intersection-observer';

const Header = ({ state, actions }) => {

    const [ref, inView] = useInView({threshold: 0,});

        // menu in view? update the state for 
        // 'headerIsScrolling' to false using an action' 
        // menu not in view? then update 
        // the state for 'headerIsScrolling' to true
        inView ? ( actions.theme.headerDefault()
        ) : ( actions.theme.headerScroll()
        );

        return(
            <>
                    <MenuDefault ref={ref}>
                        <MainMenu logoSize="120px" />
                    </MenuDefault>
                {
                    state.theme.headerIsScrolling &&
                    <MenuScroll>
                        <MainMenu logoSize="80px" />
                    </MenuScroll>
                }
            </>
        )
}

const myTransition = keyframes`
    from {
        opacity: 0; 
    }
    to {
        opacity: 1;  
    }
`;

const MenuDefault = styled.div`
    background: transparent;
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 9999;
    animation: ${myTransition};
    animation-duration: 1s;
    box-sizing: border-box;
    @media (min-width: 768px){
        padding: 1rem 0;
        position: absolute;
    }
`

const MenuScroll = styled.div`
    display: none;
    background: #00000080; 
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 9999;
    animation: ${myTransition};
    animation-duration: 1s;
    box-sizing: border-box;
    @media (min-width: 768px){
        padding: 1rem 0;
        display: block;
    }
`

export default connect(Header);