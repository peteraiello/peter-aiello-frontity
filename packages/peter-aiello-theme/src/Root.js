import React from "react";
import { Global, css, connect, Head, styled } from "frontity";
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
import Switch from "@frontity/components/switch";
import { useInView } from 'react-intersection-observer';


const Root = ({ state, actions }) => {

    const [ref, inView] = useInView({threshold: 0,});

    // create a prop for the menu view to 
    // pass down to components
    let menuView = false;
    inView ? ( 
         menuView = false
         // actions.theme.menuShow = false
    ) : ( 
        menuView = true
        // actions.theme.menuShow = true
    );

    const data = state.source.get(state.router.link);
    return (
        <>
            <Head>
                <title>Coding Experience</title>
                <html lang="en" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            {/* color style variables */}
            <Global styles={css(colorsCss)} />
            {/* global style variables */}
            <Global styles={css(globalCss)} />
            {/* console.log(menuInView) */}
            <Header menuView={menuView} />

                        
            <NavWrapper ref={ref}>
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
    z-index: 9999;
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
        &:last-of-type {
            margin-bottom: 0;
        }
    }
`

export default connect(Root);