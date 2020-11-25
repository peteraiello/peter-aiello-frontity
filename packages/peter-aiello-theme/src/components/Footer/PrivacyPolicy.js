import React from "react";
import {connect} from "frontity";


const PrivacyPolicy = ({ libraries }) => {
    const Html2React = libraries.html2react.Component;
    const privacyHtml = '<a href="https://www.iubenda.com/privacy-policy/74388008" rel="noopener" target="_blank" title="Privacy Policy ">Privacy Policy</a>';
    return (
        <Html2React html={ privacyHtml } />
    )
}

export default connect(PrivacyPolicy);