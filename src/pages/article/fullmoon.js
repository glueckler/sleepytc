import React from 'react'
import Article from 'src/components/article'
import fullmoonimg from "src/images/Optimized-sleepy_tc_fullmoon8.jpg"

const content = (
  <>
    <h1 class="article-header">The Full Moon Project ☾</h1>
    <p>
      A traditional calendar “month" is based on the lunar cycle, which humans used in ancient times to track seasons. There are approximately 12 lunar cycles in a solar cycle, the year 2020 has 13.
    </p>
    <p>
      2020 marks the beginning of Sleepy The Creator, and throughout the first year, there will be a release every month on the full moon.
    </p>
    <p>
      Don’t underestimate what you can do in a year.
    </p>
    <h3><a href="https://sleepythecreator.bandcamp.com/">Download for Free on Bandcamp</a></h3>
    <img class="article-img" src={fullmoonimg} alt="picture of a full moon as the album art" />
    <h3>Jan 10th 2020 - Wolf Moon</h3>
    <p>
      Wolves howl upwards towards the moon to project their sound.
    </p>
    <p>
      Dark like winter midnight.  A warm welcome to mystery over deep sub frequencies.  The night’s delight.
    </p>
    <iframe
      style={{ border: '0', width: '100%', maxWidth: '350px', height: '42px' }}
      src="https://bandcamp.com/EmbeddedPlayer/album=2874146748/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=1395986731/transparent=true/"
      seamless>
      <a href="http://sleepythecreator.bandcamp.com/album/full-moon-project">
        Full Moon Project by sleepy the creator
        </a>
    </iframe>
    <h3>Feb 8th 2020 - Snow Moon</h3>
    <p>
      Wavey fluttered synths melting over punchy drums and a dirty bass.
    </p>
    <p>
      Like falling snow in the mountains.
    </p>
  </>
)

export default () => (
  <Article content={content} />
)
