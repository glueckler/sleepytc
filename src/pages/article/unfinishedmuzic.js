import React from 'react'
import Article from 'src/components/article'

const content = (
  <>
    <h1>30mins Unfinished Mix</h1>
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/720790507&color=%2332201e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
    </iframe>
    <p>Along with the Full Moon releases, these songs are something I will get finalized throughout 2020 and will release in early next year.</p>
  </>
)

export default () => (
  <Article content={content} />
)
