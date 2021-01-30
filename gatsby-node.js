const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect, createPage } = actions

    createRedirect({
        fromPath: `/`,
        toPath: `/posts`,
        redirectInBrowser: true,
        isPermanent: true,
    })

    const result = await graphql(`
         query MyQuery {
          allContentfulBlogPost {
            edges {
              node {
                slug
                id
              }
            }
          }
        }
        `)

    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            path: `posts/${node.slug}`,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                id: node.id,
            },
        })
    })
}