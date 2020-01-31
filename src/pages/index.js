import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Presentation from "../components/presentation"
import Menu from "../components/menu"

const presentation = {
  title: "Renata",
  presentation: "Code for Humans",
  image: "https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png"
}

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Menu />
      <p>Grupo de Usuários de Ruby do Piauí.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Presentation data={ presentation } />
      </div>
    </Layout>
  </div>

)

export default IndexPage
