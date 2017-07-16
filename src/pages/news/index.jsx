import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { rhythm } from "../../utils/typography"

import styles from "../../styles"
import presets from "../../utils/presets"
import './index.css'
class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div className="news">
        <Helmet title="最新资讯" />
        <p className="news-title"><img src={require('./news.png')}/>&nbsp;&nbsp;&nbsp;最新资讯</p>
        <ul
            css={{
              marginBottom: rhythm(2),
              marginTop: rhythm(0),
              marginLeft: 0,
              listStyle: `none`,
            }}
          >
            {posts.map(post =>
              <li key={post.node.fields.slug}>
                <Link to={post.node.fields.slug}>
                  <img className="news-img" src={require('../' + post.node.frontmatter.cover.relativePath)} />
                  <h3 className="news-titles">{post.node.frontmatter.title}</h3>
                  <p className="news-desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.node.excerpt}</p>
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
