import React, { useState } from 'react'

export default function 
() {
    const [count,setCount]=useState(0)

    function increment()
    {
        //setCount(count+1)
        setCount((prevState)=>{
            return prevState+1

        })
    }
    function incrementFive()
    {
        increment()
        increment()
        increment()
        increment()
        increment()
    }
  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={()=>{incrementFive()}}>Click</button>
    </div>
  )
}



// import React, { Component } from 'react'

// export class Counter extends Component {
//     constructor()
//     {
//         super();
//         this.state={
//             count:0
//         }

//     }
//     increment(){
//         //this.state.count=this.state.count+1;
//         this.setState({
//             count:this.state.count+1 
//         })
//     }
//   render() {
//     return (
//       <div>Count - {this.state.count}
//       <button onClick={()=>{ this.increment()}}>Click</button>
//       </div>
//     )
//   }
// }

// export default Counter