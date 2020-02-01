import React from "react"
import { Router } from "@reach/router"
import IndexPage from "./index.js"
import EPKPage from "./epk.js"
import { Helmet } from "react-helmet"

import "../styles/tailwind-base.css" // i feel like this is breaking my style file patterns
import "./app.scss"

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>sleepy the creator</title>
        <link rel="canonical" href="https://sleepythecreator.com" />
      </Helmet>
      <Router>
        <EPKPage path="/epk" />
        <IndexPage path="/" />
      </Router>
    </>
  )
}
export default App