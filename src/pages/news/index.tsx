import * as React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from 'styled-components'

interface Post {
  node: {
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      cover: {
        relativePath: string;
        base: string;
      };
      img: string;
      link: string;
    }
  }
}
interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: ReadonlyArray<Post>;
    }
  }
}

const NewsDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  background-color: #fff;
`
const Header = styled.p`
  border-bottom: 1px solid #e5e5e5;
  color: #666;
  font-size: 0.7rem;
  margin: 10px 0;
  padding-bottom: 6px;
`
const HeaderImg = styled.img`
  vertical-align: middle;
`
const Title = styled.h3`
  color: #595757;
  font-size: 1rem;
  margin-bottom: 0;
`
const Desc = styled.p`
  font-size: 0.7rem;
  color: #595757;
`
const Cover = styled.img`
  width: 100%;
  margin-bottom: 0;
`
const List = styled.ul`
  margin-bottom: 30px;
  margin-top: 0;
  margin-left: 0;
  list-style: none;
`
const News = (props: IndexPageProps) => {
  const posts = props.data.allMarkdownRemark.edges;
  return (
    <NewsDiv>
      <Header><HeaderImg src={require('./news.png')} />&nbsp;&nbsp;&nbsp;<span>新闻资讯</span></Header>
      <List>
        {posts.map(post => {
          let path = `${post.node.frontmatter.cover.relativePath}`;
          path = path.slice(0, path.lastIndexOf('.'))
          console.log(path, `../${path}.png`)
          {/* let path2 = `../${path}.png`; */}
          return <li key={post.node.fields.slug}>
            <a href={post.node.frontmatter.link} target="_blank">
              {/* <Cover src={require('../' + path + '.png')} /> */}
              <Cover src={require(`../${path}.png`)} />
              {/* <Cover src={require(`${path2}`)} />   */} {/* https://webpack.github.io/docs/context.html */}
              <Title>{post.node.frontmatter.title}</Title>
              <Desc>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.node.excerpt}</Desc>
            </a>
          </li>
        }
        )}
      </List>
    </NewsDiv>
  )
}

export default News;

export const pageQuery = graphql`
query NewsQuery2 {
  allMarkdownRemark(
  limit: 4
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
        img
        link
      }
    }
  }
  }
}
`