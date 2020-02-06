import React from 'react'
import Article from 'src/components/article'

const content = (
  <>
    <p>January 10th 2020 ... Wolf Moon</p>
    <p>Download the project on bandcamp: <a href="https://sleepythecreator.bandcamp.com/"></a></p>
    <iframe
      style={{ border: '0', width: '100%', height: '42px' }}
      src="https://bandcamp.com/EmbeddedPlayer/album=2874146748/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
      seamless>
      <a href="http://sleepythecreator.bandcamp.com/album/full-moon-project">Full Moon Project by sleepy the creator</a>
    </iframe>
  </>
)

export default () => (
  <Article content={content} />
)
