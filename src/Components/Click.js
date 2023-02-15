import React, { Component } from 'react'
import UpdatedComp from './withCounter'
 class Click extends Component {
  
  render() {
    return (
      <div>
      <button onClick={this.props.increment}>Clciked {this.props.count} times</button>
      </div>
    )
  }
}

export default UpdatedComp(Click)