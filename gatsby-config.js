module.exports = {
  siteMetadata: {
    title: `Civic Hackathons`,
    desc: `A new blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    // `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `img`,
    //     path: `${__dirname}/src/images`
    //   }
    // },
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `civichackathons.com`,
        short_name: `Civic Hacks`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#0d2b56`,
        display: `minimal-ui`,
        icon: `src/images/logo-500x500.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
