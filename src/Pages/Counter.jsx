import React, { useState } from 'react'

function Counter() { 
  const [value,setValue]=useState(0); 
  const decreaseValue= ()=>{ 
  setValue(prev=>prev-1)
  }  
  const increaseValue= ()=>{ 
setValue(prev=>prev+1)
  }
  return (
    <div> 
      <button onClick={decreaseValue}>
       -
      </button> 
      <span>{value}</span> 
      <button onClick={increaseValue}> 
        +
        </button>
    </div>
  )
}

export default Counter