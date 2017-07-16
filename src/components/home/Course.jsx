import Link from "gatsby-link"
const Course = () => {
  return (
    <div id="course">
      <div className="title1">
        <div className="title-dc-dc">
          <span className="title-dc">多彩课程</span>
          <span className="title-dc1">多彩なコース</span>
        </div>
        <span className="more1">..................</span>
        <div className="title-more">
          <Link to="/course">
            <span className="more">更多</span>
            <span className="more-r">もっと</span>
          </Link>
        </div>
      </div>
      <div className="index-tp">
        <div className="index-mc">
          <Link to="/course#ryrm">
            <img src={require('./1.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语入门课程</div>
          </Link>
        </div>
        <div className="index-mc">
          <Link to="/course#rydj">
            <img src={require('./2.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语等级课程</div>
          </Link>
        </div>
        <div className="index-mc">
          <Link to="/course#ky">
            <img src={require('./3.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">口语课程</div>
          </Link>
        </div>
        <div className="index-mc">
          <Link to="/course#rylx">
            <img src={require('./4.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">日语留学课程</div>
          </Link>
        </div>
        <div className="index-mc">
          <Link to="/course#xq">
            <img src={require('./5.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">兴趣课程</div>
          </Link>
        </div>
        <div className="index-mc">
          <Link to="/course#ly">
            <img src={require('./6.png')} className="index-tp-tp"></img>
            <div className="index-tp-ms">旅游日语</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;