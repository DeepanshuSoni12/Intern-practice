import Input from './Input';
import './App.css';
import Evaluation from './evaluate';
import { useState } from 'react';
function App() {
  const[result,setResult]=useState('')

   const handleClick= (event)=>{
    setResult(result+event.target.value)
   }

   const clearDisplay = ()=>{
    setResult("")
   }

   const handleDelete=()=>{
    setResult(result.slice(0,-1))
   }

   const evalDisplay=()=>{

     const evalObj = new Evaluation()

     const answer=evalObj.calculate(result)

     setResult(answer)
     
   }

   const valueArray=['C','DEL','.','/','9','8','7','*','6','5','4','+','3','2','1','-','(','0',')','=']
  return (
    <div className='container'>
    <input type='text' className='display' value={result}></input>
   { valueArray.map((item)=>{
      return (<Input type='button'  value={item} 
    onClick={item=='C'?clearDisplay:item=='DEL'?handleDelete:item=='='?evalDisplay:handleClick }></Input>)
    })}
     
    </div>

  );
}

export default App;
