import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { rhythm } from "../../utils/typography"

import styles from "../../styles"
import presets from "../../utils/presets"
import './index.css'
const Index = () => {
  return (
<div>
    <div className="course-daohang">
        <div className="course-daohang1">
            <img src={require('./course.png')} className="course-daohang2"></img><span>首页</span> &gt;<span>日语课程</span>
        </div>
    </div>
    <div className="courses">
        <div className="course" id="ryrm">
            <img src={require('./course_01.png')} className="course-img"></img>
            <h2 className="course-title">日语入门课程</h2>
            <div className="course-xin">★从0学日语</div>
            <div className="course-xin">★真 · 日语入门</div>
            <div className="course-biaoti">主要内容</div>
            <div className="course-biaoti1">1、	日本文化、历史、地理的介绍</div>
            <div className="course-biaoti1">2、	日本文化、历史、地理的介绍</div>
            <div className="course-biaoti1">3、	简单日常用语学习</div>
            <div className="course-biaoti">适合对象</div>
            <div className="course-biaoti1">1、	对日语感兴趣的0基础同学</div>
            <div className="course-biaoti1">2、	一直徘徊在50音的日语爱好者</div>
            <div className="course-biaoti1">3、	学习过一些日语却忘掉了的同学</div>
        </div>
        <div className="course" id="rydj">
            <img src={require('./course_02.png')} className="course-img"></img>
            <h2 className="course-title">日语等级课程</h2>
            <div className="course-xin">★系统性学习</div>
            <div className="course-xin">★考级包过</div>
            <div className="course-xin">★时间灵活</div>
            <div className="course-biaoti">学习目标</div>
            <div className="course-biaoti1">1、  等级课分为N5—N1全系列课程</div>
            <div className="course-biaoti1">2、	语法体系的建立，从初级一直到高级语法 </div>
            <div className="course-biaoti1">3、	掌握词汇1000—10000个</div>
            <div className="course-biaoti1">4、	日语会话能力从简单的日常问候到流畅的深入交流</div>
            <div className="course-biaoti1">5、	听说读写全面突破</div>
            <div className="course-biaoti">主要内容</div>
            <div className="course-biaoti1">1、  等级课分为N5—N1全系列课程</div>
            <div className="course-biaoti1">2、	学完N5-N4课程，具备初级日语水平，能够满足观看日本影视剧的需要 </div>
            <div className="course-biaoti1">3、	学完N5-N4课程，具备赴日留学语言学校所需口语水平</div>
            <div className="course-biaoti1">4、	学完N3-N1课程，具备应聘日企所需口语水平</div>
            <div className="course-biaoti1">5、	学完N2-N1课程具备直接赴日进入大学留学所需日语水平</div>
            <div className="course-biaoti">适合对象</div>
            <div className="course-biaoti1">1、	有一定日语基础（50音~）的同学</div>
            <div className="course-biaoti1">2、	希望独立完成日本旅行的同学（不借助翻译）</div>
            <div className="course-biaoti1">3、	希望赴日留学的同学</div>
            <div className="course-biaoti1">4、	希望进入日企工作的同学</div>
            <div className="course-biaoti1">5、	其他对日语感兴趣的同学</div>
        </div>
        <div className="course" id="rylx">
            <img src={require('./course_03.png')} className="course-img"></img>
            <h2 className="course-title">日语留学课程</h2>
            <div className="course-xin">★专注留学</div>
            <div className="course-xin">★专业的留学咨询</div>
            <div className="course-xin">★海归教学团队</div>
            <div className="course-biaoti">课程信息</div>
            <div className="course-biaoti1">1、  根据准备留学同学的日语水平划分不同的班级</div>
            <div className="course-biaoti1">2、	全程跟踪每个同学的学习情况，督促学生的学习 </div>
            <div className="course-biaoti1">3、	提供专业的留学信息咨询</div>
            <div className="course-biaoti">学习目标</div>
            <div className="course-biaoti1">1、  达到留学所需日语水平，完成相应级别的日语考试</div>
            <div className="course-biaoti1">2、	全面提升日语听说水平，为留学生活做准备 </div>
            <div className="course-biaoti1">3、	了解日本传统风俗文化</div>
            <div className="course-biaoti1">4、	掌握日本留学行前知识</div>
            <div className="course-biaoti">适合对象</div>
            <div className="course-biaoti1">希望赴日留学的同学</div>
        </div>
        <div className="course" id="ky">
            <img src={require('./course_04.png')} className="course-img"></img>
            <h2 className="course-title">口语课程</h2>
            <div className="course-xin">★富有经验的外教</div>
            <div className="course-xin">★海归教学团队</div>
            <div className="course-xin">★日企培训主管</div>
            <div className="course-biaoti">学习目标</div>
            <div className="course-biaoti1">1、	用日语进行简单的日常交流</div>
            <div className="course-biaoti1">2、	让在日企工作的你口语精进、更加自信</div>
            <div className="course-biaoti1">3、	提高已有的日语会话能力</div>
            <div className="course-biaoti">适合对象</div>
            <div className="course-biaoti1">1、	有一定日语基础（初级）的学员</div>
            <div className="course-biaoti1">2、	希望短期提高日语口语能力的同学</div>
        </div>
        <div className="course" id="xq">
            <img src={require('./course_05.png')} className="course-img"></img>
            <h2 className="course-title">兴趣课程</h2>
            <div className="course-xin">★动漫日语</div>
            <div className="course-xin">★日本文化</div>
            <div className="course-xin">★日文歌曲</div>
            <div className="course-biaoti">课程信息</div>
            <div className="course-biaoti1">1、	不定期开班，每期内容不固定</div>
            <div className="course-biaoti1">2、	一般围绕日本文化、地理、历史等开展一个专题</div>
            <div className="course-biaoti1">3、	不属于系统性日语学习课程</div>
            <div className="course-biaoti">适合对象</div>
            <div className="course-biaoti1">对日本文化感兴趣的同学</div>
            <div className="course-biaoti-zhu">注：本课程开班不固定、不属于严肃的学习课程，慎报。</div>
        </div>
        <div className="course" id="ly">
            <img src={require('./course_06.png')} className="course-img"></img>
            <h2 className="course-title">旅游日语</h2>
            <div className="course-xin">★旅游口语</div>
            <div className="course-xin">★日本自由行</div>
            <div className="course-xin">★海归教学团队</div>
            <div className="course-biaoti">课程信息</div>
            <div className="course-biaoti1">1、	根据报名情况不定期开班</div>
            <div className="course-biaoti1">2、	主要内容有热门景点介绍、常用口语学习</div>
            <div className="course-biaoti1">3、	为同学提供有用的旅行建议，制定旅行规划</div>
             <div className="course-biaoti">学习目标</div>
            <div className="course-biaoti1">1、	掌握短期日本旅行的常用口语</div>
            <div className="course-biaoti1">2、	了解日本各地风土人情</div>
            <div className="course-biaoti1">3、	掌握出行安全知识</div>
            <div className="course-biaoti">适合对象</div>
            <div className="course-biaoti1">希望赴日旅行的同学</div>
        </div>
        <div className="course" id="se">
          <img src={require('./course_07.png')} className="course-img"></img>
            <h2 className="course-title">少儿日语</h2>
            <div className="course-xin">★日本原版绘本</div>
            <div className="course-xin">★海归教学团队</div>
             <div className="course-biaoti">学习目标</div>
            <div className="course-biaoti1">1、	对孩子进行日语学习的启蒙</div>
            <div className="course-biaoti1">2、	掌握50音图</div>
            <div className="course-biaoti1">3、	掌握简单的日常用语</div>
            <div className="course-biaoti">适合对象</div>
            <div className="course-biaoti1">对日语、日本文化感兴趣的家长and孩子</div>
        </div>
        <div className="course" id="tbdz">
          <img src={require('./course_08.png')} className="course-img"></img>
            <h2 className="course-title">特别定制课程</h2>
            <div className="course-xin">★时间自由</div>
            <div className="course-xin">★1V1  1V2  1V3 精品教学</div>
            <div className="course-xin">★海归教学团队</div>
             <div className="course-biaoti">课程信息</div>
            <div className="course-biaoti1">1、	课程的上课时间和内容均可定制</div>
            <div className="course-biaoti1">2、	每周安排一次课程</div>
            <div className="course-biaoti">适合对象</div>
            <div className="course-biaoti1">1、	时间不太固定的同学</div>
            <div className="course-biaoti1">2、	希望按照自己的要求学习的同学</div>
        </div>
    </div>
    <div className="course-u">
        <ul className="course-ul">
            <li className="course-li">日语课程</li>
            <Link to="/course#ryrm"><li className="course-lis">日语入门课程</li></Link>
            <Link to="/course#rydj"><li className="course-lis">日语等级课程</li></Link>
            <Link to="/course#rylx"><li className="course-lis">口语课程</li></Link>
            <Link to="/course#ky"><li className="course-lis">日语留学课程</li></Link>
            <Link to="/course#xq"><li className="course-lis">兴趣课程</li></Link>
            <Link to="/course#ly"><li className="course-lis">旅游日语</li></Link>
            <Link to="/course#se"><li className="course-lis">少儿日语</li></Link>
            <Link to="/course#tbdz"><li className="course-lis">特别定制课程</li></Link>
        </ul>
    </div>
</div>
  )
}

export default Index;