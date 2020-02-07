import React from 'react'
import Layout from "../components/layout"

const music = () => (
  <Layout>
    <div class="layout__music">
      <h1>Music | sleepy the creator</h1>
      <h2>
        Spotify
      </h2>
      <p>I love using spotify. I'm actively finding new music/building playlists on their platform.  All my official releases are available here.</p>
      <p>
        <a target="blank" href='https://open.spotify.com/artist/2esWMxozt2Dgc37VgUmebJ?si=qV0xZN0aR-eOaO86a-iz_g'>
          Here's a link to open Spotify
          </a>
      </p>
      <p>by the way, having more followers helps me tons. click the follow button below and give the sleepy algorithms a boost &lt;3</p>
      <div>
        <iframe
          src="https://open.spotify.com/follow/1/?uri=spotify:artist:2esWMxozt2Dgc37VgUmebJ&size=detail&theme=light&show-count=0"
          height="56"
          scrolling="no"
          frameborder="0"
          style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '300' }}
          allowtransparency="true">
        </iframe>
      </div>
      <hr />
      <h2>Soundcloud</h2>
      <p>Still the hub for underground music.  Soundcloud is a great place to hear DJ mixes and other less official projects.</p>
      <span style={{ display: 'flex' }}>
        <iframe
          allowtransparency="true"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fsleepythecreator&color=black_white&size=32"
          style={{ width: '32px', height: '32px' }}
        >
        </iframe>
        <div style={{ paddingLeft: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <a href="https://soundcloud.com/sleepythecreator" target="blank">Soundcloud | sleepy the creator</a>
        </div>

      </span>

      <p>Here's an embed to a playlist of music I wrote or collaborated on with other producers</p>
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/974406868&color=%231c1c1c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      >
      </iframe>
      <hr />
      <h2>Bandcamp</h2>
      <p>So far, all of my official releases are available to download for free in High Quality on Bandcamp.</p>
      <h3><a href="https://sleepythecreator.bandcamp.com/releases" target="blank">See my discography on Bandcamp</a></h3>
      <p>Following is luv..</p>
      <iframe
        scrolling="no"
        style={{ border: 0, width: '100%', height: '50px' }}
        src="https://bandcamp.com/band_follow_button_deluxe/4279040414">
      </iframe>
      <p>Here's some music from my latest project "The Full Moon Project"</p>
      <iframe
        style={{ border: 0, width: '100%', maxWidth: '350px', height: '470px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2874146748/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/transparent=true/"
        seamless><a href="http://sleepythecreator.bandcamp.com/album/full-moon-project"
        >
          Full Moon Project by sleepy the creator</a>
      </iframe>
    </div>
  </Layout>
)

export default music