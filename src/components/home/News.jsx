import Link from "gatsby-link"

const News = ({ posts }) => {
  return (
    <div id="news">
      <div className="title1">
        <div className="title-dc-dc">
          <span className="title-dc">&nbsp;最新资讯</span>
          <span className="title-dc1">&nbsp;最新情報</span>
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
        {posts.map(post =>{
          return <a href={post.node.frontmatter.link} target="_blank">
            <div key={post.node.fields.slug} className="news-img-img">
              <img src={require(post.node.frontmatter.img)} className="news-imgs"></img>
              <div className="title-new-tilte">{post.node.frontmatter.title}</div>
            </div>
          </a>
        }
        )}
      </div>
    </div>
  );
};

export default News;