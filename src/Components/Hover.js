import React, { Component } from 'react'
import UpdatedComp from './withCounter'
export class Hover extends Component {
    
    render() {
    return (
      <div>
        <h1 onMouseOver={this.props.increment}>Hover {this.props.count} times</h1>
      </div>
    )
  }
}

export default UpdatedComp(Hover)