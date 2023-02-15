import React from 'react'

export default function Listt()
 
{
    const names=['Ram','Sham','Mohan']
  return (
    <div>
    { names.map((name,index)=>{
      return <h2 key={index}>{name}</h2>
     })
    }
    </div>
  )
}
