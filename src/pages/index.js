import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ArticlePreview from "src/components/ArticlePreview"

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
        description={`In 2020 I'm releasing music on a lunar cycle, so every full moon..  The next release is on February 8th 2020`}
      />
      <ArticlePreview
        imageUrl={unfinishedMixImg}
        headerText={`How do I start this thing?  Well I have loads of unfinished music.. sorry..`}
        linkPath="/article/unfinishedmuzic"
        description={`I put this together partly as a break to writting such chill music.`}
      />
            <ArticlePreview
        imageUrl={unfinishedMixImg}
        headerText={`How do I start this thing?  Well I have loads of unfinished music.. sorry..`}
        linkPath="/article/unfinishedmuzic"
        description={`I put this together partly as a break to writting such chill music.`}
      />
            <ArticlePreview
        imageUrl={unfinishedMixImg}
        headerText={`How do I start this thing?  Well I have loads of unfinished music.. sorry..`}
        linkPath="/article/unfinishedmuzic"
        description={`I put this together partly as a break to writting such chill music.`}
      />
            <ArticlePreview
        imageUrl={unfinishedMixImg}
        headerText={`How do I start this thing?  Well I have loads of unfinished music.. sorry..`}
        linkPath="/article/unfinishedmuzic"
        description={`I put this together partly as a break to writting such chill music.`}
      />
    </div>
  </Layout>
)

export default IndexPage
