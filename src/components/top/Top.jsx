import React from 'react';
import Link from "gatsby-link"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../../utils/typography"
import './top.css'

const Top = () => {
  return <div className="header">
          <div className="logo">
            <a href="#"><img src={require("./btn01.png")} className="bar"></img></a>
            <img
              css={{
                width:"77px",
                height:"70px",
              }}
             src={require("./logo.png")}></img>
          </div>
          <div className="caidan">
            <div className="menu">
              <Link to="/">
                  <div className="Title">
                    <text className="rTitle">ホーム</text>
                    <text className="title">首页</text>
                  </div>
                </Link>
                <img src={require("./xg.png")} className="xg"></img>
                <div className="Title">
                  <text className="rTitle">学院案内</text>
                  <text className="title">关于大成</text>
                  <div className="dropdown-content">
                    <a href="#">大成简介</a>
                    <a href="#">教学环境</a>
                    <a href="#">团队介绍</a>
                  </div>
                </div>
                <img src={require("./xg.png")} className="xg"></img>
                <div className="Title">
                  <text className="rTitle">コース紹介</text>
                  <text className="title">日语课程</text>
                  <div className="dropdown-content">
                    <a href="#">日语等级课程</a>
                    <a href="#">日语留学课程</a>
                    <a href="#">日语入门课程</a>
                    <a href="#">口语课程</a>
                    <a href="#">兴趣课程</a>
                    <a href="#">旅游课程</a>
                    <a href="#">少儿课程</a>
                    <a href="#">特别定制课程</a>
                  </div>
                </div>
                <img src={require("./xg.png")} className="xg"></img>
                <div className="Title">
                  <text className="rTitle">日本留学</text>
                  <text className="title">日本留学</text>
                  <div className="dropdown-content">
                    <a href="#">高中生留学</a>
                    <a href="#">大学生留学</a>
                    <a href="#">工作后留学</a>
                  </div>
                </div>
                <img src={require("./xg.png")} className="xg"></img>
                <Link to="/">
                  <div className="Title">
                    <text className="rTitle">最新情報</text>
                    <text className="title">最新资讯</text>
                  </div>
                </Link>
                <img src={require("./xg.png")} className="xg"></img>
                <Link to="/">
                  <div className="Title">
                    <text className="rTitle">コンタクト</text>
                    <text className="title">关于我们</text>
                  </div>
                </Link>
            </div>
          </div>
        </div>
}

export default Top;