import React from "react"
import Layout from "../components/layout"
import dataJson from "../json/data"

const Presentations = () => (
  <div>
    <h1><a name="presentations"> Apresentações </a></h1>
    {
      dataJson.presentations.map(presentation => (
        <div className="card">
          <h4>{ presentation.title }</h4>
          <img src={ presentation.image } className="img-shrunked"/>
          <h3>{ presentation.speaker }</h3>
        </div>
      ))
    }
  </div>
)

export default Presentations;