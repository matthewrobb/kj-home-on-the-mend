import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

const IndexPage = ((
  filter = ({ node: post })=> (
    !post.frontmatter.hidden && post.frontmatter.contentType === 'blog'
  ),
  mapper = ({ node: post }) => (
    <Card style={{marginBottom: 10}} key={post.id}>
      <CardBody>
        <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
        <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
        <CardText>{post.excerpt}<pre>{JSON.stringify(post, null, 2)}</pre></CardText>
      </CardBody>
    </Card>
  )
)=> ({ data }) => (
  <Container>
    {data.allMarkdownRemark.edges.filter(filter).map(mapper)}
  </Container>
))();

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`
