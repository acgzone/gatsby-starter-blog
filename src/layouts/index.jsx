import React from "react"
import Link from "gatsby-link"
import Footer from "../components/Footer"
import Top from "../components/top/Top"
import Quickstart from '../components/top/Quickstart'

class DefaultLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      quickstart: false,
    }
  }
  onClick() {
    this.setState({
      quickstart: !this.state.quickstart,
    })
  }
  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps:', this.props.location.pathname, nextProps.location.pathname)
    // if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        quickstart: false,
      })
    // }
  }
  render() {
    const body = this.state.quickstart ?
      <div>
        <Top quickstart={true} clickQuickstart={this.onClick.bind(this)} />
        <Quickstart />
      </div>
      :
      <div>
        <Top quickstart={false} clickQuickstart={this.onClick.bind(this)} />
        <div css={{ height: '115px', }} />
        <div>
          {this.props.children()}
        </div>
        <Footer />
      </div>
    return body;
  }
}

export default DefaultLayout
