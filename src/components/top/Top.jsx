import React from 'react';
import Link from "gatsby-link"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../../utils/typography"
import './top.css'

const Top = () => {
  const titleList = [
      { title: "首页", rTitle: "ホーム" , link: "/"},
      { title: '关于大成', rTitle: "学院案内" , link: "/"},
      { title: '日语课程', rTitle: "コース紹介" , link: "/"},
      { title: '日本留学', rTitle: "日本留学" , link: "/"},
      { title: '最新资讯', rTitle: "日本留学" , link: "/"},
      { title: '关于我们', rTitle: "コンタクト" , link: "/"}]
  return <div >
          <div className="logo">
            <img src={require("./btn01.png")} className="bar"></img>
            <img
              css={{
                width:"77px",
                height:"70px",
              }}
             src={require("./logo.png")}></img>
          </div>
          <div className="logo">
            {titleList.map(titleList =>
              <Link
                to={titleList.link}
                css={{
                  display: `inline-block`,
                }}
              >
                <div className="Title">
                  <text className="rTitle">{titleList.rTitle}</text>
                  <text className="title">{titleList.title}</text>
                </div>
              </Link>
            )}
          </div>
        </div>
}

export default Top;