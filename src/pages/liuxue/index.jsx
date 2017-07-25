import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import './index.css'
const Index = () => {
  return (
      <div>
       <Helmet title="日本留学" />
        <div className="liuxue-daohang">
            <div className="liuxue-daohang1">
                <img src={require('./liuxue.png')} className="liuxue-daohang2"></img><span>首页</span> &gt;<span>日本留学</span>
            </div>
        </div>
        <div className="liuxues">
            <div className="liuxue" id="gaozhong">
                <img src={require('./Overseas_01.png')} className="liuxue-img"></img>
                <h3 className="liuxue-h3">高中生留学</h3>
                <div className="liuxue-biaoti">留学条件</div>
                <div className="liuxue-biaoti1 liuxue-indent">高中生赴日留学需要申请语言学校。在语言学校进行学习期间可以参加日本统一组织的日本留学生考试，最终进入理想的日本大学。申请语言学校需要满足的条件有：</div>
                <div className="liuxue-biaoti1">1、	在国内接受满12年正规教育（高中毕业）；</div>
                <div className="liuxue-biaoti1">2、	有一定的日语学习经历（一般为180小时）；</div>
                <div className="liuxue-biaoti1">3、	获得日本语能力测试N5级及以上证书（部分学校有要求）；</div>
                <div className="liuxue-biaoti1">4、	高考成绩的要求（部分学校有要求）；</div>
                <div className="liuxue-biaoti1">5、	充足的资金保证（资金证明等）。</div>
                <div className="liuxue-biaoti">留学费用</div>
                <div className="liuxue-biaoti1">语言学校相关费用：</div>
                <div className="liuxue-biaoti1">1、	报名费：2000RMB左右</div>
                <div className="liuxue-biaoti1">2、	一直徘徊在50音的日语爱好者</div>
                <div className="liuxue-biaoti1">3、	入学金：3000RMB左右</div>
                <div className="liuxue-biaoti1">4、	学费：一年80万日元左右（5万RMB左右）</div>
                <div className="liuxue-biaoti1">5、	住宿费：宿舍一般较为便宜（1000RMB~3000RMB左右每月）</div>
                <div className="liuxue-biaoti1 liuxue-indent1">外面租住一般3000RMB左右每月（分地区）</div>
                <div className="liuxue-biaoti1 liuxue-bottom">日本允许留学生申请打工，对家庭负担较小。</div>
            </div>
            <div className="liuxue" id="daxue">
                <img src={require('./Overseas_02.png')} className="liuxue-img"></img>
                <h3 className="liuxue-h3">大学生留学</h3>
                <div className="liuxue-biaoti">留学条件</div>
                <div className="liuxue-biaoti1">1、	申请大学院研究生（研究生院预科）：在国内接受满16年正规教育（本科毕业即为16年、此项一般为硬性要求），除此外还需要至少N2以上的日语能力，根据升学专业而异，文科一般要求日语能力达到N1水平，大部分理工科专业N2水平左右；</div>
                <div className="liuxue-biaoti1">2、	申请大学（本科）：部分学校部分专业可直接从大三参加编入考核从大三开始学习，但考试难度和对日语的要求较高；</div>
                <div className="liuxue-biaoti1">3、	申请语言学校（专科生一般先申请语言学校过度）：需要目前为止的最高学历证明，学习过一定时间的日语（日语学时证明），具体依学校而定；</div>
                <div className="liuxue-biaoti1 liuxue-indent">综上，留学条件里虽根据申请的等级不同而有所差异，但必不可少的一定是学习过日语，除此之外必须的就是有固定经济支付人，能保证你的学费正常交付。</div>
                <div className="liuxue-biaoti">材料准备</div>
                <div className="liuxue-biaoti1">1、	目前为止最高学历证明书；</div>
                <div className="liuxue-biaoti1">2、	日语学时证明或日语等级证书；</div>
                <div className="liuxue-biaoti1">3、	经济支付人的经济能力证明（在职证明，收入证明）；</div>
                <div className="liuxue-biaoti1">4、	申请学校统一式样的入学申请书，就学理由书，履历书等必填资料；</div>
                <div className="liuxue-biaoti1">5、	高考成绩证明（需认证）；</div>
                <div className="liuxue-biaoti1">6、	亲属公证（证明跟经济支付人关系）；</div>
                <div className="liuxue-biaoti1">7、	存款证明；</div>
                <div className="liuxue-biaoti1">8、	一定数量的规定样式照片。</div>
                <div className="liuxue-biaoti1">9、	护照复印件</div>
                <div className="liuxue-biaoti">留学费用</div>
                <div className="liuxue-biaoti1">大学院研究生相关费用：</div>
                <div className="liuxue-biaoti1">1、	报名费：600RMB左右</div>
                <div className="liuxue-biaoti1">2、	入学金：5000RMB左右</div>
                <div className="liuxue-biaoti1">3、	学费：一年35万日元左右（2万RMB左右）</div>
                <div className="liuxue-biaoti1">4、	住宿费：宿舍一般较为便宜（1000RMB~3000RMB左右每月）</div>
                <div className="liuxue-biaoti1 liuxue-indent1">外面租住一般3000RMB左右每月（分地区）</div>
                <div className="liuxue-biaoti1 liuxue-bottom">日本允许留学生申请打工，对家庭负担较小。</div>
            </div>
            <div className="liuxue" id="work">
                <img src={require('./Overseas_03.png')} className="liuxue-img"></img>
                <h3 className="liuxue-h3">工作后留学</h3>
                <div className="liuxue-biaoti">留学条件</div>
                <div className="liuxue-biaoti1">1、	最终学历为本科专科的参照大学生留学；</div>
                <div className="liuxue-biaoti1">2、	最终学历为高中的参照高中生留学。</div>
                <div className="liuxue-biaoti1">注：部分语言学校和大学对申请人年龄或毕业年限有要求，具体需咨询相关院校。</div>
                <div className="liuxue-biaoti">材料准备</div>
                <div className="liuxue-biaoti1">1、	目前为止最高学历证明书；</div>
                <div className="liuxue-biaoti1">2、	日语学时证明或日语等级证书；</div>
                <div className="liuxue-biaoti1">3、	经济支付人的经济能力证明（在职证明，收入证明）；</div>
                <div className="liuxue-biaoti1">4、	申请学校统一式样的入学申请书，就学理由书，履历书等必填资料；</div>
                <div className="liuxue-biaoti1">5、	高考成绩证明（需认证）；</div>
                <div className="liuxue-biaoti1">6、	亲属公证（证明跟经济支付人关系）；</div>
                <div className="liuxue-biaoti1">7、	存款证明；</div>
                <div className="liuxue-biaoti1">8、	一定数量的规定样式照片。</div>
                <div className="liuxue-biaoti1 liuxue-bottom">9、	护照复印件</div>
            </div>
            <div className="liuxue-u">
                <ul className="liuxue-ul">
                <li className="liuxue-li"><img src={require('./liuxue.png')} className="liuxue-daohang2"/>日本留学</li>
                <Link to="/liuxue#gaozhong"><li className="liuxue-lis">高中生留学</li></Link>
                <Link to="/liuxue#daxue"><li className="liuxue-lis">大学生留学</li></Link>
                <Link to="/liuxue#work"><li className="liuxue-lis">工作后留学</li></Link>
                </ul>
            </div> 
        </div>
    </div>
  )
}

export default Index;