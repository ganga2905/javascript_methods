// Create a counter component with Increment, Decrement, and Reset buttons 
// using useState. 

import { useState } from "react"

const Counter=()=>{
    const[count,setCount]=useState(0)

    const increase=()=>{
        setCount(count=>count+1)


    }
        const decrease=()=>{
        setCount(count=>count-1)

        
    }
        const reset=()=>{
        setCount(0)

        
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
             <button onClick={decrease}>-</button>
             <button onClick={reset}>0</button>
        </div>
    )
}
export default Counter



