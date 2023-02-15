import React, { Component } from 'react'

 class LifeCycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Ram"
    }
    console.log("In constructor of LifeCycle B")
  }
  static getDerivedStateFromProps(prop,state)
  {
    console.log("In getDerivedStateFromProps of LifeCycle B")
    return null
  }
  componentDidMount(){
    console.log("In componentDidMount of LifeCycle B")
  }
    render() {
        console.log("In Render of LifeCycle B")
    return (
      <div>
LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB