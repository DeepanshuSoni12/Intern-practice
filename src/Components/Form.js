import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:"React"
      }
    }
    handleChangeTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleChangeUser=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleChangeComments=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleSubmit=(event)=>{
        
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
       event.preventDefault()
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username </label>
            <input type='text' value={this.state.username} onChange={this.handleChangeUser}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleChangeComments}></textarea>
        </div>
        <div>
        <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleChangeTopic}>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
                <option value="React">React</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form