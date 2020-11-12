import React from "react";
import { connect, keyframes, Global, css } from "frontity";
import MainMenu from "./Menu/MainMenu";
import StickyMenu from "./Menu/StickyMenu";
import { styled } from "frontity";
import { useInView } from 'react-intersection-observer';

const Header = ({ state, actions }) => {

        // menu in view? update the 'menuIsHidden'
        // state to false using an action' 
        // menu not in view?  update 'menuIsHidden'
        // state to true


        const FadeOut = keyframes`
        0% {
            display: block;
            opacity: 1; 
        }
        100% {
            display: none;
            opacity: 0;  
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

        const [ref, inView] = useInView({threshold: 0,});

        inView ? ( 
            actions.theme.menuShown()
            ) : ( 
            actions.theme.menuHidden()
        );

        return(
            <>
                {
                    state.theme.menuIsHidden &&
                    <Global styles={css`
                    .sticky-menu {
                        position: fixed;
                        top: 0;
                        z-index: 999;
                        width: 100%;
                        animation: ${FadeIn};
                        animation-duration: 1s;
                        background: var(--dark-grey);
                        z-index: 9999;
                    }}
                `} />
                }
                {
                    !state.theme.menuIsHidden &&
                    <Global styles={css`
                    .sticky-menu {
                        background: var(--dark-grey);
                        animation: ${FadeOut};
                        animation-duration: 1s;
                        animation-fill-mode: both;
                    }}
                ` } />
                }
                <MenuDefault ref={ref}>
                    <MainMenu logoSize="120px" />
                </MenuDefault>
                <div class="sticky-menu">
                    <StickyMenu logoSize="80px" />
                </div>
            </>
        )
}


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


export default connect(Header);