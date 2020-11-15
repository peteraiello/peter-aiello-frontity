import React from "react";
import {connect} from "frontity";


const PrivacyPolicy = ({ libraries }) => {
    const Html2React = libraries.html2react.Component;
    const privacyHtml = '<a href="https://www.iubenda.com/privacy-policy/74388008" class="iubenda-white iubenda-embed" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>';
    return (
        <Html2React html={ privacyHtml } />
    )
}

export default connect(PrivacyPolicy);