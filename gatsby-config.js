module.exports = {
  siteMetadata: {
    title: "Paul Wild Dev",
  },
  plugins: [
    { resolve: `gatsby-transformer-remark` },
    { resolve: `gatsby-plugin-styled-components`},
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
