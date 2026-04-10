import React from 'react'

const Function = ({handleClick}) => {
  return (
    <div>
        <h1>function clicked </h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Function