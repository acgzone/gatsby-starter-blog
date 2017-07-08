import React from 'react';
import Link from "gatsby-link"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../utils/typography"
import './footer.css'

const Footer = () => {
  return <div>
        <img
          src={require('./footer.png')}
          alt={`大成日语`}
          style={{
            marginRight: rhythm(3 / 4),
            marginBottom: 0,
            width: '100%'
          }}
        />
        <div className="nav">
          <Link
            to="/"
            css={{
              display: `inline-block`,
              textDecoration: `none`,
              marginRight: rhythm(2/4)
            }}
          >
          关于我们
        </Link>
          <Link
            to="/"
            css={{
              display: `inline-block`,
              textDecoration: `none`,
              marginRight: rhythm(2/4)
            }}
          >
          人才招聘
        </Link>
          <Link
            to="/"
            css={{
              display: `inline-block`,
              textDecoration: `none`,
              marginRight: rhythm(2/4)
            }}
          >
          联系我们
        </Link>
        </div>
        <div className="contact">
          <p><span>地址</span>:<span>成都市高新区天府二街复城国际</span> </p>
          <p><span>电话</span>:<span>i028-66666666</span> </p>
          <p><span>邮箱</span>:<span>superman@dacheng.com</span> </p>
          <p><span>法律顾问</span>:<span>北京xxxx法律事务所</span> </p>
        </div>
        <div className="copyright">
          <p>Copyright@2006-2017</p>
          <p>版权所属成都大成教育公司 未经许可 严禁复制</p>
          <p>蜀ICP备13423432423号</p>
        </div>
    </div>
}

export default Footer;