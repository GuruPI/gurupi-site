import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Menu = () => (
  <div>
    <SEO title="Home" />
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#presentations">Apresentações</a></li>
    </ul>

  </div>
)

export default Menu;