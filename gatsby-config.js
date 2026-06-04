/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Bob van Oorschot`,
    siteUrl: `https://bobvanoorschot.nl`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-burobork`,
      options: {
        key: "ae4a9cc4-020e-4220-82e9-935998cf565e",
      },
    },
  ],
}
