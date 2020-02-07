import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ArticlePreview from "src/components/articlePreview"

import "./index.scss"

// Full Moon Article Imports
import fullmoonimg from "../images/Optimized-sleepy_tc_fullmoon8.jpg"

// Unfinished muzic Imports 
import unfinishedMixImg from "src/images/OPT-electric-30mins-unfinished-release.jpg"

const IndexPage = () => (
  <Layout>
    <div class="index-main-container">
      <ArticlePreview
        imageUrl={fullmoonimg}
        headerText={`January 2020 Marks the beginning of the "Full Moon Project"`}
        linkPath="/article/fullmoon"
        description={`In 2020 I'm releasing music on a lunar cycle..  The next release is on February 8th 2020.`}
      />
      <ArticlePreview
        imageUrl={unfinishedMixImg}
        headerText={`Let's start with 30mins of unfinished music.  lil' striptease`}
        linkPath="/article/unfinishedmuzic"
        description={`A mix of completely original music I wrote mostly in the fall of 2019.`}
      />
    </div>
  </Layout>
)

export default IndexPage
