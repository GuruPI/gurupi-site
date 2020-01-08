import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Presentation from "../components/presentation"

const presentation = {
  title: "Renata",
  presentation: "Code for Humans",
  image: "https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png"
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Grupo de Usuários de Ruby do Piauí.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Presentation data={ presentation } />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
