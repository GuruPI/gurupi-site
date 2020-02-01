import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import About from "../pages/about"
import Presentations from "../pages/presentations"

const IndexPage = () => (
  <div>
    <Layout>
      <Menu />
      <About />
      <Presentations />
    </Layout>
  </div>

)

export default IndexPage
