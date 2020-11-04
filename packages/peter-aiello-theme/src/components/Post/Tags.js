import React from "react";
import Tag from "./Tag";
import { styled, connect} from "frontity";

const Tags = ({state, tags}) => {

    if (!tags) return null;

    // console.log(tags);

    return (
        <MarginWrapper>
            { tags.map(
                tag => 
                    <Tag 
                        key={tag} 
                        name={state.source.tag[tag].name} 
                        link={state.source.tag[tag].link}
                    />
                )
            }
        </MarginWrapper>
    )
}

const MarginWrapper = styled.div`
    margin:0 0 1rem 0;
`

export default connect(Tags);