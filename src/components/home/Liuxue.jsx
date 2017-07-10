const Liuxue = () => {
  return (
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
  );
};

export default Liuxue;