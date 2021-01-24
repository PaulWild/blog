import * as React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../Components/layout";
import styled from "styled-components"

const StyledLink = styled(Link)`
&:link {
  color: black;
}

&:visited {
  color: black;
}

&:hover {
  color: black;
}

&:active {
  color: black;
}
`

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  > * {
        margin-right: 0.5em;
  }
`


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

const Post = ({slug, publishDate, title, childContentfulBlogPostBodyTextNode, tags}) => {
    console.log(tags)
    return (
        <section>
            <Header>
            <h1>{title}</h1>
            <h5>{publishDate}</h5>
            </Header>
            <p>{childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt} <StyledLink to={`/posts/${slug}`}>Read more</StyledLink></p>
            <Tags tags={tags}></Tags>
        </section>
    )
}

const Posts = ({data}) => {
    return (<Layout>
        {data.allContentfulBlogPost.edges.map(post => Post(post.node))}
    </Layout>)

}

export default Posts;

export const pageQuery = graphql`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    slug
                    publishDate(formatString: "DD MMM YYYY")
                    title
                    tags
                    childContentfulBlogPostBodyTextNode {
                        childMarkdownRemark {
                            excerpt(pruneLength: 400)
                        }
                    }
                }
            }
        }
    }
`
