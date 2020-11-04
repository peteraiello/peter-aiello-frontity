import React from "react";
import {Global, css, connect} from "frontity";
import OpenRegularLatin from "./fonts/open-sans-v18-latin-regular.woff2";
import OpenBoldLatin from "./fonts/open-sans-v18-latin-700.woff2";


const FontFace = ({state}) => {

    return(
        <Global

        styles={css`
        
            @font-face {
                font-family: "Open Sans";
                font-style: normal;
                font-weight: 400;
                font-display: "swap";
                src: url(${OpenRegularLatin}) format("woff2");
            }
            @font-face {
                font-family: "Open Sans";
                font-style: normal;
                font-weight: 700;
                font-display: "swap";
                src: url("${OpenBoldLatin}") format("woff2");
            }
        `}

        />
    )
}

export default connect(FontFace);