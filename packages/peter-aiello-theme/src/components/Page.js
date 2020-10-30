import React from "react";
import { connect } from "frontity";
import Home from "./HomePage";
import About from "./AboutPage";
import Contact from "./ContactPage";


const Page = ({ state }) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const FeaturedMediaID = post.featured_media; 
    const postID = post.id;
    //    console.log(postID);

    return data.isReady ? (
            <>
                {/* page is home? */}
                { data.isHome && <Home title={post.title.rendered} id={ FeaturedMediaID }/>}
                {/* post id equal to about */}
                { postID === 10 && <About title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
                {/* post id equal to contact */}
                { postID === 12 && <Contact title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
            </>
        ) : null;

};

export default connect(Page);