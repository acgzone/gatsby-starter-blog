import React from 'react';
import Link from "gatsby-link"

// Import typefaces
import './top.css'

class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      hideMenu: false,
    }
    this.scroll = {
      lastTime: Date.now(),
      times: 0,
    }
    this.oldTop = 0;
    this.handleScroll = this.handleScroll.bind(this);// 直接把this.handleScroll.bind(this);写在addEventListener和removeEventListener里面的话，会导致两次bind(this)的不是同一个函数，会remove不掉，存在内存泄露
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount: remove handleScroll')
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (Date.now() - this.scroll.lastTime < 100) {// 100ms之内的scroll才累加
      this.scroll.times += 1;
    } else { // 否则不连续的scroll应该是点击菜单造成的， 不影响顶部变化
      this.scroll.times = 1;
    }
    this.scroll.lastTime = Date.now();
    const scrollTop = this.getScrollTop();
    if (this.scroll.times <= 3) {
      this.oldTop = scrollTop;
      this.setState({
        hideMenu: false,
      })
      return;
    }

    this.safeScroll(e);
  }
  safeScroll(e) {
    const scrollTop = this.getScrollTop();
    console.log('scroll...', scrollTop)
    // todo 缩放比例会影响这个值， 应该也要“自适应”屏幕大小
    this.setState({
      hideMenu: scrollTop - this.oldTop > 0,
    })
    this.oldTop = scrollTop;
  }
  getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  }
  render() {
    const { quickstart, clickQuickstart } = this.props;
    return <header>
      <div className="logo"
        css={{
          height: this.state.oldTop == 0 ? "80px" : "70px"
        }}>
        <img src={require(quickstart ? "./close.png" : "./btn01.png")} className="bar" onClick={clickQuickstart}></img>
        <img
          css={{
            marginTop: 8,
            width: this.state.oldTop == 0 ? "200px" : "170px"
          }}
          src={require("./logo.png")} className="bar-img"></img>
      </div>
      <div className="logo-border" />
      <div
        css={{
          maxHeight: this.state.hideMenu ? 0 : 50,
        }}
        className="nav">
        <ul
          css={{
            display: this.state.hideMenu ? "none" : "block",
          }}>
          <li className="noslash lis">
            <Link to="/">
              <span className="rTitle">ホーム</span>
              <span className="title">首页</span>
            </Link>
          </li>
          <li className="lis">
            <span className="rTitle">学院案内</span>
            <span className="title">关于大成</span>
            <div className="dropdown-content">
              <div className="dropdown-content-div" />
              <Link to="/aboutDc">大成简介</Link>
              <Link to="/aboutDc/about1">团队介绍</Link>
              <Link to="/aboutDc/about2">教学环境</Link>
            </div>
          </li>
          <li className="lis">
            <span className="rTitle">コース紹介</span>
            <span className="title">日语课程</span>
            <div className="dropdown-content">
              <div className="dropdown-content-div" />
              <Link to="/course#ryrm">日语入门课程</Link>
              <Link to="/course#rydj">日语等级课程</Link>
              <Link to="/course#ky">口语课程</Link>
              <Link to="/course#rylx">日语留学课程</Link>
              <Link to="/course#xq">兴趣课程</Link>
              <Link to="/course#ly">旅游日语</Link>
              <Link to="/course#se">少儿日语</Link>
              <Link to="/course#tbdz">特别定制课程</Link>
            </div>
          </li>
          <li className="lis">
            <span className="rTitle">日本留学</span>
            <span className="title">日本留学</span>
            <div className="dropdown-content">
              <div className="dropdown-content-div" />
              <Link to="/liuxue#gaozhong">高中生留学</Link>
              <Link to="/liuxue#daxue">大学生留学</Link>
              <Link to="/liuxue#work">工作后留学</Link>
            </div>
          </li>
          <li className="lis">
            <Link to="/news">
              <div className="Title">
                <span className="rTitle">ニュース</span>
                <span className="title">新闻资讯</span>
              </div>
            </Link>
          </li>
          <li className="lis">
            <Link to="/aboutus">
              <span className="rTitle">コンタクト</span>
              <span className="title">联系我们</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  }
}

export default Top;
