import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import Banner from '../components/Banner'
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
        <Banner css={{
          height: '200px',
        }}/>
        <div id="main">
          <div id="sidebar"
            css={{
              position: 'fixed',
              right: 50,
              top: 500,
              width: '200px',
              border: '1px solid red',
              height: '500px', 
            }}
          >
            边栏。。。
          </div>
          <div id="content">
          <div id="course">
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
          </div>
          <div id="liuxue">
            <div className="title1">
                <text>留学日本</text>
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
            </div>
          </div>
          <div id="news">
            <div className="title1">
                <text>最新资讯</text>
                <text className="more1">11</text>
                <text className="more">更多</text>
            </div>
            {posts.map(post =>
              <Link to={post.node.fields.slug}>
                <div key={post.node.fields.slug}
                  css={{
                    display: 'inline-block',
                    width: '40%',
                  }}
                >
                  <img src={require('./1.png')}></img>
                  <div>{post.node.frontmatter.title}</div>
                </div>
              </Link>
            )}
          </div>
          </div>
          </div>
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
