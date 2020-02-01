import React from "react"
import dataJson from "../json/data"

const Presentations = () => (
  <div>
    <h1><a name="presentations"> Palestras </a></h1>
    {
      dataJson.presentations.map((presentation, index) => (
        <div className="card" key={ index }>
          <h4 className="overlay">{ presentation.title }</h4>
          <img src={ presentation.image } className="img-shrunked"/>
          <h3>{ presentation.speaker }</h3>
        </div>
      ))
    }
  </div>
)

export default Presentations;