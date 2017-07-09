import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { rhythm } from "../../utils/typography"

import styles from "../../styles"
import presets from "../../utils/presets"

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div>
        <Helmet title="最新资讯" />
        <p>最新资讯</p>
        <ul
            css={{
              marginBottom: rhythm(2),
              marginTop: rhythm(2),
              marginLeft: 0,
              listStyle: `none`,
            }}
          >
            {posts.map(post =>
              <li key={post.node.fields.slug}>
                <Link to={post.node.fields.slug} className="link-underline">
                  <img src={require('../' + post.node.frontmatter.cover.relativePath)} />
                  <h1>{post.node.frontmatter.title}</h1>
                  <p>{post.node.excerpt}</p>
                </Link>
              </li>
            )}
          </ul>
      </div>
    )
  }
}

export default Index;

export const pageQuery = graphql`
query NewsQuery {
  allMarkdownRemark(
    limit: 3
    filter: { frontmatter: { draft: { ne: true } } }
    sort: {fields: [frontmatter___date], order: DESC}
    ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          cover {
            relativePath
            base
          }
        }
      }
    }
  }
}
`
