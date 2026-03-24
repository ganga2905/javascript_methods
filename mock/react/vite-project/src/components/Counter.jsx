/*1. Create a React component with 
a button that increments a counter using 
useState. */

import React, { useState } from 'react'

const Counter = () => {

  const[count,setCount]=useState(0)

  const increase=()=>{
    setCount(count=>count+1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increament</button>

        
    </div>
  )
}

export default Counter
