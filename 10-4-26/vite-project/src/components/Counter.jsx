import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const[count,setCount]=useState(0);

    const handleClickIncrease=()=>{
        setCount(count=>count+1)
    }
    const handleClickDecrease=()=>{
        setCount(count=>count-1)
    }
    const handelClickReset=()=>{
        setCount(0)
    }


  return (
    <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={handleClickIncrease}>+</button>
        <button onClick={handleClickDecrease}>-</button>
        <button onClick={handelClickReset}>0</button>
        </div>
  )
}

export default Counter