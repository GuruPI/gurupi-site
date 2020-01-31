import React from 'react'
import dataJson from "../json/data"

const Presentations = () => (
    <div>
      <h1>Apresentações</h1>

      {
        dataJson["presentation"].map(presentation => (
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <h2>{ presentation.title }</h2>
            <img src={ presentation.image } />
            <h3>{ presentation.speaker }</h3>
          </div>
        ))
      }

    </div>
)

export default Presentations;