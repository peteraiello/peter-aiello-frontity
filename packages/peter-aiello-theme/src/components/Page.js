import React, { useEffect } from "react";
import { connect } from "frontity";
import Home from "./Page/HomePage";
import InternalPage from "./Page/InternalPage";
import Contact from "./Page/ContactPage";
import NoHeader from "./Page/NoHeader";

const Page = ({ state, actions }) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const FeaturedMediaID = post.featured_media; 
    const postID = post.id;
    
    /**
     * preload all the essential pages and blogs
     * so that when the user is on the homepage 
     * and clicks on another page, it's already loaded
     */
    useEffect(() => {
        actions.source.fetch("/");
        actions.source.fetch("/about");
        actions.source.fetch("/blog");
        actions.source.fetch("/contact");
    }, []);

    return (
            <>
                {/* page is home? */}
                { data.isHome && <Home title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
                {/* post id equal to about */}
                { postID === 10 && <InternalPage title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
                {/* post id equal to contact */}
                { postID === 12 && <Contact title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
                {/* post id equal to accreditations */}
                { postID === 190 && <NoHeader title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
                {/* post id equal to privacy */}
                { postID === 3 && <NoHeader title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } /> }
            </>
        );

};

export default connect(Page);