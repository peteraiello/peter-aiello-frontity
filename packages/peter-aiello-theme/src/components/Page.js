import React from "react";
import { connect } from "frontity";
import Background from "./Background";
import BackgroundHome from "./BackgroundHome";


const Page = ({ state }) => {


    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const FeaturedMediaID = post.featured_media; 


    return data.isReady ? (
            <>
                {/* page is home ? do this, else do that */}
                { data.isHome ? <BackgroundHome title={post.title.rendered} id={ FeaturedMediaID }/> : 
                <Background title={post.title.rendered} id={ FeaturedMediaID } postContent={ post.content.rendered } />  }
            </>
        ) : null;

};

export default connect(Page);