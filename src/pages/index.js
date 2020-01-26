import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=2952000421477442&autoLogAppEvents=1"></script>
    <h1>Yo</h1>
    <div class="fb-page" data-href="https://www.facebook.com/sleepythecreator/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/sleepythecreator/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/sleepythecreator/">Sleepy The Creator</a></blockquote></div>
    <p>it's sleepy</p>
  </Layout>
)

export default IndexPage
