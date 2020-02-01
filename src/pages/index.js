import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import fullmoonimg from "../images/Optimized-sleepy_tc_fullmoon8.jpg"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=2952000421477442&autoLogAppEvents=1"></script>
    <h1>Full Moon Project</h1>
    <div class="hp-blog-img">
      <img src={fullmoonimg} alt="full moon project art" />
    </div>
    <p>In 2020 I'm releasing music on a lunar cycle, so every full moon..  The next release is on February 8th 2020</p>
    <p>January 10th 2020 ... Wolf Moon</p>
    <p>Download the project on bandcamp: <a href="https://sleepythecreator.bandcamp.com/"></a></p>
    <iframe style={{border: '0', width: '100%', height: '42px'}} src="https://bandcamp.com/EmbeddedPlayer/album=2874146748/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://sleepythecreator.bandcamp.com/album/full-moon-project">Full Moon Project by sleepy the creator</a></iframe>
  </Layout>
)

export default IndexPage
