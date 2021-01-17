module.exports = {
  siteMetadata: {
    title: "Paul Wild Dev",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "5Bjr8TYyAiu5x7KNylkyeRrgkgOp7h6qFYbSZKqzK9E",
        spaceId: "a2c5z4nwel2n",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
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
