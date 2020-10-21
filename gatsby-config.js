module.exports = {
  siteMetadata: {
    title: `Birmingham Parents' Support Group`,
    description: `BPSG was founded in 1997. We are dedicated to helping families of lesbian, gay and bisexual people in coming to terms with knowing that a member of their family is gay.`,
    author: `@Zellement`,
    email: `bpsg@gmail.com`,
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
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                'gatsby-remark-relative-images',
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 800,
                    },
                },
            ],
        },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-JDSN2XVN5N`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `birmingham-parents-support-group`,
        short_name: `bpsg`,
        start_url: `/`,
        background_color: `#E01482`,
        theme_color: `#E01482`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
