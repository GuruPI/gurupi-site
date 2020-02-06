import React from "react"
import Layout from "../components/layout"
import About from "../pages/about"
import Events from "../pages/events"
import Presentations from "../pages/presentations"
import SimpleSlider from "../components/slider"
import Home from "../pages/home"

const IndexPage = () => (
  <div>
    <Layout>
      <Home />
      <About />
      <Events />
      <Presentations />
      <SimpleSlider />
    </Layout>
  </div>

)

export default IndexPage;
