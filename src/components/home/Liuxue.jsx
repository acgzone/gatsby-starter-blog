import Link from "gatsby-link"
const Liuxue = () => {
  return (
    <div id="liuxue">
      <div className="title1">
        <div className="title-dc-dc">
          <span className="title-dc">&nbsp;留学日本</span>
          <span className="title-dc1">&nbsp;留学日本</span>
        </div>
        <span className="more1">.......................................................................</span>
        <div className="title-more">
          <Link to="/liuxue">
            <span className="more">更多</span>
            <span className="more-r">もっと</span>
          </Link>
        </div>
      </div>
      <div className="index-tp">
        <div className="index-mc">
          <Link to="/liuxue#gaozhong">
            <img src={require('./12study_01.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">高中生留学</div>
          </Link>
        </div>
        <div className="index-mc">
          <Link to="/liuxue#daxue">
            <img src={require('./13study_02 .png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">大学生留学</div>
          </Link>
        </div>
        <div className="index-mc">
          <Link to="/liuxue#work">
            <img src={require('./14study_03.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">工作后留学</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Liuxue;