import Link from "gatsby-link"

const News = ({ posts }) => {
  return (
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
            }}
          >
            <img src={require('./1.png')}
              css ={{
                width: 400,
              }}></img>
            <div>{post.node.frontmatter.title}</div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default News;