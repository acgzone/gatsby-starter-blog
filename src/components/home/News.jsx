import Link from "gatsby-link"

const News = ({ posts }) => {
  console.log("posts",posts)
  return (
    <div id="news">
      <div className="title1">
        <div className="title-dc-dc">
          <span className="title-dc">最新资讯</span>
          <span className="title-dc1">最新情報</span>
        </div>
        <span className="more1">..................</span>
        <div className="title-more">
          <Link to="/news">
            <span className="more">更多</span>
            <span className="more-r">もっと</span>
          </Link>
        </div>
      </div>
      <div className="title-new">
        {posts.map(post =>
        
          <Link to={post.node.fields.slug}>
            <div key={post.node.fields.slug}
              css={{
                display: 'inline-block',
              }}
            >
              <img src={require('./15news_01.png')} className="news-imgs"></img>
              <div>{post.node.frontmatter.title}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default News;