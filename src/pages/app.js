import React from "react"
import { Router } from "@reach/router"
import IndexPage from "./index.js"
import EPKPage from "./epk.js"

import "../styles/index.css"

const App = () => {
  return (
    <Router>
      <EPKPage path="/epk" />
      <IndexPage path="/" />
    </Router>
  )
}
export default App