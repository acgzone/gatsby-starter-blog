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
						<h2 className="aboutus-h2">客户帮助</h2>
						<img src={require('./cont_sjx.png')} className="aboutus-xs"/>
					</div>
				</div>
				<div className="aboutus-xx">座机：028 – 84278169</div>
				<div className="aboutus-xx">联系电话：17713547616</div>
				<div className="aboutus-xx">QQ：396703883</div>
				<div className="aboutus-xx">邮箱：396703883@qq.com</div>
				<div className="aboutus-nr">
					<div className="aboutus-khbz">
						<h2 className="aboutus-h2">联系地址</h2>
						<img src={require('./cont_sjx.png')} className="aboutus-xs"/>
					</div>
				</div>
				<div className="aboutus-xx">联系地址：成都市锦江区宏济新路5号  SOHO商务港309</div>
				<div className="aboutus-xx">地铁：地铁2号线牛王庙站  出站5分钟即达</div>
				
    </div>
  )
}

export default Index;