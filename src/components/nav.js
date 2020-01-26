import React from 'react'
import { Link } from 'gatsby'
import Socials from './socials'
import './nav.scss'

const nav = () => (
  <>
    <nav>
      <Link to="/" activeClassName="nav-active">home</Link>
      <Link to="/music" activeClassName="nav-active">music</Link>
    </nav>
    <Socials />
  </>
)

export default nav