
import Home from '../components/home'

const Index = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;
  const posts = props.data.allMarkdownRemark.edges
  return <Home siteTitle={siteTitle} posts={posts} />
}

export default Index;

export const pageQuery = graphql`
query IndexQuery2 {
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
          cover {
            relativePath
            base
          }
          link
        }
      }
    }
  }
}
`