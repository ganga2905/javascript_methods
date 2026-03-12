import React, { useState } from 'react'

const Show = () => {

    const[show,setShow]=useState(true);
    const handleShow=()=>{
        setShow(!show)
    }

  return (

    <div>
        {
            show&& <p>React is js library</p>
        }
        <button onClick={handleShow}>{show?"hide":"show"}</button>


    </div>
  )
}

export default Show