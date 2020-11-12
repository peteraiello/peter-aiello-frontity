import React from "react";

const ArrowIcon = ({ MyFill, MyClass }) => {
    return(
        <svg width="54px" height="54px" viewBox="0 0 54 54"  xmlns="http://www.w3.org/2000/svg" fill={ MyFill} className={ MyClass }>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
            Style="transform: scale(2.3)"/>
        </svg>
    );
}

export default ArrowIcon;