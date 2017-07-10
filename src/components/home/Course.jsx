const Course = () => {
  return (
    <div id="course">
      <div className="title1">
        <span className="title">多彩课程</span>
        <span className="more1">......</span>
        <span className="more">更多</span>
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
  );
};

export default Course;