import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import './index.css'
class Index extends React.Component {
  render() {

    return (
      <div>
        <Helmet title="大成简介" />
        <div className="about-daohang">
            <div className="about-daohang1">
                <img src={require('./about-us.png')} className="about-daohang2"></img><span>首页</span> &gt;<span>大成简介</span>
            </div>
        </div>
        <div className="abouts">
          <div className="about">
              <img src={require('./27profile_01.png')} className="about-img"></img>
              <h2 className="about-title">日语培训匠人</h2>
              <div className="about-neirong">大成日语专注于日语教育培训、日本留学咨询，是专业的日语学习机构。始终致力于为学员提供更优质、更高效的日语学习及日本留学服务。目前，大成日语旗下开设有入门日语、等级日语、旅游日语、少儿日语、留学日语、商务日语等各种课程，能够满足有不同日语学习需求的各类人群。
              </div>
              <img src={require('./28profile_02.png')} className="about-img"></img>
              <h2 className="about-title">日本留学专家</h2>
              <div className="about-neirong">大成日语与日本东京、京都、大阪等地的多所优良语言学校有长期良好的合作，输送了许多优秀的中国学生赴日留学。针对于中学生、大学生、研究生等不同阶段的同学，制定有多种个性化的专业的留学申请方案。
              </div>
          </div>
          <div className="about-u">
              <ul className="about-ul">
                <li className="about-li"><img src={require('./about-us.png')} className="about-daohang2"/>关于大成</li>
                <Link to="/aboutDc"><li className="about-lis">大成介绍</li></Link>
                <Link to="/aboutDc/about1"><li className="about-lis">团队介绍</li></Link>
                <Link to="/aboutDc/about2"><li className="about-lis">教学环境</li></Link>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Index;
