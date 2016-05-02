/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css'

import Poster from 'components/Poster'
import Footer from 'components/Footer'
import Banner from './morrissey.png'

import styles from './styles.css'

function App(props) {
  return (
    <div className={styles.wrapper}>
      <a className={styles.logoWrapper} href="https://github.com/alesitalugo/this-charming-fan">
        <Poster className={styles.logo} src={Banner} alt="This Charming Fan" />
      </a>
      {props.children}
      <Footer />
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default App
