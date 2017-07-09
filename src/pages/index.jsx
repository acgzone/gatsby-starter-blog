import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { rhythm } from "../utils/typography"

import styles from "../styles"
import presets from "../utils/presets"
import './index.css'
class Index extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div className="zhongjian">
        <Helmet title={siteTitle} />
        <div className="title1">
            <text>多彩课程</text>
            <text className="more1">11</text>
            <text className="more">更多</text>
        </div>
        <div className="index-tp">
          <div className="index-mc">
            <img src={require('./1.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语</div>
          </div>
          <div className="index-mc">
            <img src={require('./2.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语</div>
          </div>
          <div className="index-mc">
            <img src={require('./3.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语</div>
          </div>
          <div className="index-mc">
            <img src={require('./4.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语</div>
          </div>
          <div className="index-mc">
            <img src={require('./5.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语</div>
          </div>
          <div className="index-mc">
            <img src={require('./6.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语</div>
          </div>
        </div>
        <h1>h2......</h1>
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
                <span
                  css={{
                    color: styles.colors.light,
                    display: `block`,
                    [presets.Tablet]: {
                      float: `right`,
                      marginLeft: `1rem`,
                    },
                  }}
                >
                  {post.node.frontmatter.date}
                </span>
                <Link to={post.node.fields.slug} className="link-underline">
                  {post.node.frontmatter.title}
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
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    filter: { frontmatter: { draft: { ne: true } } }
    sort: {fields: [frontmatter___date], order: DESC}
    ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
}
`
