import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import './index.css'
class About2 extends React.Component {
  render() {

    return (
      <div>
        <Helmet title="教学环境" />
        <div className="about-daohang">
            <div className="about-daohang1">
                <img src={require('./about us.png')} className="about-daohang2"></img><span>首页</span> &gt;<span>教学环境</span>
            </div>
        </div>
        <div className="abouts">
          <div className="about">
              <img src={require('./33envi_01.png')} className="about-img"></img>
              <h2 className="about-title">大成日语</h2>
              <div className="about-neirong">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;许多同学都是因为对日本文化感兴趣而学习日语的。优美的教学环境能够激发同学们的学习兴趣，使同学们能够更好的掌握日语。于是我们整体采用了优美的和风装修。在许多细节也添加了日系的元素。
              </div>
              <div className="xiangshang">
                <img src={require('./sjx.png')} className="about-img-xs"></img>
                <img src={require('./34envi_02.png')} className="about-img"></img>
                <h2 className="about-title">活动区</h2>
              </div>
              <div className="xiangshang">
                <img src={require('./sjx.png')} className="about-img-xs"></img>
                <img src={require('./35envi_03.png')} className="about-img"></img>
                <h2 className="about-title">教学区</h2>
              </div>
          </div>
          <div className="about-u">
              <ul className="about-ul">
                <li className="about-li"><img src={require('./about us.png')} className="about-daohang2"/>关于大成</li>
                <Link to="../aboutDc"><li className="about-lis">大成介绍</li></Link>
                <Link to="./about1"><li className="about-lis">团队介绍</li></Link>
                <Link to="./about2"><li className="about-lis">教学环境</li></Link>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default About2;
