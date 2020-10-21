import React from "react";
import Tag from "./Tag";

import { styled, connect} from "frontity";

const Tags = ({state, tags}) => {

    if (!tags) return null;

    // console.log(tags);

    return (
        <>
            <Wrapper>
                { tags.map(
                    tag => 
                        <Tag 
                            key={tag} 
                            name={state.source.tag[tag].name} 
                            link={state.source.tag[tag].link}
                        />
                    )
                }
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin-bottom: 2rem;
`;

export default connect(Tags);