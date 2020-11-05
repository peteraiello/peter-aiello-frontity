import React from "react";
import { connect, styled, Global, css} from "frontity";
import ContentCss from "../../library/content.css";

const Background = ({ state, title, id, postContent, libraries }) => {

    const Html2React = libraries.html2react.Component;

    /* return null if no post content */
    if(!postContent) return null;

    return (
        <>
            <Global styles={css(ContentCss)} />
            {/* the markup for page content */}
            <ContentWrapper>
                <TitleWrapper>
                    <Title>{ title }</Title>
                </TitleWrapper>
                <Content className="main-content">
                    <Html2React html={ postContent } />
                </Content>
            </ContentWrapper>
        </>
    )
}


const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 12rem;
`

const Title = styled.h1`
    text-transform: uppercase;
    position: relative;
    color: var(--light-grey);
    text-align: center;
`;

const ContentWrapper = styled.div`
    background: var(--dark-grey);
    position: relative;
`

const Content = styled.div`    
`

export default connect(Background);