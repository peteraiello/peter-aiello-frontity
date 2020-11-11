import React from "react";
import { connect, keyframes } from "frontity";
import MainMenu from "./Menu/MainMenu";
import StickyMenu from "./Menu/StickyMenu";
import { styled } from "frontity";
import { useInView } from 'react-intersection-observer';

const Header = ({ state, actions }) => {

        // menu in view? update the 'menuIsHidden'
        // state to false using an action' 
        // menu not in view?  update 'menuIsHidden'
        // state to true

        const [ref, inView] = useInView({threshold: 0,});

        inView ? ( 
            actions.theme.menuShown()
            ) : ( 
            actions.theme.menuHidden()
        );

        return(
            <>
                    <MenuDefault ref={ref}>
                        <MainMenu logoSize="120px" />
                    </MenuDefault>
                {
                    !state.theme.menuIsHidden &&
                        <MenuScrollOut>
                            <StickyMenu logoSize="80px" />
                        </MenuScrollOut>
                }
                {
                    state.theme.menuIsHidden &&
                        <MenuScrollIn>
                            <StickyMenu logoSize="80px" />
                        </MenuScrollIn>
                }
            </>
        )
}
const FadeOut = keyframes`
    from {
        display: block;
        opacity: 1; 
    }
    to {
        opacity: 0;  
        display: none;
    }
`;

const FadeIn = keyframes`
    0% {
        display: none;
        opacity: 0; 
    }
    100% {
        display: block;
        opacity: 1;  
    }
`;

const MenuDefault = styled.div`
    background: #00000080; 
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 9999;
    box-sizing: border-box;
    @media (min-width: 1024px){
        background: transparent;
        position: absolute;
    }
`

const MenuScrollOut = styled.div`
    display: none;
    background: #00000080; 
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 9998;
    animation: ${FadeOut};
    animation-duration: 500ms;
    animation-fill-mode: both;
    box-sizing: border-box;
    @media (min-width: 1024px){
        display: block;
    }
`

const MenuScrollIn = styled.div`
    display: none;
    background: #00000080; 
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 9999;
    animation: ${FadeIn};
    animation-duration: 1s;
    animation-fill-mode: both;
    box-sizing: border-box;
    @media (min-width: 1024px){
        display: block;
    }
`

export default connect(Header);