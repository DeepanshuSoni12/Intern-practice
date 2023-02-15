import React, { Component } from 'react'
import axios from 'axios'
 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{console.log(error)})
    }
  render() {
    return (
      <div>
        List of posts
        {
            this.state.posts.map((post)=>{
                return      <h1 key={post.id}>{post.title}</h1>
            })
        }
      </div>
    )
  }
}

export default PostList