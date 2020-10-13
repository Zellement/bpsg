module.exports = {
  siteMetadata: {
    title: `Birmingham Parents' Support Group`,
    description: `BPSG was founded in 1997. We are dedicated to helping families of lesbian, gay and bisexual people in coming to terms with knowing that a member of their family is gay.`,
    author: `@Zellement`,
    email: `birminghamparentssupportgroup@gmail.com`,
    telephone: '(0121) 711 8166',
    address: 'New Door, Oliver Bird Hall, Church Hill Road, Solihull, West Midlands, B91 3RQ'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `@wardpeet/gatsby-image-nextgen`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
