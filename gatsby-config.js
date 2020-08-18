module.exports = {
  siteMetadata: {
    title: `Oluwakeye John`,
    author: {
      name: `Oluwakeye John`,
      summary: `just a guy.`,
    },
    description: `Oluwakeye John, Web Developer based in Nigeria`,
    siteUrl: `https://johnkeye.com`,
    social: {
      twitter: `oluwakeyejohn`,
      dev: `oluwakeyejohn`,
      github: `oluwakeye-john`,
      linkedin: `oluwakeye-john-1706`,
      email: `bjohnoluwakeye@gmail.com`,
      codepen: `oluwakeye-john`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `autolink-class`,
              icon: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          // `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-174454448-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oluwakeye John`,
        short_name: `John`,
        start_url: `/`,
        background_color: `#ffffff`,
        // theme_color: `rgb(21, 32, 43)`,
        // theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `content/assets/icon1.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        // includePaths: ["/", { regex: "^/blog" }],
        includePaths: [{ regex: "^/blog" }],
        excludePaths: ["/blog"],
        height: 4,
        prependToBody: false,
        color: `#6e3a6c`,
        footerHeight: 50,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
