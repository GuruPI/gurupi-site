import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import Home from "../pages/home"
import About from "../pages/about"
import Presentations from "../pages/presentations"

const IndexPage = () => (
  <div>
    <Layout>
      <Home />
      <About />
      <Presentations />
    </Layout>
  </div>

)

export default IndexPage;
