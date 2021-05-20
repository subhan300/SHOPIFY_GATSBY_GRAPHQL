/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName:"dress-online-shopsss",
        // process.env.SHOP_NAME,
  
        // The storefront access token
        accessToken:"a7311c09653d246f1364ce28963a3c5c",
        // process.env.ACESS_TOKEN,
        apiVersion: "2020-04",
        verbose: true,
        paginationSize: 250,
        includeCollections: ["shop", "content"],
      },
    },
  ]
}
