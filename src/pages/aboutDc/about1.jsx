import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { rhythm } from "../../utils/typography"

import './index.css'
class About1 extends React.Component {
  render() {

    return (
      <div className="abouts">
        <div className="about-daohang">
            <div className="about-daohang1">
                <img src={require('./about us.png')} className="about-daohang2"></img><span>首页</span> &gt;<span>团队介绍</span>
            </div>
        </div>
        <div className="about">
            <h2 className="about-title">教日语，我们是认真的</h2>
            <div className="about-neirong">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于老师的甄选，大成日语是几近偏执的。我们始终认为，宁缺毋滥！责任心是我们对老师的第一要求，对学生负责，同样也要对自己负责。能力和经验也是一个优秀的教师不可或缺的，大成日语的老师许多都是有留日经验的归国留学生、有的曾是日企资深培训师。我们坚信，专业的事，需要专业的人。
            </div>
            <div className="about-neirong">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时，我们注重教学团队的学习和交流，经常开展交流培训活动。努力营造平等、开放、快乐的学习和工作氛围。
            </div>
        </div>
        <div className="about-ls">
            <img className="about-ls-l" src={require('./border_left.png')}/>
            <img className="about-ls-r" src={require('./border_right.png')}/>
            <img className="about-ls-img" src={require('./29allen_teacher_01.png')}/>
            <div className="about-ls-js">
              <div className="about-ls-ls">Allen老师</div>
              <div  className="about-ls-nr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日本国立神户大学硕士毕业，自学一年过N1，工科背景却有一口标准的发音。深谙二次元文化，日语基本启蒙于动漫。留日多年，对日本风土人情略知一二。精（lue）通（zhi）地理/历史/经济，相信他一定和你聊得来。</div>
            </div>
        </div>
        <div className="about-ls">
            <img className="about-ls-l" src={require('./border_left.png')}/>
            <img className="about-ls-r" src={require('./border_right.png')}/>
            <img className="about-ls-img" src={require('./30koka_teacher_02.png')}/>
            <div className="about-ls-js">
              <div className="about-ls-ls">Koka老师</div>
              <div  className="about-ls-nr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日语科班出身，日语专四、专八、N1全部一次通过，曾成功DIY留学日本。爱日剧日漫、也爱日本古典文学；当过日本导游也做过日本代购，小小关西通带你了解日本逛吃文化。</div>
            </div>
        </div>
        <div className="about-ls">
            <img className="about-ls-l" src={require('./border_left.png')}/>
            <img className="about-ls-r" src={require('./border_right.png')}/>
            <img className="about-ls-img" src={require('./31Zhou_teacher_03.png')}/>
            <div className="about-ls-js">
              <div className="about-ls-ls">Zhou老师</div>
              <div  className="about-ls-nr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;毕业于上海师范大学日语系，高分飞过N1、专八，3年日企日语培训经验，两度赴日研修学习，熟知日企文化、深谙商务礼仪。浸淫对日业务多年，日企就职、赴日工作，她都可以给你更专业的指导。</div>
            </div>
        </div>
        <div className="about-ls">
            <img className="about-ls-l" src={require('./border_left.png')}/>
            <img className="about-ls-r" src={require('./border_right.png')}/>
            <img className="about-ls-img" src={require('./32龟井老师_04.png')}/>
            <div className="about-ls-js">
              <div className="about-ls-ls">龟田老师</div>
              <div  className="about-ls-nr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日本人的严谨和认真在龟井老师身上体现得淋漓尽致。对待每个同学都极有耐心，真正的手把手教学。出身爱知县的龟井老师深谙日本的传统文化，是个可爱的日本女老师。</div>
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
    )
  }
}

export default About1;
