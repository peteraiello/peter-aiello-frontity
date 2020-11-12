import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Nav from "./components/Menu/Nav";
import Archive from "./components/Archive";
import Post from "./components/Post";
import Page from "./components/Page";
import Page404 from "./components/Page404";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import colorsCss from "../src/library/colors.css";
import globalCss from "../src/library/global.css";
import StylesCss from "../src/library/style.css";
import ThemeCss from "../src/library/theme.css";
import FontCss from "../src/library/fonts.css";
import TypographyCss from "../src/library/typography.css";
import OverridesCSS from "../src/library/overrides.css";
import Switch from "@frontity/components/switch";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Head>
                <html lang="en" />
            </Head>
            {/* color style variables */}
            <Global styles={css(colorsCss)} />
            {/* typography defaults for css */}
            <Global styles={css(TypographyCss)} />
            {/* global style variables (body etc)*/}
            <Global styles={css(globalCss)} />
            {/* theme style variables (styles for gutenberg blocks) */}
            <Global styles={css(ThemeCss)} />
            {/* theme style variables  (styles for gutenberg blocks )*/}
            <Global styles={css(StylesCss)} />
            {/* overrides for default wordpress css */}
            <Global styles={css(OverridesCSS)} />
            {/* font css */}
            <Global styles={css(FontCss)} />
            {
                // console.log(menuInView); 
            }
            <Header />
                        
            <NavWrapper>
                <Nav />  
            </NavWrapper>
            
            <main>
            <Switch>
                <Loading when={data.isFetching} />
                {data.isArchive && <Archive />}
                {data.isPost && <Post />}
                {data.isPage && <Page />}
                {data.isError && <Page404 />}
            </Switch>
            </main>

            <Footer />

        </>
    )
}

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    z-index: 9997;
    display: none;
    @media (min-width: 1024px) {
        display: flex;
    }
    a {
        color: white;
        text-decoration: none;
        text-align: center;
        width: 100%;
        border-radius: 0.25rem;
        text-transform: lowercase; 
        margin-bottom: 2rem;
        display: block;
        background: var(--dark-grey);
        color: var(--custom-white);
        padding: 0.25rem 0.25rem;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
`

export default connect(Root);