module.exports = {
  siteMetadata: {
    title: `Florian Dupuis - Développeur Web Full Stack`,
    description: `Freelance Développeur Web. Sites vitrines, sites e-commerce, Applications Web, Stratégies digitales, Référencement SEO, Cartes de visite, Flyers, Plaquettes`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-48x48.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data`,
        name: "project",
      },
    },
    `gatsby-transformer-json`,
    "gatsby-transformer-remark"
  ],
}
