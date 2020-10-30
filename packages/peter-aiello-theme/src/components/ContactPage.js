import React from "react";
import { connect, css, styled, keyframes } from "frontity";
import Placeholder from "../assets/background-images/buildings-dark.jpg";
import LogoBackground from "./Paths/LogoBackground";
import ArrowIcon from "./ArrowIcon";

const Background = ({ state, title, id, postContent, libraries }) => {

    const Html2React = libraries.html2react.Component;

    /* return null if no post content */
    if(!postContent) return null;

    /* get the background image url */
    const FeaturedMedia = state.source.attachment[id];
    
    const BackgroundUrl = (!FeaturedMedia ? Placeholder : FeaturedMedia.source_url);
    
    const BackgroundImage = styled.div`
        position: relative;
        background-image: url(${BackgroundUrl});
        background-size: cover;
        background-position: 50% 50%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        overflow: hidden;
    `

    const BackgroundClip = styled.div`
        -webkit-clip-path: url(#path-2);
        position: fixed;
        top: 50%;
        clip-path: url(#path-2);
        background-image: url(${BackgroundUrl});
        width: 800px;
        height: 800px;
        margin-top: -400px;
        background-size: cover;
        background-position: 50% 50%;
        animation: ${myTransition};
        animation-duration: 8s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        transform: scale(0.5);
        @media (min-width: 768px){
            transform: scale(0.75);
        }
    `

    return (
        <>
        <BackgroundImage>
            <IconWrapper>
                <BackgroundClip>
                    <LogoBackground />
                    <ClipIcon src={ BackgroundUrl } alt="branding-icon"/>
                </BackgroundClip>
            </IconWrapper>
            {/* the markup for page content */}
            <Container>
                    <Content>
                        <Html2React html={ postContent } />
                    </Content>
            </Container>            
        </BackgroundImage>
        </>
    )
}

const MyArrow = "my-arrow";

const ArrowFill = 'white';

const ArrowAnimation = keyframes`
    0% {
        fill: var(--light-grey);
        transform: translate(0px, 0px);
    }
    10% {
        transform: translate(0px, 5px);
    }
    20% {
        transform: translate(0px, 0px);
    }
    30% {
        transform: translate(0px, 5px);
    }
    40% {
        transform: translate(0px, 0px);
    }
    50% {
        fill: var(--light-grey);
    }
`;

const ArrowWrapper = styled.div`
    position: fixed;
    height: 75px;
    width: 32px;
    left: 50%;
    margin-left: calc(-32px / 2);
    bottom: 5%;
    margin-top: calc(-75px / 2);    
    .my-arrow {
        width: 32px;
        animation: ${ArrowAnimation};
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
    }
`

const IconWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
`

const myTransition = keyframes`
    from {
        background-position: 50% 50%;
    }
    to {
        background-position: 100% 50%;
    }
`;

const Rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ClipIcon = styled.img`
    -webkit-clip-path: url(#path-1);
    clip-path: url(#path-1);
    width: 796px;
    height: 796px;
    animation: ${Rotate};
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
`

const TitleWrapper = styled.div`
    height: 100px;
    width: 500px;
    position: fixed;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    overflow: hidden;
    margin-top: -50px;
`

const Title = styled.h1`
    text-transform: uppercase;
    position: relative;
    font-size: 4rem;
    color: var(--light-grey);
    text-align: center;
    line-height: 50px;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: transparent;
    position: absolute;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ContainerInner = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 12rem 2rem 2rem 2rem;
    width: 100%;
    box-sizing: border-box;
    @media (min-width: 1200px){
        max-width: 1200px;
        padding: 12rem 0 2rem 0;
    }
`

const Content = styled.div`    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    li,
    p {
        color: var(--light-grey)
    }

    p,
    ul,
    li
    {
        font-size: 1.25rem;
        line-height: 2rem;
    }

    ul {
        list-style: none;
        padding: 0px;
    }

    li {
        &:before {
            content: '>';
            margin-right: 1rem;
            font-weight: bold;
        }
    }

    .lead {
        font-size: 120%;
    }

    h3 {
        font-size: 3.7rem;
        margin: 0;
        line-height: 5rem;
    }

    a {
        color: var(--orange-highlight)
    }

    /* custom button */
    .wp-block-button__link {
        display: block;
        width: auto;
        text-align: center;
        color: var(--light-grey);
        margin: 2rem 0;
        border: 1px solid var(--light-grey);
        padding: 1rem;
        text-decoration: none;
        font-size: 2.65rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: Bold;
    }

    a.mailto-link {
        color: var(--orange-highlight);
        font-size: 2rem;
        text-decoration: none;
        @media (min-width: 1200px) {
            font-size: 2rem;
        }
    }
 
    /* 
    styles for gutenberg columns only
    copied from wordpress
    */

    .has-text-align-center {
        text-align: center;
    }
    .wp-block-columns {
        display:flex;
        margin: 50px 0;
        flex-wrap:wrap
       }

       @media (min-width:782px) {
        .wp-block-columns {
         flex-wrap:nowrap
        }
       }

       .wp-block-column {
        flex-grow:1;
        min-width:0;
        word-break:break-word;
        overflow-wrap:break-word
       }
       @media (max-width:599px) {
        .wp-block-column {
         flex-basis:100%!important
        }
       }
       @media (min-width:600px) and (max-width:781px) {
        .wp-block-column {
         flex-basis:calc(100% - 16px)!important;
         flex-grow:0
        }
        .wp-block-column:nth-of-type(2n) {
         margin-left:0
        }
       }
       @media (min-width:782px) {
        .wp-block-column {
         flex-basis:0;
         flex-grow:1
        }
        .wp-block-column[style*=flex-basis] {
         flex-grow:0
        }
        .wp-block-column:not(:first-of-type) {
         margin-left:32px
        }
       }
       .wp-block-columns.are-vertically-aligned-top {
        align-items:flex-start
       }
       .wp-block-columns.are-vertically-aligned-center {
        align-items:center
       }
       .wp-block-columns.are-vertically-aligned-bottom {
        align-items:flex-end
       }
       .wp-block-column.is-vertically-aligned-top {
        align-self:flex-start
       }
       .wp-block-column.is-vertically-aligned-center {
        -ms-grid-row-align:center;
        align-self:center
       }
       .wp-block-column.is-vertically-aligned-bottom {
        align-self:flex-end
       }
       .wp-block-column.is-vertically-aligned-bottom,
       .wp-block-column.is-vertically-aligned-center,
       .wp-block-column.is-vertically-aligned-top {
        width:100%
       }
`

export default connect(Background);
