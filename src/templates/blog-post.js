import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/layout";

const BlogPost = ({data}) => {

    console.log(data.contentfulBlogPost)
    return (<Layout>
        <div>{data.contentfulBlogPost.title}</div>
    </Layout>)

}

export default BlogPost;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulBlogPost(id: {eq: $id}) {
            slug
            title
            publishDate
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }`
