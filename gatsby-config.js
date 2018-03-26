module.exports = {
  siteMetadata: {
    title: 'Home on the Mend - Handyman Service'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-next'
  ]
}
