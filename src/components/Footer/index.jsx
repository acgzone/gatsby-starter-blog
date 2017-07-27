import React from 'react';
import Link from "gatsby-link"

// Import typefaces
import './footer.css'

const Footer = () => {
  return <div className="footers">
      <div className="bg">
        <div className="content">
          <img src={require('./bg_text.png')}/>
        </div>
      </div>
      <div>
        <div className="footer"></div>
        <div className="footer_inner">
          <div className="footer-lxwm"><Link to="/aboutDc"><span className="footer-lxwm1">关于我们</span></Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to="/aboutus"><span className="footer-lxwm1">联系我们</span></Link></div>
          <div className="contact">
            <div className="footer-lx">
              <div>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</div>
              <div>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</div>
              <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</div>
            </div>
            <div className="footer-lx1">
              <div className="footer-dz">成都市锦江区宏济新路5号  SOHO商务港309</div>
              <div className="footer-dz">028 – 84278169</div>
              <div className="footer-dz">396703883@qq.com</div>
            </div>
            <div className="footer-lx2">
              <img className="footer-img" src={require('./Wx.jpeg')}/>
              <span>官方微信公众号</span>
            </div>
          </div>
          <div className="copyright">
            <div>Copyright@2016-2017</div>
            <div>版权所属 成都大成合力教咨询有限公司 未经许可 严禁复制</div>
            <div>蜀ICP备17023987号</div>
          </div>
        </div>
      </div>
    </div>
}

export default Footer;