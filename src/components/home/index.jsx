import React from 'react'
import Helmet from "react-helmet"

import Banner from '../Banner'
import Course from './Course'
import Liuxue from './Liuxue'
import News from './News'

import { rhythm } from "../../utils/typography"

import styles from "../../styles"
import presets from "../../utils/presets"
import './index.css'

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    console.log('componentWillUnmount: remove handleScroll')
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    const scrollTop = this.getScrollTop();
    console.log('scroll...', scrollTop)
    // todo 缩放比例会影响这个值， 应该也要“自适应”屏幕大小
    if (scrollTop > 420) {
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
            <div id="sidebar"
              css={{
                position: 'fixed',
                right: 20,
                bottom: 50,
                width: '200px',
                border: '1px solid red',
                height: '300px',
              }}
            >
              边栏。。。
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
