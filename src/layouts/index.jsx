import React from "react"
import Link from "gatsby-link"
import { rhythm, scale } from "../utils/typography"
import styles from "../styles"
import presets from "../utils/presets"
import Footer from "../components/Footer"
import Top from "../components/top/Top"
import "typeface-space-mono"
import "typeface-spectral"
require(`prismjs/themes/prism-solarizedlight.css`)

class DefaultLayout extends React.Component {
  render() {

    return (
      <div>
        <Top />
        <div css={{height:'190px',}}/>
        <div>
          {this.props.children()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout
