import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from 'styled-components'
import './index.css'

const Daohang = styled.div`
    border-bottom: 1px solid #f9f9f9;
    background: #ebece7;
    margin: 0 auto;
    max-width: 100%;
    height: 30px;
`
const Daohang1 = styled.div`
    color: #666;
    font-size: 0.7rem;
    max-width: 1200px;
    text-align: left;
    margin: 0 auto;
    padding-top: 5px;
`
const Daohang2 = styled.img`
    margin-right: 5px;
    margin-left: 10px;
    vertical-align: middle;
    display: inline-block;
    margin-bottom: 3px;
`
const Liuxues = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
`
const Liuxue = styled.div`
    width: 950px;
`
const Img = styled.img`
    width: 950px;
`
const H3 = styled.h3`
    color: #595757;
    font-weight: bold;
`
const Title = styled.div`
    font-size: 1.2rem;
    color: #595757;
    margin-left: 10px;
    width: 100%;
    text-align: left;
    line-height: 2.5em;
`

const Biaoti1 = styled.div`
    font-size: 0.9rem;
    color: #333;
    margin-left: 40px;
    width: 910px;
    text-align: left;
    line-height: 2.5em;
`
const IndentBiaoti1 = Biaoti1.extend`
    text-indent: 30px
`
const Indent1Biaoti1 = Biaoti1.extend`
    text-indent: 85px
`
const BottomBiaoti1 = Biaoti1.extend`
    margin-bottom: 50px;
`
const Index = () => {
  return (
      <div>
       <Helmet title="日本留学" />
        <Daohang>
            <Daohang1>
                <Daohang2 src={require('./liuxue.png')} /><span>首页</span> &gt;<span>日本留学</span>
            </Daohang1>
        </Daohang>
        <Liuxues>
            <Liuxue id="gaozhong">
                <Img src={require('./Overseas_01.png')} className="marginT"/>
                <H3>高中生留学</H3>
                <Title>留学条件</Title>
                <IndentBiaoti1>高中生赴日留学需要申请语言学校。在语言学校进行学习期间可以参加日本统一组织的日本留学生考试，从而进入理想的日本大学。申请语言学校需要满足的条件有：</IndentBiaoti1>
                <Biaoti1>1、	在国内接受满12年正规教育（高中毕业）；</Biaoti1>
                <Biaoti1>2、	有一定的日语学习经历（一般为180小时）；</Biaoti1>
                <Biaoti1>3、	获得日本语能力测试N5级及以上证书（部分学校有要求）；</Biaoti1>
                <Biaoti1>4、	高考成绩的要求（部分学校有要求）；</Biaoti1>
                <Biaoti1>5、	充足的资金保证（资金证明等）。</Biaoti1>
                <Title>留学费用</Title>
                <Biaoti1>语言学校相关费用：</Biaoti1>
                <Biaoti1>1、	报名费：2000RMB左右</Biaoti1>
                <Biaoti1>2、	入学金：3000RMB左右</Biaoti1>
                <Biaoti1>3、	学费：一年80万日元左右（5万RMB左右）</Biaoti1>
                <Biaoti1>4、	住宿费：宿舍一般较为便宜（1000RMB~3000RMB左右每月）</Biaoti1>
                <Indent1Biaoti1>外面租住一般3000RMB左右每月（分地区）</Indent1Biaoti1>
                <BottomBiaoti1>日本允许留学生申请打工，对家庭负担较小。</BottomBiaoti1>
            </Liuxue>
            <Liuxue id="daxue">
                <Img src={require('./Overseas_02.png')}/>
                <H3>大学生留学</H3>
                <Title>留学条件</Title>
                <Biaoti1>1、	申请大学院研究生（研究生院预科）：在国内接受满16年正规教育（本科毕业即为16年、此项一般为硬性要求），除此外还需要至少N2以上的日语能力，根据升学专业而异，文科一般要求日语能力达到N1水平，大部分理工科专业N2水平左右；</Biaoti1>
                <Biaoti1>2、	申请大学（本科）：部分学校部分专业可直接从大三参加编入考核从大三开始学习，但考试难度和对日语的要求较高；</Biaoti1>
                <Biaoti1>3、	申请语言学校（专科生一般先申请语言学校过度）：需要目前为止的学历证明，学习过一定时间的日语（日语学时证明），具体依学校而定；</Biaoti1>
                <IndentBiaoti1>综上，留学条件里虽根据申请的等级不同而有所差异，但必不可少的一定是学习过日语，除此之外必须的就是有固定经济支付人，能保证你的学费正常交付。</IndentBiaoti1>
                <Title>材料准备</Title>
                <Biaoti1>1、	学历证明书；</Biaoti1>
                <Biaoti1>2、	日语学时证明或日语等级证书；</Biaoti1>
                <Biaoti1>3、	经济支付人的经济能力证明（在职证明，收入证明）；</Biaoti1>
                <Biaoti1>4、	申请学校统一式样的入学申请书，就学理由书，履历书等必填资料；</Biaoti1>
                <Biaoti1>5、	高考成绩证明（需认证）；</Biaoti1>
                <Biaoti1>6、	亲属公证（证明跟经济支付人关系）；</Biaoti1>
                <Biaoti1>7、	存款证明；</Biaoti1>
                <Biaoti1>8、	一定数量的规定样式照片。</Biaoti1>
                <Biaoti1>9、	护照复印件</Biaoti1>
                <Title>留学费用</Title>
                <Biaoti1>大学院研究生相关费用：</Biaoti1>
                <Biaoti1>1、	报名费：600RMB左右</Biaoti1>
                <Biaoti1>2、	入学金：5000RMB左右</Biaoti1>
                <Biaoti1>3、	学费：一年35万日元左右（2万RMB左右）</Biaoti1>
                <Biaoti1>4、	住宿费：宿舍一般较为便宜（1000RMB~3000RMB左右每月）</Biaoti1>
                <Indent1Biaoti1>外面租住一般3000RMB左右每月（分地区）</Indent1Biaoti1>
                <BottomBiaoti1>日本允许留学生申请打工，对家庭负担较小。</BottomBiaoti1>
            </Liuxue>
            <Liuxue id="work">
                <Img src={require('./Overseas_03.png')}/>
                <h3>工作后留学</h3>
                <Title>留学条件</Title>
                <Biaoti1>1、	学历为本科专科的参照大学生留学；</Biaoti1>
                <Biaoti1>2、	学历为高中的参照高中生留学。</Biaoti1>
                <Biaoti1>注：部分语言学校和大学对申请人年龄或毕业年限有要求，具体需咨询相关院校。</Biaoti1>
                <Title>材料准备</Title>
                <Biaoti1>1、	学历证明书；</Biaoti1>
                <Biaoti1>2、	日语学时证明或日语等级证书；</Biaoti1>
                <Biaoti1>3、	经济支付人的经济能力证明（在职证明，收入证明）；</Biaoti1>
                <Biaoti1>4、	申请学校统一式样的入学申请书，就学理由书，履历书等必填资料；</Biaoti1>
                <Biaoti1>5、	高考成绩证明（需认证）；</Biaoti1>
                <Biaoti1>6、	亲属公证（证明跟经济支付人关系）；</Biaoti1>
                <Biaoti1>7、	存款证明；</Biaoti1>
                <Biaoti1>8、	一定数量的规定样式照片。</Biaoti1>
                <BottomBiaoti1>9、	护照复印件</BottomBiaoti1>
            </Liuxue>
            <div className="liuxue-u">
                <ul className="liuxue-ul">
                <li className="liuxue-li"><img src={require('./liuxue.png')} className="liuxue-daohang2"/>日本留学</li>
                <Link to="/liuxue#gaozhong"><li className="liuxue-lis">高中生留学</li></Link>
                <Link to="/liuxue#daxue"><li className="liuxue-lis">大学生留学</li></Link>
                <Link to="/liuxue#work"><li className="liuxue-lis">工作后留学</li></Link>
                </ul>
            </div> 
        </Liuxues>
    </div>
  )
}

export default Index;