import React from 'react'
import Helmet from "react-helmet"

import Banner from '../Banner'
import Sidebar from './Sidebar'
import Course from './Course'
import Liuxue from './Liuxue'
import News from './News'

import './index.css'

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
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
    this.setState({
      scrollTop,
    })
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
          <Sidebar scrollTop={this.state.scrollTop} />
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
