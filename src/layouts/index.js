import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';

import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// main site style
import './index.scss';

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const TemplateWrapper = ({ children, data }) => {
  let user;
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser();
  }
  return (
    <div className='App'>
      <Helmet title={data.site.siteMetadata.title} />
      <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div>
          <Link to='/' className='navbar-brand'>{data.site.siteMetadata.title}</Link>
          <ul className='nav navbar-nav'>

            {user && (
              <li className='nav-item'>
                <a href='/admin' className='nav-link'>Admin</a>
              </li>
            )}

            <li className='nav-item'>
              <Link to='/about' className='nav-link'>About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='pageContent'>{children()}</div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
