const path = require('path');

exports.modifyWebpackConfig = modifyWebpackConfig;
function modifyWebpackConfig({ config, stage }) {
  if (stage === 'build-html') {
    config._config.entry.main = require.resolve('./build/render-page');
  }
}

/*exports.createPages = createPages;
async function createPages({ boundActionCreators, graphql }) {
  const { errors, data } = await graphql(`{
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
  }`);

  if (errors) {
    return Promise.reject(errors);
  }

  for (const { node } of data.allMarkdownRemark.edges) {
    const { frontmatter: fm } = node;

    boundActionCreators.createPage({
      path: fm.path,
      component: path.resolve(`src/templates/${String(fm.contentType)}.js`),
      context: {} // additional data can be passed via context
    });
  }
}*/


