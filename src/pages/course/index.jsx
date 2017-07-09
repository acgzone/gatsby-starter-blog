import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { rhythm } from "../../utils/typography"

import styles from "../../styles"
import presets from "../../utils/presets"

const Index = () => {
  return <div>
      <div css={{height:'400px',}} id="rydj">日语等级课程</div>
      <div css={{height:'400px',}} id="rylx">日语留学课程</div>
      <div css={{height:'400px',}} id="ryrm">日语入门课程</div>
      <div css={{height:'400px',}} id="ky">口语课程</div>
      <div css={{height:'400px',}} id="xq">兴趣课程</div>
      <div css={{height:'400px',}} id="ly">旅游课程</div>
      <div css={{height:'400px',}} id="se">少儿课程</div>
      <div css={{height:'400px',}} id="tbdz">特别定制课程</div>

  </div>
}

export default Index;