import * as React from "react"
import { graphql } from "gatsby"
import Tags from "../Components/tags"
import StyledLink from "../Components/styledLink";
import Header from "../Components/header";



const Post = ({slug, publishDate, title, childContentfulBlogPostBodyTextNode, tags}) => {
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

const Index = ({data}) => {
    return (<>
        {data.allContentfulBlogPost.edges.map(post => Post(post.node))}
    </>)

}

export default Index;

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
