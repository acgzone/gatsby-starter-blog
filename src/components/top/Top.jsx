import React from 'react';
import Link from "gatsby-link"

import Quickstart from './Quickstart'

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../../utils/typography"
import './top.css'

const Top = ({ quickstart, clickQuickstart }) => {
  return <header>
    <div className="logo">
      <img src={require(quickstart ? "./close.png" : "./btn01.png")} className="bar" onClick={clickQuickstart}></img>
      <img
        css={{
          width: "77px",
          height: "70px",
        }}
        src={require("./logo.png")}></img>
    </div>
    <div className="nav">
      <ul>
        <li className="noslash">
          <Link to="/">
            <span className="rTitle">ホーム</span>
            <span className="title">首页</span>
          </Link>
        </li>
        <li>
          <span className="rTitle">学院案内</span>
          <span className="title">关于大成</span>
          <div className="dropdown-content">
            <Link to="/aboutDc/">大成简介</Link>
            <Link to="/aboutDc/about1/">团队介绍</Link>
            <Link to="/aboutDc/about2/">教学环境</Link>
          </div>
        </li>
        <li>
          <span className="rTitle">コース紹介</span>
          <span className="title">日语课程</span>
          <div className="dropdown-content">
            <Link to="/course#rydj">日语等级课程</Link>
            <Link to="/course#rylx">日语留学课程</Link>
            <Link to="/course#ryrm">日语入门课程</Link>
            <Link to="/course#ky">口语课程</Link>
            <Link to="/course#xq">兴趣课程</Link>
            <Link to="/course#ly">旅游课程</Link>
            <Link to="/course#se">少儿课程</Link>
            <Link to="/course#tbdz">特别定制课程</Link>
          </div>
        </li>
        <li>
          <span className="rTitle">日本留学</span>
          <span className="title">日本留学</span>
          <div className="dropdown-content">
            <Link to="/liuxue#gaozhong">高中生留学</Link>
            <Link to="/liuxue#daxue">大学生留学</Link>
            <Link to="/liuxue#work">工作后留学</Link>
          </div>
        </li>
        <li>
          <Link to="/news">
            <div className="Title">
              <span className="rTitle">最新情報</span>
              <span className="title">最新资讯</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/aboutus">
            <span className="rTitle">コンタクト</span>
            <span className="title">关于我们</span>
          </Link>
        </li>
      </ul>
    </div>
  </header>
}

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      quickstart: false,
    }
  }
  onClick() {
    console.log('onclick...')
    this.setState({
      quickstart: !this.state.quickstart,
    })
  }

  render() {
    const header = this.state.quickstart ?
      <div>
        <Top quickstart={true} clickQuickstart={this.onClick.bind(this)} />
        <Quickstart />
      </div>
      :
      <Top quickstart={false} clickQuickstart={this.onClick.bind(this)} />

    return (
      header
    )
  }
}
export default Header;
