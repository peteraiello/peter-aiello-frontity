import React from "react";

const ArrowIcon = ({ MyFill, MyClass }) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill={ MyFill} className={ MyClass }>
            <path  d="M81.131,24.449,64.682,8V20.336H3v8.224H64.682V40.9Z" transform="translate(40.897 -3) rotate(90)"/>
        </svg>
    );
}

export default ArrowIcon;