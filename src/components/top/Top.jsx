import React from 'react';
import Link from "gatsby-link"

// Import typefaces
import './top.css'

class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
      oldTop:0
    }
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
    const scrollTop = this.getScrollTop();
    // console.log('scroll...', scrollTop)
    // todo 缩放比例会影响这个值， 应该也要“自适应”屏幕大小
    if (scrollTop -this.state.oldTop>0) {
      this.setState({
        oldTop:scrollTop,
        showSideBar: true,
      })
    } else {
      this.setState({
        oldTop:scrollTop,
        showSideBar: false,
      })
    }
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
render(){
  const { quickstart, clickQuickstart } = this.props;
  return <header>
    <div className="logo">
      <img src={require(quickstart ? "./close.png" : "./btn01.png")} className="bar" onClick={clickQuickstart}></img>
      <img
        css={{
          marginTop: 8,
        }}
        src={require("./logo.png")}></img>
    </div>
    <div 
      css={{
        maxHeight: this.state.showSideBar ?  0 : 50,
        borderTop: this.state.showSideBar ?"none":"1px solid #e5e5e5",
    borderBottom: this.state.showSideBar ?"none":"1px solid #e5e5e5",
      }}
      className="nav">
      <ul
      css={{
            display: this.state.showSideBar ?  "none" : "block",
      }}>
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
            <Link to="/aboutDc">大成简介</Link>
            <Link to="/aboutDc/about1">团队介绍</Link>
            <Link to="/aboutDc/about2">教学环境</Link>
          </div>
        </li>
        <li>
          <span className="rTitle">コース紹介</span>
          <span className="title">日语课程</span>
          <div className="dropdown-content">
            <Link to="/course#ryrm">日语入门课程</Link>
            <Link to="/course#rydj">日语等级课程</Link>
            <Link to="/course#ky">口语课程</Link>
            <Link to="/course#rylx">日语留学课程</Link>
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
}

export default Top;
