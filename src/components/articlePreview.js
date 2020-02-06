import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ArticlePreview = ({ linkPath = '/', imageUrl = null, headerText = 'this is a header', description = null }) => (
  <div class="article-preview">
    <Link to={linkPath}><h2>{ headerText }</h2></Link>
    { imageUrl && (
      <div class="hp-blog-img">
      <img src={imageUrl} alt="Article Image" />
    </div>
    ) }
    { description && (<p>{ description }</p>)}
  </div>
)

ArticlePreview.propTypes = {
  headerText: PropTypes.string,
  imageUrl: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string
}

export default ArticlePreview
