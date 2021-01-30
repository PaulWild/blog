import styled from "styled-components";
import * as React from "react";

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
`

const Tag = styled.li`
  list-style: none;
  margin-right: 0.5em;
  background-color: #cccccc;
  padding: 0.2em;
`

const Tags = ({tags}) => {
    if (tags.length === 0)
        return (<></>)

    return (
        <TagsContainer>
            <TagList>
                {tags.map(tag => <Tag>{tag}</Tag>)}
            </TagList>
        </TagsContainer>
    )
}

export default Tags