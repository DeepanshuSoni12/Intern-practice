import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Ram"
    }
    console.log("In constructor of LifeCycle A")
  }
  static getDerivedStateFromProps(prop,state)
  {
    console.log("In getDerivedStateFromProps of LifeCycle A")
    return null
  }
  componentDidMount(){
    console.log("In componentDidMount of LifeCycle A")
  }
    render() {
        console.log("In Render of LifeCycle A")
    return (
      <div>
LifeCycleA
<LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA