import React from 'react'

export default class Presentation extends React.Component{
  constructor(props){
    super(props);

    this.state = {}
  }
  render(){
    return(
      <div>
        <h1>{this.props.data.title}</h1>
        <img src={this.props.data.image} />
        <p>{this.props.data.presentation}</p>
      </div>
    )
  }
}
