import React from 'react'
import Layout from "../components/layout"
import dataJson from "../json/data"
import "../components/presentations.css"

const Presentations = () => (
  <Layout>
    <h1>Apresentações</h1>

    {
      dataJson.presentations.map(presentation => (
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>

          <h2>{ presentation.title }</h2>
          <img src={ presentation.image } />
          <h3>{ presentation.speaker }</h3>

        </div>
      ))
    }
  </Layout>
)

export default Presentations;