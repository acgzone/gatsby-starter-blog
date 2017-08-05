import Link from "gatsby-link"

const Sidebar = ({ scrollTop }) => {
  const top = scrollTop - 500 > 50 ? scrollTop - 500 : 50;
  return <div className="index-u" css={{ top }}>
    <ul className="index-ul">
      <li className="index-li"><span><img className="index-lis-img" src={require('./index.png')} /><span>&nbsp;&nbsp;首页</span></span><span className="index-u-flex1">ホーム</span></li>
      <Link to="/aboutDc"><li className="index-lis"><span><img className="index-lis-img" src={require('./about-us.png')} /><span>&nbsp;&nbsp;关于大成</span></span><span className="index-u-flex">学院案内</span></li></Link>
      <Link to="/course"><li className="index-lis"><span><img className="index-lis-img" src={require('./course.png')} /><span>&nbsp;&nbsp;日语课程</span></span><span className="index-u-flex">コース紹介</span></li></Link>
      <Link to="/liuxue"><li className="index-lis"><span><img className="index-lis-img" src={require('./oversea.png')} /><span>&nbsp;&nbsp;日本留学</span></span><span className="index-u-flex">日本留学</span></li></Link>
      <Link to="/news"><li className="index-lis"><span><img className="index-lis-img" src={require('./news.png')} /><span>&nbsp;&nbsp;新闻资讯</span></span><span className="index-u-flex">ニュース</span></li></Link>
      <Link to="/aboutus"><li className="index-lis"><span><img className="index-lis-img" src={require('./contact.png')} /><span>&nbsp;&nbsp;联系我们</span></span><span className="index-u-flex">コンタクト</span></li></Link>
    </ul>
  </div>
}

export default Sidebar;