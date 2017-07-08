import React from "react"
import Link from "gatsby-link"
import Footer from "../components/Footer"
import { rhythm, scale } from "../utils/typography"
import styles from "../styles"
import presets from "../utils/presets"

import "typeface-space-mono"
import "typeface-spectral"

require(`prismjs/themes/prism-solarizedlight.css`)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <div {...styles.container} {...styles.verticalPadding}>
          <Link
            to="/"
            css={{
              display: `inline-block`,
              textDecoration: `none`,
            }}
          >
            <h1
              css={{
                ...scale(0),
                color: styles.colors.light,
                fontWeight: `normal`,
                lineHeight: 1,
                margin: 0,
              }}
            >
              Magicly's Blog
            </h1>
          </Link>
        </div>
        <div {...styles.container} {...styles.verticalPadding}>
          {this.props.children()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout
