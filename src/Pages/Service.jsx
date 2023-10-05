import React, { useState } from 'react'

function Service() { 
  const[check, setCheck]=useState(false); 
  const toggleValue=()=>{   
    setCheck(prev =>!prev);
 
  }  
  return ( 
    <>
    <div>
      { check ? "true":"false"}
    </div>  
    <button onClick={toggleValue}>
       Toggle
    </button>
    </>
  )
}

export default Service