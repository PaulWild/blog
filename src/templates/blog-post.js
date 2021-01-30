import * as React from "react"
import { graphql } from "gatsby"
import Header from "../Components/header";
import Tags from "../Components/tags";

const BlogPost = ({data}) => {

    return (
        <>
        <section>
            <Header>
                <h1>{data.contentfulBlogPost.title}</h1>
                <h5>{data.contentfulBlogPost.publishDate}</h5>
            </Header>
            <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPost.body.childMarkdownRemark.html }} />
            <Tags tags={data.contentfulBlogPost.tags}></Tags>
        </section>
        </>
    )

}

export default BlogPost;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulBlogPost(id: {eq: $id}) {
            slug
            title
            publishDate(formatString: "DD MMM YYYY")
            tags
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }`
