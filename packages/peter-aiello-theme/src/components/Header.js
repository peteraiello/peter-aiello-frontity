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
                    state.theme.menuIsHidden &&
                    <MenuScroll>
                        <StickyMenu logoSize="80px" />
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
    background: #00000080; 
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 9999;
    animation: ${myTransition};
    animation-duration: 1s;
    box-sizing: border-box;
    @media (min-width: 1024px){
        background: transparent;
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
    @media (min-width: 1024px){
        display: block;
    }
`

export default connect(Header);