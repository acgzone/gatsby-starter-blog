import React from 'react';
import Link from "gatsby-link"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../../utils/typography"
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
          <div className="contact">
            <div className="text">
              <text>电话：</text>
              <text>028 – 84278169</text>
            </div>
            <div className="text">
              <text>邮箱：</text>
              <text>396703883@qq.com</text>
            </div>
            <div className="text">
              <text>地址：</text>
              <text>成都市锦江区宏济新路5号  SOHO商务港309</text>
            </div>
          </div>
          <div className="copyright">
            <div>Copyright@2006-2017</div>
            <div>版权所属成都大成教育公司 未经许可 严禁复制</div>
            <div>蜀ICP备13423432423号</div>
          </div>
        </div>
      </div>
    </div>
}

export default Footer;