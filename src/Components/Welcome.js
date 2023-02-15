import React, {Component} from "react";

class Welcome extends Component{
    constructor(){
        super();
        this.state={
            message:"Hello Visitor",
            name:'Ram'
        }
    }
    changeTex()
    {
        this.setState({
            message:"Thanks for subsricbing",
            name:'Sham'
        })
    }
    render(){
        
        return (
            <div>
                <h1> {this.state.message} {this.state.name}</h1>
                <button onClick={()=>this.changeTex()}>Subscibe</button>
            </div>
        )
    }
}


export default Welcome