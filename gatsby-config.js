/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Arthaus Visual Communications Ltd",
    titleTemplate: "Arthaus Visual Communications Ltd",
    description:
      "We're a multimedia design agency that specializes in brand development and creative communications. We work with some of the world's leading companies, where our unique blend of creativity and technical capability enables us to generate solutions that engage, inspire and help drive business growth.",
    url: "https://www.arthaus.co.uk", // No trailing slash allowed!
    image: "/images/favicon.icon", // Path to your image you placed in the 'static' folder
    twitterUsername: "ArtHaus",
    facebookUsername: "ArtHaus.design",
    instagramUsername: "arthaus_design",
    linkedInUsername: "arthaus-visual-communications-",
  },
  /* Your site config here */
  plugins: [
    { resolve: `gatsby-remark-source-name` },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    { resolve: "gatsby-plugin-react-helmet" },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/images` },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: { path: `${__dirname}/public/images`, name: `imgFromNetlify` },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/styles/`,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     // google: {
    //     //   families: ["Lato", "Droid Serif"],
    //     // },
    //     custom: {
    //       families: ["Lato-Reg,Lato-Light,Lato-Black,Black"],
    //       urls: [`/fonts/fonts.css`],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/blog`,
    //     name: "blogData",
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/pages`,
        name: "blogPages",
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify-identity`,
    //   options: {
    //     url: `https://nostalgic-curran-576267.netlify.app`, // required!
    //   },
    // },

    `gatsby-transformer-remark`,
  ],
}
