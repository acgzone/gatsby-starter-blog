import React from 'react'
import Helmet from "react-helmet"

import Banner from '../Banner'
import Course from './Course'
import Liuxue from './Liuxue'
import News from './News'
import Link from "gatsby-link"

import './index.css'

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
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
    if (scrollTop > 440) {
      this.setState({
        showSideBar: true,
      })
    } else {
      this.setState({
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

  render() {
    const { siteTitle, posts } = this.props;
    return (
      <div className="zhongjian">
        <Helmet title={siteTitle} />
        <Banner />
        <div id="main">
          {this.state.showSideBar ?
            <div className="index-u">
              <ul className="index-ul">
                  <li className="index-li"><img src={require('./index.png')}/>&nbsp;&nbsp;首页</li>
                  <Link to="/aboutDc"><li className="index-lis"><img src={require('./about-us.png')}/>&nbsp;&nbsp;关于大成</li></Link>
                  <Link to="/course"><li className="index-lis"><img src={require('./course.png')}/>&nbsp;&nbsp;日语课程</li></Link>
                  <Link to="/liuxue"><li className="index-lis"><img src={require('./oversea.png')}/>&nbsp;&nbsp;日本留学</li></Link>
                  <Link to="/news"><li className="index-lis"><img src={require('./news.png')}/>&nbsp;&nbsp;最新资讯</li></Link>
                  <Link to="/aboutus"><li className="index-lis"><img src={require('./contact.png')}/>&nbsp;&nbsp;关于我们</li></Link>
              </ul>
          </div>
            : ''}
          <div id="content" css={{
            marginLeft: 20,
            marginRight: 230,
          }}
          >
            <Course />
            <Liuxue />
            <News posts={posts} />
          </div>
        </div>
      </div>
    )
  }
}

export default Index;
