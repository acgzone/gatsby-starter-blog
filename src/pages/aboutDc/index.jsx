import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import './index.css'
class Index extends React.Component {
  render() {

    return (
      <div css={{
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <Helmet title="大成简介" />
        <div className="about-daohang">
          <div className="about-daohang1">
            <img src={require('./about-us.png')} className="about-daohang2"></img><span>首页</span> &gt;<span>大成简介</span>
          </div>
        </div>
        <div className="abouts">
          <div className="about">
            <img src={require('./1.png')} className="about-img marginT"></img>
            <h2 className="about-title">大成日语</h2>
            <div className="about-neirong about-bottom">
              大成日语成立于2016年，隶属于成都大成合力教育咨询有限公司，本部位于成都市锦江区。是一家专业的日语培训、日本留学咨询机构。并且是JCL外国语学院、早稻田言语学院等日本名门语言学校的生源基地。公司现有十余名专职及特聘教师，一线老师都是具有丰富教学经验以及扎实日语功底的日本海归及日企从业人士。每年都有数百名同学加入到我们的大家庭中，学习日语知识、成功赴日留学。
            </div>
            <div className="about-neirong about-bottom">
              大成日语由归国日本留学生群体创立。他们大多毕业于日本著名高校，对日本教育和日本社会都有较为深刻和清晰的认识。2016年初在对国内的日语教育现状以及多所日本优秀语言学校的日语教育方式教育理念都进行了长时间的深入考察之后，成立了大成日语。2016年9月，在日语培训部的基础上，公司成立了日本留学部，专注于日本语言学校以及研究生的咨询申请工作。截止2017年8月，大成日语已经累计完成日语培训600余人次，另外帮助数十位同学进入到了理想的日本院校。
            </div>
            <div className="about-neirong about-bottom">
              大成日语本部位于成都市锦江区SOHO商务港，始终致力于为大家提供更专业的日语培训，更安心的日本留学。我们的愿景是，让更多的人认识日本，熟悉日本，多一些了解，少一些误解。
            </div>

            <img src={require('./2.jpg')} className="about-img"></img>
            <h2 className="about-title">组织架构</h2>
            <div className="about-neirong about-bottom">
              为了给同学们提供更专业的日语学习平台、更可靠的留学申请方案，大成日语设立了日语培训部以及日本留学部。日语培训部设有专职的教学担当以及教务担当，负责大家的日常日语学习教育工作。日本留学部设有专职的留学咨询顾问以及留学申请担当，负责从留学方案规划到签证申请的方方面面。此外，大成日语还和日本合作院校通力合作，为大家提供更与时俱进的日语学习课程和更安心安全的日本留学规划。
            </div>

            <h2 className="about-title">日语培训匠人</h2>
            <div className="about-neirong about-bottom">
              大成日语专注于日语教育培训、日本留学咨询，是专业的日语学习机构。始终致力于为学员提供更优质、更高效的一站式日语学习及日本留学服务。目前，大成日语旗下开设有入门日语、等级日语、旅游日语、少儿日语、留学日语、商务日语等各种课程，能够满足有不同日语学习需求的各类人群。
            </div>
            <h2 className="about-title">日本留学专家</h2>
            <div className="about-neirong about-bottom">
              大成日语与日本东京、京都、大阪等地的众多优良语言学校有长期良好的合作，输送了许多优秀的中国学生赴日留学。并且是JCL外国语学院、早稻田言语学院等多所日本留学名校在国内的直招基地，负责其在国内的院校宣传和招生工作。目前大成日语针对于中学生、大学生、研究生等不同阶段的同学，制定有多种个性化的专业的留学申请方案，助力同学们的赴日留学梦。
            </div>

            <h2 className="about-title">大成的优势</h2>
            <div className="about-neirong1">专业日本语学习&优秀教师团队</div>
            <div className="about-neirong">学校专注于日本语的学习和提升，所开设课程均与日语学习相关。学校老师多数是拥有留日经验和赴日工作经验的日语教学工作者，对日本历史，日本地理，日本文化有丰富的了解和深刻的体会。</div>
            <div className="about-neirong1">小班制教学和1V1教学</div>
            <div className="about-neirong">学校采用日式的考勤制度，每班设定人数2~9人，老师能对每个学员的学习进度和学习效果有清楚记录和全面把握，确保所受管理学员能够学好日本语；针对时间不定和难以跟班的学员制定1V1模式的课程，高效利用时间。</div>
            <div className="about-neirong1">丰富的课程设置</div>
            <div className="about-neirong about-bottom">
              学校开设有入门日语、等级日语、旅游日语、少儿日语、留学日语、商务日语等各种课程。
            </div>
            <div className="about-neirong about-bottom">
              针对小朋友的少儿课程开讲以来，得到了许多家长的认可和赞许。大成既是父母放心托付的学校，也是小朋友成长的空间；
            </div>
            <div className="about-neirong about-bottom">
              面对喜欢日本风情的旅游爱好者，学校开设有专业的旅游课程，由有留日经验的老师授课，全面针对旅游中的场景进行口语学习，并针对日本特定景点和特定季节性旅游资源进行讲解，从住宿，交通到吃喝玩乐，知识面广，实用性强；
            </div>
            <div className="about-neirong about-bottom">
              另外，学校还会定期不定期的组织各种丰富的日本文化相关活动，在学习一门语言的同时也能更多的了解一个国度。
            </div>

          </div>

          <div className="about-u">
            <ul className="about-ul">
              <li className="about-li"><img src={require('./about-us.png')} className="about-daohang2" />关于大成</li>
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
