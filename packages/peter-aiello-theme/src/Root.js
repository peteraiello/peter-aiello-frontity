import React from "react";
import { Global, css, connect, Head } from "frontity";
import Nav from "./components/Nav";
import Archive from "./components/Archive";
import Post from "./components/Post";
import Page from "./components/Page";
import Page404 from "./components/Page404";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import colorsCss from "../src/library/colors.css";
import globalCss from "../src/library/global.css";

const Root = ({ state }) => {
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
            <Header />
            <Nav />
            <main>
                {data.isArchive && <Archive />}
                {data.isPost && <Post />}
                {data.isPage && <Page />}
                {data.isError && <Page404 />}
            </main>
            <Footer />
        </>
    )
}

export default connect(Root);