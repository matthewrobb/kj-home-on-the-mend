const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => (
  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              contentType
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      boundActionCreators.createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.contentType)}.js`),
        context: {} // additional data can be passed via context
      });
    });
  })
);

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config._config.entry.main = require.resolve('./src/render-page');
  }
};
