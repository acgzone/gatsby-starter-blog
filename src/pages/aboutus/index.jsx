import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import './index.css'
const Index = () => {
  return (
    <div className="aboutus">
			<Helmet title="联系我们" />
        <img className="aboutus-img" src={require('./dacheng.png')}></img>
				<div className="aboutus-lxwm">
					<img src={require('./contact.png')} className="aboutus-tx"/>
					<text>联系我们</text>
				</div>
				<div className="aboutus-nr">
					<div className="aboutus-khbz">
						<h2 className="aboutus-h2">关注我们</h2>
						<img src={require('./cont_sjx.png')} className="aboutus-xs"/>
					</div>
				</div>
				<div className="aboutus-wx">
					<div className="aboutus-wx-div">
						<img className="aboutus-wx-img" src={require('./gzh.png')}/>
						<span>微信公众号</span>
					</div>
					<div className="aboutus-wx-div">
						<img className="aboutus-wx-img" src={require('./zx.jpeg')}/>
						<span>咨询微信</span>
					</div>
				</div>
				<div className="aboutus-nr">
					<div className="aboutus-khbz">
						<h2 className="aboutus-h2">客户帮助</h2>
						<img src={require('./cont_sjx.png')} className="aboutus-xs"/>
					</div>
				</div>
				<div className="aboutus-xx aboutus-marginT">座机：028 – 84278169</div>
				<div className="aboutus-xx">电话：17713547616（颜兴）</div>
				<div className="aboutus-xx">QQ：396703883</div>
				<div className="aboutus-xx aboutus-marginB">邮箱：396703883@qq.com</div>
				<div className="aboutus-nr">
					<div className="aboutus-khbz">
						<h2 className="aboutus-h2">联系地址</h2>
						<img src={require('./cont_sjx.png')} className="aboutus-xs"/>
					</div>
				</div>
				<div className="aboutus-xx aboutus-marginT">联系地址：成都市锦江区一环路东五段46号1栋5层16号</div>
				<div className="aboutus-xx aboutus-marginB">地铁：地铁2号线牛王庙站  出站5分钟即达</div>
				
    </div>
  )
}

export default Index;