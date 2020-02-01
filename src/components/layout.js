import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Nav from "./nav.js"
import sleepy_the_creator from "./sleepy_the_creator.svg"
import Footer from "./footer.js"

const Layout = ({ children }) => {
  return (
    <div
      className="layout-container"
    >
      <object type="image/svg+xml" data={sleepy_the_creator}>
        Your browser does not support SVG
      </object>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
