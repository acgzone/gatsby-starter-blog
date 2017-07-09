import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { rhythm } from "../../utils/typography"

import styles from "../../styles"
import presets from "../../utils/presets"

const Index = () => {
  return <div>
    日本留学。。。
    <div id="gaozhong" css={{
      height: '400px',
      backgroundColor: 'green',
    }}>
      高中
    </div>
    <div id="daxue" css={{
      height: '400px',
      backgroundColor: 'red',
    }}>
    daxue
    </div>
    <div id="work" css={{
      height: '400px',
      backgroundColor: 'gray',
    }}>
    work
    </div>
  </div>
}

export default Index;