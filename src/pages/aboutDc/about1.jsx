import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { rhythm } from "../../utils/typography"

import './index.css'
class About1 extends React.Component {
  render() {

    return (
      <div className="abouts">
        <div className="about">
            <h2 className="about-title">教日语，我们是认真的</h2>
            <div className="about-neirong">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于老师的甄选，大成日语是几近偏执的。我们始终认为，宁缺毋滥！责任心是我们对老师的第一要求，对学生负责，同样也要对自己负责。能力和经验也是一个优秀的教师不可或缺的，大成日语的老师许多都是有留日经验的归国留学生、有的曾是日企资深培训师。我们坚信，专业的事，需要专业的人。
            </div>
            <div className="about-neirong">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时，我们注重教学团队的学习和交流，经常开展交流培训活动。努力营造平等、开放、快乐的学习和工作氛围。
            </div>
        </div>
        <div className="about-u">
            <ul className="about-ul">
              <li className="about-li">关于大成</li>
              <Link to="../aboutDc"><li className="about-lis">大成介绍</li></Link>
              <Link to="./about1"><li className="about-lis">团队介绍</li></Link>
              <Link to="./about2"><li className="about-lis">教学环境</li></Link>
            </ul>
          </div>
      </div>
    )
  }
}

export default About1;
