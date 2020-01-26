import React from 'react'
import Layout from "../components/layout"

const music = () => (
  <Layout>
    <div>
      <h1>Music</h1>
      <h2>Featured | just press play</h2>
      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/974406868&color=%231c1c1c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <h2>Explore Spotify</h2>
      <iframe src="https://open.spotify.com/embed/artist/2esWMxozt2Dgc37VgUmebJ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  </Layout>
)

export default music