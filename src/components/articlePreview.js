import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './articlePreview.scss'

const ArticlePreview = ({
  linkPath = '/',
  imageUrl = null,
  headerText = 'this is a header',
  description = null
}) => (
    <div class="article-preview">
      <h2><Link class="article-preview-header" to={linkPath}>{headerText}</Link></h2>
      {imageUrl && (
        <div class="hp-blog-img">
          <Link to={linkPath}><img src={imageUrl} alt="Article Image" /></Link>
        </div>
      )}
      {description && (<p>{description}</p>)}
    </div>
  )

ArticlePreview.propTypes = {
  headerText: PropTypes.string,
  imageUrl: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string
}

export default ArticlePreview
