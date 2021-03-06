const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production'){
  dotenv.config()
}



module.exports = {
  siteMetadata: {

    title: `Купить свадебное платье - фото, цены`,

    author: {
      name: `Falice Bride`,
      summary: `who lives and works in San Francisco `,
    },
    description: `Широкий выбор свадебных платьев в Киеве, большой модельный ряд, гибкие цены`,
    siteUrl: `http://www.svadebnyye-platya.kiev.ua/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    options: {
      siteUrl: `http://www.svadebnyye-platya.kiev.ua`,
    },
  },
  `gatsby-plugin-sitemap`,
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'http://www.svadebnyye-platya.kiev.ua',
      sitemap: 'http://www.svadebnyye-platya.kiev.ua/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        siteUrl: `http://www.svadebnyye-platya.kiev.ua`,
        name: 'Свадебные платья КИЕВ',
        short_name: 'Falice Bride',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
        // This path is relative to the root of the site.
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
          `@contentful/gatsby-transformer-contentful-richtext`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   
   
  ],
}
