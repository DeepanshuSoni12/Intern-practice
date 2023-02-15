import React, { Component } from "react";

const UpdatedComp=(OrignalComp)=>{
    class NewComp extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
           
          increment=()=>{
              this.setState((prevState)=>{
                 return {
                     count:prevState.count+1
                 }
              })
          }
        render(){
            return <OrignalComp count={this.state.count} increment={this.increment} />
        }

    }

    return NewComp;
}

export default UpdatedComp