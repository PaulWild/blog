module.exports = {
  siteMetadata: {
    title: "Paul Wild Dev",
  },
  plugins: [
    { resolve: `gatsby-plugin-styled-components`},
    { resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {resolve: "gatsby-remark-prismjs"}
        ]
      }},
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
        spaceId: process.env.CONTENTFUL_SPACEID,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
