import React from 'react'
import SEO from "../components/seo"
import { Link } from "gatsby"

const Menu = () => (
  <div>
    <SEO title="Home" />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">Sobre</Link></li>
      <li><Link to="/presentations">Apresentações</Link></li>
    </ul>

  </div>
)

export default Menu;