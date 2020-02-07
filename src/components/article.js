import React from 'react'
import Layout from './layout'

import './article.scss'

const Article = ({ content }) => (
  <Layout>
    <div class="article-container">
      {content}
    </div>
  </Layout>
)

export default Article