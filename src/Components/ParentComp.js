import React, { Component } from 'react'
import ChildComp from './ChildComp'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(name){
        alert("Hello "+this.state.parentName+ " from " + name )
    }
  render() {
    return (
      <div>
          <ChildComp greet={this.greetParent}></ChildComp>
      </div>
    )
  }
}

export default ParentComp