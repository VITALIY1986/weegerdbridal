const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production'){
  dotenv.config()
}



module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Forty V2",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hmbu9d7d9pms`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `t_n5VeZ5DmQewST7Mpo_5VF8NMgMFKiW_WcE0TTMzQo`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-copy-linked-files`,
         
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
