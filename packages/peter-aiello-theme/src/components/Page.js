import React from "react";
import { connect } from "frontity";
import Home from "./Page/HomePage";
import InternalPage from "./Page/InternalPage";
import Contact from "./Page/ContactPage";
import NoHeader from "./Page/NoHeader";

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
                { postID === 10 && <InternalPage title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
                {/* post id equal to contact */}
                { postID === 12 && <Contact title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
                 {/* post id equal to accreditations */}
                 { postID === 190 && <NoHeader title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
            </>
        ) : null;

};

export default connect(Page);