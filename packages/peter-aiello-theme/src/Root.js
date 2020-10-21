import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Nav from "./components/Nav";
import Archive from "./components/Archive";
import Post from "./components/Post";
import Page from "./components/Page";
import Page404 from "./components/Page404";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

const drkColor = "#212224";
const lightGrey = "#E0E0E0";
const lightOrange = "#DFBD85";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Head>
                <title>Coding Experience</title>
                <html lang="en" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

                <Global styles={css`
                    body {
                        margin: 0px;
                        height: 100%;
                        font-family: 'Open Sans', sans-serif;
                        background-color: ${drkColor}
                    }
                `}
                />
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